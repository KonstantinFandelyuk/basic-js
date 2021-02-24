const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length <= 0 || matrix === undefined || matrix === null) return 0;
  let res = 0;
  for (let key of matrix) {
    key.forEach((item) => {
      if (item === "^^") {
        res++;
      } else {
        return 0;
      }
    });
  }
  return res;
};
