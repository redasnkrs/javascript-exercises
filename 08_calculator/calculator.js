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

const multiply = function (arr) {
  let sum = 1;
  if (arr.length < 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  let forsum = 1;
  if (num1 === 0) {
    return 1;
  } else {
    for (let i = 1; i <= num1; i++) {
      forsum *= i;
    }
    return forsum;
  }
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
