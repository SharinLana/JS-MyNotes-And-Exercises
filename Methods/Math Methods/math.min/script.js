/*
Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.
Если параметрами ничего не передано, то будет возращено Infinity.
По умолчанию метод не работает с массивами, 
однако с помощью хитрого приема можно найти минимальное значение массива: 
Math.min.apply(null, arr), где arr - произвольный массив.

Math.min(число, число, число...);
*/

console.log(Math.min(40, 20, 42, 100, 67)); // 20
console.log(Math.min(-1, -100, -30, -25, 40)); // -100
console.log(Math.min()); // Infinity

//Задача: выведем минимальное значение массива:
let arr = [40, 20, 42, 100, 67];
let min = Math.min.apply(null, arr);

console.log(min); //20