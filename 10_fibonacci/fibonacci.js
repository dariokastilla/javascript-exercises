const fibonacci = function(num){
    
    let arr = [1, 1]
    
    
    
    for(let i = 2; i < num; i++){
        let numAdd = arr[i-1] + arr[i-2];
        arr.splice(i, 0, numAdd);
        
    }
    
    return arr[num-1];
}


// Do not edit below this line
module.exports = fibonacci;
