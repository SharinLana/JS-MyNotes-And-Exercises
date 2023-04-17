//Задача: найдите сумму цифр числа 12345
let number = 12345;

function transformToString(num) {
    num = String(num).split('');
    return num;
}

function getDigitSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += +elem;
    }

    return sum;
}

let result = getDigitSum(transformToString(number)); 
console.log(result); // 15



//Задача: Дано число. Нужно найти его делители (без 1 и самого числа), 
//а затем найти среднее арифметическое (сумма делить на количество) делителей числа 
//и вывести результат на экран

let num = 60;

function getDivisors(n) {
    let array = [];

    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            array.push(i);
        }
    }

    return array;
}

console.log(getDivisors(num));

function getAverage(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum / arr.length;
}

let res = getAverage(getDivisors(num));
console.log(res); // 10.7



//Task 1. запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.
let arr2 = [12, 19, 28, 13, 14, 345];
let result2 = [];

function toStr(num) {                 
    let str = String(num);
    return str.split('');
}

function getDigitSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += + elem;
    }

    return sum;
}

function selected(num) {
    let res = getDigitSum(toStr(num));

    return res >= 1 && res <= 9;
}

for (let elem of arr2) {
    if (selected(elem)) {
        result2.push(elem);
    }
}

console.log(result2)

