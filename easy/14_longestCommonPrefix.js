/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLength = Math.min(...strs.map(string => string.length));
    let prefixo = "";

    for (let i = 0; i < minLength; i++) {        
        const letra = strs[0][i];

        if (strs.every(string => string[i] === letra)) {
            prefixo += letra;
        }
    }
    return prefixo;

};


strs = ["flower","flow","flight"]
// strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));