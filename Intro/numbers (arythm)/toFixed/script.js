/* toFixed() */

//toFixed выполняет округление до заданного знака в дробной части.
//Примечание: toFixed выдает результат в виде строки

let a = 0.1 + 0.2;
console.log(a.toFixed(2)); // выведет '0.30'

//Чтобы преобразовать результат toFixed в число, используем Number() или +:
let b = 0.1 + 0.2;
console.log(+b.toFixed(2)); // выведет 0.3
console.log(Number(b).toFixed(2)); // выведет 0.30

