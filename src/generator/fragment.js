const { camelCase } = require("lodash");
const { gType, skipField } = require("./utils");

/** 抽取 graphql 片段 */
module.exports = types => {
  const skips = ["query", "mutation"];

  const fragments = types.filter(type => {
    const { prop } = gType(type);
    if (skips.includes(camelCase(type.name))) return false;
    if (/^__+/.test(type.name)) return false;
    return prop.get("OBJECT") || prop.get("UNION");
  });
  const gField = field => {
    if (skipField(field)) return "";

    const { description, name } = field;
    const { name: tName, prop: tProp } = gType(field.type);
    const oField = [
      `# ${description || name}
      ${name} ${tProp.get("OBJECT") || tProp.get("UNION") ? `{ ...${camelCase(tName)} }` : ""}`,
      tProp.get("OBJECT") || tProp.get("UNION") ? "${" + camelCase(tName) + "}" : ""
    ];
    return oField;
  };
  const pType = field => {
    const { description, name } = field;
    const oType = [
      `# ${description || name}
      ... on ${name} { ...${camelCase(name)} }`,
      "${" + camelCase(name) + "}"
    ];
    return oType;
  };
  const gUnion = type => {
    const { description, name } = type;
    const pTypes = type.possibleTypes.map(pType);
    const oUnion = `
      /** ${description || name} */
      export const ${camelCase(name)} = gql\`
        fragment ${camelCase(name)} on ${name}{
          ${pTypes.map(type => type[0]).join("\n")}
        }
        ${pTypes.map(type => type[1]).join("\n")}
      \`
    `;
    return oUnion;
  };
  const gFragment = type => {
    const { description, name } = type;
    const fields = type.fields.map(gField);
    const oFragment = `
      /** ${description || name} */
      export const ${camelCase(name)} = gql\`
        fragment ${camelCase(name)} on ${name}{
          ${fields.map(field => field[0]).join("\n")}
        }
        ${fields.map(field => field[1]).join("\n")}
      \`
    `;
    return oFragment;
  };

  /** 按照依赖情况排序 */
  const order = (arr, ordered = [], dig = 9) => {
    if (dig) dig--;
    else throw new Error(`\n\n可能存在互相引用的情况:\n\n${arr.map(e => e.name).join("\n")}\n\n`);

    if (!arr.length) return ordered;

    return order(
      arr.filter(ele => {
        const valid = ele.fields.every(field => {
          const { name, prop } = gType(field.type);

          if (skipField(field)) return true;

          return !prop.get("OBJECT") || ordered.includes(name);
        });

        if (valid) {
          ordered.push(ele.name);
          return false;
        } else {
          return true;
        }
      }),
      ordered,
      dig
    );
  };

  const ordered = order(fragments);

  const output = fragments
    .sort((a, b) => ordered.indexOf(a.name) - ordered.indexOf(b.name))
    .map(iFragment => {
      switch (iFragment.kind) {
        case "OBJECT":
          return gFragment(iFragment);
        case "UNION":
          return gUnion(iFragment);
      }
    })
    .join("\n");
  const importModule = `import { gql } from "@apollo/client/core";`;

  const imports = importModule;

  return imports + "\n" + output;
};
