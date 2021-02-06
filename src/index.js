const fs = require("fs");
const path = require("path");
const gql = require("graphql-tag");
const config = require("../gspconfig.json");
const fetch = require("./fetch/index");
const gEnums = require("./generator/enum");
const gFragment = require("./generator/fragment");
const gInterface = require("./generator/interface");

//  'OBJECT', 'SCALAR', 'ENUM', 'INPUT_OBJECT', 'UNION'

const excludes = {
  schema: path.join(__dirname, "../", config.exclude, "schema.json"),
  interface: path.join(__dirname, "../", config.exclude, "interface.ts"),
  enum: path.join(__dirname, "../", config.exclude, "enum.ts"),
  fragment: path.join(__dirname, "../", config.exclude, "fragment.ts"),
  query: path.join(__dirname, "../", config.exclude, "query.ts"),
  mutation: path.join(__dirname, "../", config.exclude, "mutation.ts"),
  index: path.join(__dirname, "../", config.exclude, "index.ts")
};

const booter = async function () {
  if (config.remote) {
    const schema = await fetch(config.remote);
    fs.writeFileSync(excludes.schema, JSON.stringify(schema));
  }
  const schema = require(excludes.schema);
  const enums = gEnums(schema.types);
  fs.writeFileSync(excludes.enum, enums);

  const fragment = gFragment(schema.types);
  fs.writeFileSync(excludes.fragment, fragment);

  const interface = gInterface(schema.types);
  fs.writeFileSync(excludes.interface, interface);
};
booter();
