/*
Метод startsWith() помогает определить, 
начинается ли строка с символов указанных в скобках, 
возвращая, соответственно, true или false.

Позиция в строке, с которой начинать поиск  searchString; по умолчанию 0.

Второй параметр необязателен

Метод чувствителен к регистру

str.startsWith(searchString, position)
*/

let str = 'To be or not to be';

console.log(str.startsWith('To be'));        // true
console.log(str.startsWith('to be'));        // false
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('to be', 9));  // false
console.log(str.startsWith('to be', 13));  // true