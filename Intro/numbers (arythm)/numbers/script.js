/* ARYTHMETIC OPERATIONS WITH NUMBERS */

//Summation
let a = 1 + 2;
alert(a); //3

//Deduction
let b = 3 - 1;
alert(b); //2

//Division
let c = 15/3;
alert(c); //5

//Multiplying
let d = 2 * 3;
alert(d); //6


// Обращение к отдельному символу числа
let num = 12345;
console.log(num[0]); // undefined

//Для решения этой проблемы переводим число в строку
let num2 = 12345;
let str = String(num2);
console.log(str[0]); // 1

let num3 = 12345;
let symbol = String(num3)[0];
console.log(symbol); // 1


//Суммирование отдельных цифр числа
let number = 12345;
let string = String(number);
let sum = Number(string[1]) + Number(string[2]);
console.log(sum); //5

//При остальных арифметических действиях (умножении, вычитании, делении)
//переводить получившуюся строку в Number не обязательно: 
let number2 = 12345;
let string2 = String(number2);
let sum2 = string2[1] * string2[2];
console.log(sum2); //6


//Задача: Дано число 12345. Найдите сумму цифр этого числа.
let number3 = 12345;
let string3 = String(number3);
let sum3 = Number(string3[0]) + Number(string3[1]) + Number(string3[2]) + Number(string3[3]) + Number(string3[string3.length - 1]);
console.log(sum3); // 15


//Задача: Дано число 12345. Найдите произведение цифр этого числа.
let number4 = 12345;
let string4 = String(number4);
let product = string4[0] * string4[1] * string4[2] * string4[3] * string4[string4.length - 1];
console.log(product); // 120


//Задача: Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let number5 = 12345;
let string5 = String(number5);
let viceVersa = string5[4] + string5[3] + string5[2] + string5[1] + string5[0];
console.log(viceVersa); //54321