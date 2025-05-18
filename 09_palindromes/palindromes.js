const palindromes = function(frasecita){

    let minusc = frasecita.toLowerCase();
    
    let splitted = minusc.split('');
    
    let filtered = splitted.filter(function(letter) {
        if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
            return true;
        }
    });
    
    let joined = filtered.join('');
    
    let reversed = filtered.slice().reverse().join(''); //el slice sirve para hacer una copia para                                                  no modificarse 2 veces                                                                   //el reverse y join es para convertir la                                                  string momentaneamente en array y asi                                                     poder darle la vuelta
    
        if(joined === reversed){
            return true;            //Es palindromo
        }
        else{
            return false;           //No es palindromo
        }
    }

// Do not edit below this line
module.exports = palindromes;
