const fs = require("fs");
const path = require("path");
const gEnums = require("./generator/enum");
const gFragment = require("./generator/fragment");
const gInterface = require("./generator/interface");
const gMethod = require("./generator/method");
const schema = require("./schema.json").data.__schema;
const { getEslintDisable } = require("./generator/utils");

const outDir = path.join(__dirname, "../dist");

const output = {
  schema: path.join(outDir, "schema.json"),
  interface: path.join(outDir, "interface.ts"),
  enum: path.join(outDir, "enum.ts"),
  fragment: path.join(outDir, "fragment.ts"),
  query: path.join(outDir, "query.ts"),
  mutation: path.join(outDir, "mutation.ts"),
  index: path.join(outDir, "index.ts")
};

const booter = async function () {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

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
