const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr.length < 0) {
    return 0;
  }

  let mySum = 0;
  for (let i = 0; i < arr.length; i++) {
    mySum += arr[i];
  }
  return mySum;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
