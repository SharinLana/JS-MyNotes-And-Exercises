/*
Квантификаторы +, *, ? и {n}

Бывают ситуации, когда мы хотим указать, 
что символ повторяется заданное количество раз. 
Если мы знаем точное число повторений, 
то можно просто написать его несколько раз - /aaaa/. 
Но что делать, если мы хотим сказать такое: 'повторить один или более раз'?

Для этого существуют операторы (квантификаторы) повторения: 
плюс + (один и более раз), 
звездочка * (ноль или более раз) 
и вопрос ? (ноль или один раз). 

Эти операторы действуют на тот символ, который стоит перед ними.
*/

// Task 1
// Найдем все подстроки по шаблону: 
// буква 'x', буква 'a' один или более раз, буква 'x':
let string = 'xx xax xaax xaaax xbx';
let res = string.replace(/xa+x/g, '!'); 
console.log(res); // xx ! ! ! xbx


// Task 2
// Найдем все подстроки по шаблону:
//  буква 'x', буква 'a' ноль или более раз, буква 'x':
let string2 = 'xx xax xaax xaaax xbx';
let res2 = string2.replace(/xa*x/g, '!'); 
console.log(res2); // ! ! ! ! xbx


// Task 3
// Найдем все подстроки по шаблону:
//  буква 'x', буква 'a' ноль или один раз, буква 'x':
let string3 = 'xx xax xaax xbx';
let res3 = string3.replace(/xa?x/g, '!'); 
console.log(res3); // ! ! xaax xbx


// Task 4
// Дана строка.
// Напишите регулярку, которая найдет строки 
// 'aba', 'abba', 'abbba' по шаблону: 
// буква 'a', буква 'b' любое количество раз, буква 'a'.
let string4 = 'aa aba abba abbba abca abea';
let res4 = string4.replace(/ab+a/g, '!');
console.log(res4); // aa ! ! ! abca abea


// Task 5
// Дана строка.
// Напишите регулярку, которая найдет строки 
// 'aa', 'aba', 'abba', 'abbba' по шаблону: 
// буква 'a', буква 'b' любое количество раз 
// (в том числе ни одного раза), буква 'a'.
let string5 = 'aa aba abba abbba abca abea';
let res5 = string5.replace(/ab*a/g, '!'); 
console.log(res5); // ! ! ! ! abca abea


// Task 6
// Дана строка.
// Напишите регулярку, которая найдет строки 
// 'aa', 'aba' по шаблону: 
// буква 'a', буква 'b' один раз или ни одного, буква 'a'.
let string6 = 'aa aba abba abbba abca abea';
let res6 = string6.replace(/ab?a/g, '!');
console.log(res6); // ! ! abba abbba abca abea


// Task 7
// Дана строка.
// Напишите регулярку, которая найдет строки 
// 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
let string7 = 'aa aba abba abbba abca abea';
let res7 = string7.replace(/ab*a/g, '!');
console.log(res7); // ! ! ! ! abca abea
