const leapYears = function (isLeap) {
  isLeap = false;
  if (isLeap % 4 === 0) {
    return true;
  } else if (isLeap % 4 === 0 && isLeap % 100 != 0) {
    return true;
  }
};

// Do not edit below this line
module.exports = leapYears;
