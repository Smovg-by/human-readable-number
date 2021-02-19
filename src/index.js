module.exports = toReadable(number) {

    let n100 = Math.floor(number / 100);

    let n10 = Math.floor((number - n100 * 100) / 10);

    let n1 = Math.floor(number - n100 * 100 - n10 * 10);

    let array100 = {

    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'fourty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',

}

    let numberArray = [];

            // implementing HUNDREDS recognize algorythm

    if (n100 == 0) {numberArray.push('empty')}

    if (n100 >= 1 && n100 < 10) {numberArray.push(array100[n100]+' hundred')}

                // implementing DECIMALS recognize algorythm



    if (n10 >= 2 && n1 == 0) {numberArray.push(array100[n10*10])}
    if ((n10*10+n1) >= 10 && (n10*10+n1) <= 15  ) {numberArray.push(array100[n10*10+n1])}
    if (n10 = 1 && n1 > 5) {numberArray.push(array100[n1]+'teen')}

    return numberArray;

}
