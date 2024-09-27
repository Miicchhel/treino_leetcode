/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    const tamanho = s.length;
    let total = 0;
    for (let i = 0; i < tamanho; i++) {
        if (i + 1 < tamanho && dict[s[i]] < dict[s[i + 1]]) {
            total -= dict[s[i]];
        } else {
            total += dict[s[i]];
        }
    }
    return total
};

s = "VX"
console.log(romanToInt(s));