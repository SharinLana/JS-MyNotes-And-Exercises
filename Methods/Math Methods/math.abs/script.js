/*
Метод Math.abs возвращает модуль числа, 
то есть из отрицательного числа делает положительное.

Math.abs(число)
*/

console.log(Math.abs(-3)); // 3

console.log(Math.abs(3)); // 3



//Задача: Даны переменные a и b. 
//Найдите модуль разности a и b. 
//Проверьте работу скрипта самостоятельно для различных a и b.
let a = -100;
let b = -3;
let diff = Math.abs(a) - Math.abs(b);

console.log(diff)