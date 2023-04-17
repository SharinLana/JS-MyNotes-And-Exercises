/* Priority of the Arythmetic Operations in JS */

//Сначала выполняется умножение и деление, а потом уже сложение и вычитание

let a = 2 * 2 + 3;
alert(a); // выведет 7 (результат 4 + 3)


let b = 5 + 5 * 3;
console.log(b);

let c = 5 + 5 * 3 + 3;
console.log(c); // 23

let d = 8 / 2 + 2;
console.log(d); // 6

let e = 8 + 2 / 2;
console.log(e); // 9


/* Equal Priority */
//Умножение и деление имеют равный приоритет и выполняются по очереди слева направо

let f = 8 / 2 * 4;
console.log(f); // 16 

let g = 16 / 2 / 2 / 2;
console.log(g); // 2

let h = 8 / 2 * 2;
console.log(h); // 8

let i = 8 * 4 / 2 / 2;
console.log(i); // 8

/* Brackets and Arythmetic Operations */
//Приоритет - за операциями в скобках.
//Скобок может быть любое количество, в т.ч. вложенных друг в друга

let j = 2 * (2 + 4 * (3 + 1));
console.log(j); // 36

//В скобки можно заключить операции, обладающие приоритетом - это не будет ошибкой.
let k = 4 * (8 / 2);
console.log(k); // 16



