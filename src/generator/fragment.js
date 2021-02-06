const { camelCase, upperFirst } = require("lodash");
const { scalarType } = require("../mapping");
const { gType } = require("./utils");

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

  const output = fragments
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
