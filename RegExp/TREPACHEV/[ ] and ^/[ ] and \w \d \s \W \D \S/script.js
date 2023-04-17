/*
Группы символов \d, \D, \w, \W, \s, \S внутри [ ] 
будут обозначать именно группы, 
то есть по-прежнему будут командами.
*/

// Task 1
// В данном примере шаблон поиска выглядит так: 
// между иксами - любая цифра, либо буква от 'a' до 'f':
let str = 'xax xbx x1x x2x xhx x@x';
let res = str.replace(/x[\da-f]x/g, '!');
console.log(res); //! ! ! ! xhx x@x


// Task 2
// В данном примере шаблон поиска выглядит так: 
// буква 'x', затем - 
//  не цифра, не точка, и не маленькая латинская буква, 
// затем буква 'z':
let str2 = 'xaz x1z xAz x.z x@z';
let res2 = str2.replace(/x[^\d.a-z]z/g, '!');
console.log(res2); //


// Task 3
// Напишите регулярку, которая найдет строки по шаблону: 
// цифра или точка от 1 и более раз.
let str3 = 'abdf 1dfs 345fd 3.4 fgdf.edr'
let res3 = str3.replace(/[\d.]+/g, '!');
console.log(res3); // abdf !dfs !fd ! fgdf!edr


// Task 4
// Напишите регулярку, которая найдет строки по шаблону: 
// не цифра и не буква от 'a' до 'g' от 3 до 7 раз.
let str4 = 'hjk tyut6 345ad 3.4 fgdf'
let res4 = str4.replace(/[^\da-g]{3,7}?/g, '!');
console.log(res4); // !!ut6 345ad 3.4 fgdf