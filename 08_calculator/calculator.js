const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(num1, num2) {
    return num1 * num2
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num1) {
	let factorizado = 1
    for(let i = 1; i <= num1; i++){
    factorizado *= i;
  }
    return factorizado
};


console.log(power(2, 3))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
