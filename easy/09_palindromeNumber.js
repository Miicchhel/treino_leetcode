/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const numero = x.toString();
    const tamanho = numero.length;
    let inicio = 0;
    let fim = tamanho - 1;

    while (inicio < fim) {
        if (numero[inicio] != numero[fim]) return false;
        inicio++;
        fim--;
    };

    return true;
};

// var isPalindrome = function(x) {
//    if(x < 0 || (x % 10 === 0 && x !== 0)) return false
//     let reverso = 0;

//     while(x > reverso){
//         reverso= reverso * 10 + x % 10;
//         x = parseInt(x / 10);
//     }

//     return x == reverso || x == parseInt(reverso / 10); // caso par || caso impar
// };


console.log(isPalindrome(101101));