/* Access to a String Symbol[ ] */

let str = 'abcde';
console.log(str[0]); //  'a'
console.log(str[1]); //  'b'
console.log(str[2]); //  'c'


//Номер символа также может хранится и в переменной:
let string = 'abcde';
let num = 3; // номер символа в переменной
console.log(string[num]); // d


let str1 = 'abcde';
console.log(str1[0]); //a
console.log(str1[2]); //c
console.log(str1[str1.length - 1]); //e

let str2 = 'abcde';
console.log(str2[str2.length - 1] + str2[3] + str2[2] + str2[1] + str2[0]); // edcba

let str4 = 'abcde';
let num2 = 4;
console.log(str4[num2]); // e


//Символы строк можно читать, но нельзя изменять!!!
let str5 = 'abcde';
str5[0] = '!';
console.log(str5); //в строгом режиме выдаст ошибку, в нестрогом - просто оставит строку без изменений