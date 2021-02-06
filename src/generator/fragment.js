const { camelCase, upperFirst } = require("lodash");

/** 抽取 graphql 片段 */
module.exports = types => {
  const skips = ["query", "mutation"];

  const fragments = types.filter(type => type.kind === "OBJECT");

  const importModule = `import { gql } from "@apollo/client/core";`;

  const output = fragments
    .map(iFragment => {
      const { name, description } = iFragment;
      if (skips.includes(camelCase(name))) return "";
      if (/^__+/.test(name)) return "";

      const fieldTypes = [];
      const fields = iFragment.fields
        .map(({ name, description, type }) => {
          const fieldType = (type.ofType || type).kind === "OBJECT" ? (type.ofType || type).name : null;
          fieldType && fieldTypes.push(camelCase(fieldType));
          const oField = `# ${description || name}\n${name}${fieldType ? `{...${camelCase(fieldType)}}` : ""}`;
          return oField;
        })
        .join("\n");

      const importFields = Array.from(new Set(fieldTypes))
        .map(type => "${" + camelCase(type) + "}")
        .join("\n");

      const oFragment = `
        /** ${description || name} */
        export const ${camelCase(name)} = gql\`
          fragment ${camelCase(name)} on ${upperFirst(camelCase(name))}{
          ${fields}
          }
          ${importFields}
        \`
      `;

      return oFragment;
    })
    .join("\n");

  const imports = importModule;

  return imports + "\n" + output;
};
