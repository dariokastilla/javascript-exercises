const convertToFahrenheit = function(num) {
  let firstNum = (num * (9/5)) + 32;
  let roundedNum = firstNum.toFixed(1);
  return Number.roundedNum;

};



const convertToCelsius = function(num) {
  let firstNum = (num - 32) * (5/9);
  let roundedNum = firstNum.toFixed(1);
  return Number.roundedNum;


};

console.log(convertToFahrenheit(55))
console.log(convertToCelsius(131))


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
