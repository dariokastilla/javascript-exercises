const removeFromArray = function(oldArray, ...args) {
    let newArray = []
    for(const elemento of oldArray){
      if (!args.includes(elemento)){
        newArray.push(elemento);
      }
   
      }
    
    return newArray;
};

console.log(removeFromArray([1,2,3,4,5],3,9))



// Do not edit below this line
module.exports = removeFromArray;
