const fibonacci = function (num) {
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  }
  const fib = [];
  for (let i = 0; i < num; i++) {
    if (fib.length == 0 || fib.length == 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
