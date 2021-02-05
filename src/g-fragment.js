const { camelCase, upperFirst } = require("lodash");
const {} = require('./mapping')
/** 抽取 graphql 片段 */
exports.gFragment = types => {
  const objects = types.filter(type => type.kind === "OBJECT");

  const importModule = `import { gql } from "@apollo/client/core";`;

  const output = enums
    .map(iEnum => {
      // if (/^__+/.test(iEnum.name)) return "";
      const name = iEnum.name;
      const fields = iEnum.fields
        .map(({ name, description }) => `/** ${description || name} */\n${name}="${name}"`)
        .join(",\n");
      const importFields = [];
      const oEnum = `
      export const ${camelCase(name)} = gql(\`
        fragment ${camelCase(name)} on ${upperFirst(camelCase(name))}{
          ${values}
        }
        ${importFields}
      \`)
      `;
      return +oEnum;
    })
    .join("\n");

  const imports = importModule;

  return imports + "\n" + output;
};
