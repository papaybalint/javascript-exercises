const convertToCelsius = function(fahrenheit) {
  const fahren =  (fahrenheit -32 ) / 1.8
  return Math.round(fahren * 10) /10
};

const convertToFahrenheit = function(celsius) {
  const celsiuss =  (celsius * 1.8) + 32
  return Math.round(celsiuss * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
