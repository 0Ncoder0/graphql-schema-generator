// ["OBJECT","SCALAR","NON_NULL","ENUM","LIST","INPUT_OBJECT","UNION"]

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

module.exports.gType = gType;
