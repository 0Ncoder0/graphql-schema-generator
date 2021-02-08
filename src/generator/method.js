const { camelCase, upperFirst } = require("lodash");
const { scalarType } = require("../mapping");
const { gType } = require("./utils");
/** 生成 Method */
module.exports = method => {
  const enums = [];
  const interfaces = [];
  const fragments = [];

  const gArg = type => {
    const { name, prop } = gType(type.type);
    if (prop.get("ENUM")) enums.push(name);
    if (prop.get("OBJECT") || prop.get("UNION") || prop.get("INPUT_OBJECT")) interfaces.push(name);
    return {
      fParam: [
        type.name,
        prop.get("NON_NULL") ? ":" : "?:",
        prop.get("SCALAR") ? scalarType.get(name) : name,
        prop.get("LIST") ? "[]" : ""
      ].join(""),
      gParam: [`$${type.name}:${name}${prop.get("NON_NULL") ? "!" : ""}`, `${type.name}:$${type.name}`]
    };
  };
  const gOut = type => {
    const { name, prop } = gType(type);
    const fName = camelCase(name);
    if (prop.get("ENUM")) enums.push(name);
    if (prop.get("OBJECT") || prop.get("UNION") || prop.get("INPUT_OBJECT")) {
      interfaces.push(name);
      fragments.push(fName);
    }
    return {
      fOutput: (prop.get("SCALAR") ? scalarType.get(name) : name) + (prop.get("LIST") ? "[]" : ""),
      gOutput: prop.get("SCALAR") || prop.get("ENUM") ? ["", ""] : [`{ ...${fName} }`, "${f" + upperFirst(fName) + "}"]
    };
  };

  const output = method.fields
    .map(iMethod => {
      const methodName = camelCase(method.name);
      const { name, description, args, type } = iMethod;
      const oArgs = args.map(gArg);
      const oOutput = gOut(type);
      const oMethod = `
      /** ${description || name} */
      export const ${name} = async (${oArgs.map(arg => arg.fParam).join(",")}):Promise<${oOutput.fOutput}> => {
       return await clients.core.${methodName === "query" ? "query" : "mutate"}({
         ${methodName}:gql\`
          ${methodName} ${name} ${oArgs.length ? `(${oArgs.map(arg => arg.gParam[0]).join(",")})` : ""}{
            ${name} ${oArgs.length ? `(${oArgs.map(arg => arg.gParam[1]).join(",")})` : ""}
            ${oOutput.gOutput[0]}
          }
          ${oOutput.gOutput[1]}
         \`,
         variables:{ ${args.map(arg => arg.name).join(",")} }
       }).then(res=>res.data.${name})
      }
      `;

      return oMethod;
    })
    .join("\n");

  const importModule = `
    import { gql } from "@apollo/client/core";
    import { clients } from "@/apollo";
  `;

  const importFragments = [
    fragments.length
      ? `import {${Array.from(new Set(fragments))
          .map(frg => `${frg} as f${upperFirst(frg)}`)
          .join(",")}} from "./fragment";`
      : "",
    enums.length ? `import {${Array.from(new Set(enums)).join(",")}} from "./enum";` : "",
    interfaces.length ? `import {${Array.from(new Set(interfaces)).join(",")}} from "./interface";` : ""
  ].join("\n");

  const imports = importModule + "\n" + importFragments;

  return imports + "\n" + output;
};
