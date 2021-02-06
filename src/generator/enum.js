/** 抽取枚举类 */
module.exports = types => {
  const enums = types.filter(type => type.kind === "ENUM");

  const output = enums
    .map(iEnum => {
      const { description, name } = iEnum;
      if (/^__+/.test(name)) return "";

      const values = iEnum.enumValues
        .map(({ name, description }) => `/** ${description || name} */\n${name}="${name}"`)
        .join(",\n");

      const oEnum = `
        /** ${description || name} */
        export enum ${iEnum.name}{
          ${values}
        }
      `;

      return oEnum;
    })
    .join("\n");

  return output;
};
