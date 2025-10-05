const palindromes = function (str) {
  let newStr = str.toLowerCase();
  let arr = newStr.split("");
  let finalArr = [];
  arr.forEach((element) => {
    if (isLetter(element)) {
      finalArr.push(element);
    }
  });
  let first = 0;
  let last = finalArr.length - 1;
  while (first < last) {
    if (finalArr[first] != finalArr[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};
function isLetter(char) {
  return /[a-zA-z0-9]/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
