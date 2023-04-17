/* Access To The Last String Symbol [] */

let str = 'abcde';
let last = str.length - 1; // индекс последнего символа
console.log(last); // 4

let str2 = 'abcde';
let last2 = str2.length - 1; // индекс последнего символа
console.log(str2[last2]); //  'e'

let str3 = 'abcde';
console.log(str3[str3.length - 1]); //  'e'


//Задача: Дана строка. Выведите на экран ее предпоследний символ.
let string = 'abcdef';
let symbol = string.length - 2;
console.log(string[symbol]); // e


//Задача: Дана строка. Выведите на экран символ, третий с конца.
let str4 = 'abcdef';
let symbol2 = str4.length - 3;
console.log(str4[symbol2]); // d