const repeatString = function (word, times) {
  if (word < 0) {
    return "ERROR";
  }
  string = "";
  for (i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
