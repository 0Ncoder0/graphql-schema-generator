const fs = require("fs");
const path = require("path");
const gql = require("graphql-tag");
const config = require("../gspconfig.json");
const { fetch } = require("./fetch-schema");
const { gEnums } = require("./g-enum");
const { gFragment } = require("./g-fragment");
//  'OBJECT', 'SCALAR', 'ENUM', 'INPUT_OBJECT', 'UNION'
const booter = async function () {
  if (config.remote) {
    const schema = await fetch(config.remote);
    fs.writeFileSync(path.join(__dirname, "../", config.exclude, "schema.json"), JSON.stringify(schema));

    const enums = gEnums(schema.types);
    fs.writeFileSync(path.join(__dirname, "../", config.exclude, "schema.enum.ts"), enums);

    const fragment = gFragment(schema.types);
    fs.writeFileSync(path.join(__dirname, "../", config.exclude, "schema.fragment.ts"), fragment);
  }
};
booter();

// const include = path.join(__dirname, './schema.graphql')
// const exclued = path.join(__dirname, './graphql')
// const source = fs.readFileSync(include)

// const schema = gql(`${source}`)
// genarator
// const kinds = {
//   DirectiveDefinition: [],
//   ObjectTypeDefinition: [],
//   EnumTypeDefinition: [],
//   InputObjectTypeDefinition: [],
//   UnionTypeDefinition: [],
//   ScalarTypeDefinition: []
// }

// schema.definitions.forEach(definition => {
//   kinds[definition.kind].push(definition)
// })
// try {
//   fs.rmdirSync(exclued)
// } finally {
//   fs.mkdirSync(exclued)
// }
// /** 枚举类型 */
// {
//   const enums = kinds.EnumTypeDefinition
//   const output = enums
//     .map(enumDefinition => {
//       const data = enumDefinition
//       const values = data.values.map(value => `${value.name.value}="${value.name.value}"`).join(',\n\t')
//       const output = `export enum ${data.name.value}{\n\t${values}\n}`
//       return output
//     })
//     .join('\n')
//   fs.writeFileSync(path.join(exclued, '/schema.enum.json'), JSON.stringify(enums))
//   fs.writeFileSync(path.join(exclued, '/schema.enum.ts'), output)
// }
