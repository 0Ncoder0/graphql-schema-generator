const fs = require("fs");
const path = require("path");
const gql = require("graphql-tag");
const config = require("../gspconfig.json");
const fetch = require("./fetch/index");
const gEnums = require("./generator/enum");
const gFragment = require("./generator/fragment");
const gInterface = require("./generator/interface");
const gMethod = require("./generator/method");
const { getEslintDisable } = require("./generator/utils");

//  'OBJECT', 'SCALAR', 'ENUM', 'INPUT_OBJECT', 'UNION'

const joinPath = (dir, fileName) => {
  return /^\./.test(dir) ? path.join(__dirname, "../", dir, fileName) : path.join(dir, fileName);
};

const output = {
  schema: joinPath(config.outDir, "schema.json"),
  interface: joinPath(config.outDir, "interface.ts"),
  enum: joinPath(config.outDir, "enum.ts"),
  fragment: joinPath(config.outDir, "fragment.ts"),
  query: joinPath(config.outDir, "query.ts"),
  mutation: joinPath(config.outDir, "mutation.ts"),
  index: joinPath(config.outDir, "index.ts")
};

const booter = async function () {
  if (config.remote) {
    const schema = await fetch(config.remote);
    fs.writeFileSync(output.schema, JSON.stringify(schema));
  }
  const schema = require(output.schema);
  const enums = gEnums(schema.types);
  fs.writeFileSync(output.enum, getEslintDisable() + enums);

  const fragment = gFragment(schema.types);
  fs.writeFileSync(output.fragment, getEslintDisable() + fragment);

  const interface = gInterface(schema.types);
  fs.writeFileSync(output.interface, getEslintDisable() + interface);

  const query = gMethod(schema.types.find(type => type.name === "Query"));
  fs.writeFileSync(output.query, getEslintDisable() + query);

  const mutation = gMethod(schema.types.find(type => type.name === "Mutation"));
  fs.writeFileSync(output.mutation, getEslintDisable() + mutation);
};
booter();
