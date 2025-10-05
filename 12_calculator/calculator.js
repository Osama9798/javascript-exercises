const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let ans = arr.reduce((start, current) => {
    return start + current;
  }, 0);
  return ans;
};

const multiply = function (arr) {
  let ans = arr.reduce((start, current) => {
    return start * current;
  }, 1);
  return ans;
};

const power = function (base, exponent) {
  let ans = 1;
  for (let i = 0; i < exponent; i++) {
    ans *= base;
  }
  return ans;
};

const factorial = function (num) {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
