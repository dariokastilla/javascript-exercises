const reverseString = function(word) {
    let resultado = word.split('');

    let revertido = resultado.reverse();

    let unido = revertido.join("");

    return unido;

};

reverseString("hola mundo")


// Do not edit below this line
module.exports = reverseString;
