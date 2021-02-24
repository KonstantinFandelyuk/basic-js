const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const newArr = arr.slice();
  if (Array.isArray(arr)) {
  } else {
    throw new Error("THROWN");
  }
  return newArr;
};
