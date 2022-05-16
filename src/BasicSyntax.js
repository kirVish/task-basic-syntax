export function romanToInteger(str) {
    const alph = [
        ['M', 'MM', 'MMM'],
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ];
    let result = 0;
    let disch = 1000;
    for (let i = 0; i < 4; i++) {
        let j = alph[i].length - 1;
        while (j >= 0) {
            if (str.indexOf(alph[i][j]) == 0) {
                result += disch * (j + 1);
                str = str.replace(alph[i][j], '');
                j = 0;
            }
            j--;
        }
        disch /= 10;
    }
    return result;
}
