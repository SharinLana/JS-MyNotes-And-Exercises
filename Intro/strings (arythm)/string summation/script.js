/* String Summation */

let str = 'abc' + 'def'; 
console.log(str); //  'abcdef'

//Строки также могут хранится в переменных:
let str1 = 'abc';
let str2 = 'def';
console.log(str1 + '!!!' + str2); //  'abc!!!def'

let string = 'Java';
let string2 = 'Script';
let result = string + string2;
console.log(result); 


//Пробел при сложении срок:
let str3 = 'abc';
let str4 = 'def';
console.log(str3 + ' ' + str4); //abc def

let str5 = 'abc';
console.log(str5 + ' def'); //abc def

let str6 = 'Hello';
let str7 = 'World!';
console.log(str6 + ' ' + str7);


//Суммирование цифр строки между собой
let str8 = '12345';
let sum = Number(str8[0]) + Number(str8[1]) + Number(str8[2]) + Number(str8[3]) + Number(str8[str8.length - 1]);
console.log(sum); // 15