/* NUMBER to STRING */

let num1 = 123;
let num2 = 5;
let string = String(num1) + String(num2);
console.log(string); // 1235


//Определяем длину номера
//Для этого нам обязательно нужно перевести число в строку, и только после этого определить ее длину
let num3 = 12345;
console.log(num3.length); //undefined

let num4 = 12345;
let str = String(num4).length;
console.log(str); // 5

let num5 = 4534523231;
console.log(String(num5).length); // 10

let num6 = 1213;
let num7 = 34534;
let sum = String(num6).length + String(num7).length;
console.log(sum); // 9