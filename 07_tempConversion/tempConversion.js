const convertToCelsius = function (tempF) {
  convertC = ((tempF - 32) * 5) / 9;
  return convertC;
};

const convertToFahrenheit = function (tempC) {
  convertF = (9 / 5) * tempC + 32;
  return convertF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
