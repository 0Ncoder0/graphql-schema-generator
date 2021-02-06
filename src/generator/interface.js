const { camelCase, upperFirst } = require("lodash");
const { innerType } = require("../mapping/index");
/** 抽取 graphql 片段 */
module.exports = types => {
  const skips = ["query", "mutation"];

  const interfaces = types.filter(type => type.kind === "OBJECT");

  const enums = [];

  const output = interfaces
    .map(iInterface => {
      const { name, description } = iInterface;

      if (skips.includes(camelCase(name))) return "";
      if (/^__+/.test(name)) return "";

      const fields = iInterface.fields
        .map(({ name, description, type }) => {
          const fieldType = (type.ofType || type).name;

          const isEnum = (type.ofType || type).kind === "ENUM";
          isEnum && enums.push(fieldType);

          const oField = `/** ${description || name} */\n${name}:${innerType.get(fieldType) || fieldType}`;
          return oField;
        })
        .join(";\n");

      const oInterface = `
        /** ${description || name} */
        export interface ${name} {
          ${fields}
        }
      `;

      return oInterface;
    })
    .join("\n");

  const imports = enums.length ? `import {${Array.from(new Set(enums)).join(",")}} from './enum'` : "";

  return imports + "\n" + output;
};
