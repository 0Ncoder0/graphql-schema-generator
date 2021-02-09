// ["OBJECT","SCALAR","NON_NULL","ENUM","LIST","INPUT_OBJECT","UNION"]

const { keys } = require("lodash");
const config = require("../../gspconfig.json");

/** 提取类型定义 */
const gType = (type, prop = null) => {
  const { name, kind, ofType } = type;
  prop =
    prop ||
    new Map([
      ["OBJECT", false],
      ["SCALAR", false],
      ["NON_NULL", false],
      ["ENUM", false],
      ["LIST", false],
      ["INPUT_OBJECT", false],
      ["UNION", false]
    ]);
  prop.set(kind, true);
  if (name) {
    return { name, prop };
  } else {
    return gType(ofType, prop);
  }
};
/** 返回 eslint-disable */
const getEslintDisable = () => {
  return `
  /* eslint-disable @typescript-eslint/camelcase */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  `;
};
/** 是否跳过此字段 */
const skipField = (field, obj) => {
  const { name: typeName } = gType(field.type);
  return !!(config.skipFields || []).find(skip => {
    if ((skip.ignore || []).includes(field.name)) {
      return false;
    } else if (typeof skip === "string") {
      return skip === field.name;
    } else {
      Object.keys(skip).every(key => {
        switch (key) {
          case "type":
            return skip.type === typeName;
          case "name":
            return skip.name === field.name;
          case "super":
            return obj.name === field.super;
        }
      });
      return skip.type === typeName;
    }
  });
};

module.exports.gType = gType;
module.exports.skipField = skipField;
module.exports.getEslintDisable = getEslintDisable;
