/*
Операторы '+', '*', '?' хороши,
однако, с их помощью нельзя указать конкретное число повторений. 
В этом случае вам на помощь придет оператор {}.

Работает он следующим образом: {5} - пять повторений, 
{2,5} – повторяется от двух до пяти (оба включительно), 
{2,} - повторяется два и более раз. 

Обратите внимание на то, что такого варианта - {,2} - нет.
*/

// Task 1
let str = 'xx xax xaax xaaax';
let res = str.replace(/xa{1,2}x/g, '!');
console.log(res) ; // xx ! ! xaaax

// Task 2
let str2 = 'xx xax xaax xaaax';
let res2 = str2.replace(/xa{2,}x/g, '!');
console.log(res2); // xx xax ! !

// Task 3
let str3 = 'xx xax xaax xaaax';
let res3 = str3.replace(/xa{3}x/g, '!');
console.log(res3); // xx xax xaax !

// Task 4
let str4 = 'aaa aaaaaaaaaa aaa';
let res4 = str4.replace(/a{10}/g, '!');
console.log(res4); // aaa ! aaa

// Task 5
// В данном примере автор кода хотел такой шаблон: 
// буква 'x', буква 'a' три раза раза и меньше, буква 'x', 
// но, к сожалению, такое - {,3} - не работает. 
// Нужно указать явно: {1,3} or {0,3}
let str5 = 'xx xax xaax xaaax';
let res5 = str5.replace(/xa{0,3}x/g, '!');
console.log(res5); // ! ! ! !

// Task 6
// Дана строка
// Напишите регулярку, которая найдет строки 
// 'abba', 'abbba', 'abbbba' и только их.
let str6 = 'aa aba abba abbba abbbba abbbbba';
let res6 = str6.replace(/ab{2,4}a/g, '!');
console.log(res6); // aa aba ! ! ! abbbbba

// Task 7
// Дана строка
// Напишите регулярку, которая найдет строки вида 
// 'aba', в которых 'b' встречается менее 3-х раз (включительно).
let str7 = 'aa aba abba abbba abbbba abbbbba';
let res7 = str7.replace(/ab{0,3}a/g, '!');
console.log(res7); // ! ! ! ! abbbba abbbbba

// Task 8
// Дана строка
// Напишите регулярку, которая найдет строки вида 
// 'aba', в которых 'b' встречается более 4-х раз (включительно).
let str8 = 'aa aba abba abbba abbbba abbbbba';
let res8 = str8.replace(/ab{4,}a/g, '!');
console.log(res8); // aa aba abba abbba ! !