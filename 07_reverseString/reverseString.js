const reverseString = function (string) {
  const strArr = string.split("");
  let newStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
