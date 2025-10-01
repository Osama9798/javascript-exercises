const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let min = 0;
  let max = 0;
  let sum = 0;
  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }
  while (min < max) {
    sum += min;
    min++;
  }
  return sum + max;
};

// Do not edit below this line
module.exports = sumAll;
