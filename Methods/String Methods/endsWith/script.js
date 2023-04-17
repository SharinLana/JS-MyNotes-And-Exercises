/*
Метод endsWith() позволяет определить, заканчивается ли строка символами 
указанными в скобках, возвращая, соответственно, true или false.

Второй параметр необязателен.
Позволяет искать внутри строки, обрезая её по диапазону; 
по умолчанию равен длине строки.

Метод чувствителен к регистру

str.endsWith(searchString, length)
*/

let str = 'To be or not to be';

console.log(str.endsWith('To be'));        // false (регистр)
console.log(str.endsWith('to be'));        // true
console.log(str.endsWith('not to be'));     // true
console.log(str.endsWith('to be', 9));  // false
console.log(str.endsWith('to be', 13));  // false (на 13 индексе строка не заканчивается 'to be')
console.log(str.endsWith(' ', 13)); // true (на 13 символе стоит пробел)
console.log(str.endsWith('to be', 18)); //true