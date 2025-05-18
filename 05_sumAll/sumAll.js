const sumAll = function(num1, num2) {
    let totalSum = 0
  
    for(let i = num1; i <= num2; i++){
      totalSum += i;
    }
  
    return totalSum;
  };
  
  console.log(sumAll(1,6))
  
// Do not edit below this line
module.exports = sumAll;
