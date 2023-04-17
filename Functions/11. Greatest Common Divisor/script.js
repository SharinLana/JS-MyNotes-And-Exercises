/*
Пусть у нас есть два числа, например, 12 и 18. 
Давайте найдем наибольший общий делитель (НОД) этих чисел.
Делители числа 12 равны 1, 2, 3, 4, 6 и 12 
(including "тривиальные" делители: единицу и само число). 
Делители числа 18 равны 1, 2, 3, 6 и 18.

Очевидно, что у наших чисел следующие общие делители: 1, 2, 3 и 6 
(фактически здесь мы видим пересечение массивов делителей). 

Самый большой из общих делителей - число 6.
Это и есть НОД наших чисел.
*/


//Task: Реализуйте функцию getGreatestCommonDivisor, 
//которая параметрами будет принимать два числа и возвращать НОД этих двух чисел. 
//При решении задачи старайтесь использовать вспомогательные функции, 
//в том числе полученные нами ранее в теоретической части.

function getGreatestCommonDivisor(num1, num2) {
    let commonDivisors = getInt(getDivisors(num1), getDivisors(num2));

    return Math.max.apply(null, commonDivisors);
}

function getDivisors(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getInt(arr1, arr2) {
    let intersection = [];

    for (let elem of arr1) {
        if (isInArray(elem, arr2)) {
            intersection.push(elem);
        }
    }

    return intersection;
}

function isInArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

console.log(getGreatestCommonDivisor(12, 18))


//Task: Положительные целые числа, не имеющие общих делителей, 
//кроме тривиальной единицы, называются взаимно простыми (relatively prime numbers). 
//Говоря другими словами, два числа можно назвать взаимно простыми, 
//если их НОД равен единице.

//Напишите функцию, которая параметрами будет принимать два числа 
//и проверять - взаимно простые они или нет.

function areRelativelyPrime(num1, num2) {
    let commonDivisors = getInt(getDivisors(num1), getDivisors(num2));
    let theGreatestCommonDivisor = Math.max.apply(null, commonDivisors);

    if (theGreatestCommonDivisor == 1) {
        return true
    }

    else {
        return false
    }
}

function getDivisors(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getInt(arr1, arr2) {
    let int = [];

    for (let elem of arr1) {
        if (isInArr(elem, arr2)) {
            int.push(elem);
        }
    }

    return int;
}

function isInArr(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

console.log(areRelativelyPrime(17, 18))