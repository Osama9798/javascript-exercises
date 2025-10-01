const repeatString = function (string, y) {
  let newStr = string;
  if (y < 0) {
    return "ERROR";
  } else if (y == 0) {
    return "";
  }
  for (let i = 0; i < y - 1; i++) {
    newStr += string;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
