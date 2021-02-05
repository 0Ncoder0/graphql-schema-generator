/** 抽取枚举类 */
exports.gEnums = types => {
  const enums = types.filter(type => type.kind === "ENUM");

  const output = enums
    .map(iEnum => {
      if (/^__+/.test(iEnum.name)) return "";

      const values = iEnum.enumValues
        .map(({ name, description }) => `/** ${description || name} */\n${name}="${name}"`)
        .join(",\n");

      const oEnum = `export enum ${iEnum.name}{\n${values}\n}`;

      return oEnum;
    })
    .join("\n");

  return output;
};
