const { camelCase, upperFirst } = require("lodash");
const { scalarType } = require("../mapping/index");
const { gType, skipField } = require("./utils");

/** 抽取 graphql 片段 */
module.exports = types => {
  const skips = ["query", "mutation"];

  const interfaces = types.filter(type => {
    const { prop } = gType(type);
    if (skips.includes(camelCase(type.name))) return false;
    if (/^__+/.test(type.name)) return false;
    return prop.get("OBJECT") || prop.get("INPUT_OBJECT") || prop.get("UNION");
    // return prop.get("UNION");
  });

  const enums = [];

  /** 声明字段 */
  const gField = field => {
    const { description, name } = field;
    const { name: tName, prop: tProp } = gType(field.type);

    const oField = [
      `/** ${description || name} ${skipField(field) ? "skipped" : ""}*/\n`,
      name,
      tProp.get("NON_NULL") ? ":" : "?:",
      tProp.get("SCALAR") ? scalarType.get(tName) : tName,
      tProp.get("LIST") ? "[];" : ";"
    ].join("");

    if (tProp.get("ENUM")) {
      enums.push(tName);
    }

    return oField;
  };
  /** 可能的值 */
  const gPossibleType = pType => {
    const { name, prop } = gType(pType);

    const oType = [prop.get("SCALAR") ? scalarType.get(name) : name, prop.get("LIST") ? "[]" : ""].join("");

    if (prop.get("ENUM")) {
      enums.push(name);
    }

    return oType;
  };

  /** 声明对象类型 */
  const gObject = type => {
    const { name, fields, description } = type;
    const iFeilds = fields.map(gField).join("\n");
    return `
      /** ${description || name} */
      export interface ${name} {
        ${iFeilds}
      }
    `;
  };
  /** 声明入参类型 */
  const gInputObject = type => {
    const { name, inputFields, description } = type;
    const fields = inputFields.map(gField).join("\n");
    return `
      /** ${description || name} */
      export interface ${name} { 
        ${fields} 
      }
    `;
  };
  /** 声明联合类型 */
  const gUnion = type => {
    const { name, possibleTypes, description } = type;
    const pTypes = possibleTypes.map(gPossibleType).join("|");
    return `
      /** ${description || name} */
      export type ${name} = ${pTypes};
    `;
  };

  const output = interfaces
    .map(iInterface => {
      switch (iInterface.kind) {
        case "OBJECT":
          return gObject(iInterface);
        case "INPUT_OBJECT":
          return gInputObject(iInterface);
        case "UNION":
          return gUnion(iInterface);
      }
    })
    .join("\n");

  const imports = enums.length ? `import {${Array.from(new Set(enums)).join(",")}} from './enum'` : "";

  return imports + "\n" + output;
};
