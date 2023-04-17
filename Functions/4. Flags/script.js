/*
Если в массиве найдется нужный элемент - мы выйдем из функции (и из цикла тоже) 
с помощью return. 
Но если в массиве не найдется нужный элемент - выхода из функции не произойдет 
и выполнение дойдет до команды return true.
*/


//Как делали раньше
function isPrime(num) {
    let flag = true; //использовали флаг

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            flag = false; //и меняли его значение при попадании на нужный элемент
            break; //затем прерывали цикл
        }
    }

    return flag;
}

console.log(isPrime(16)); // false
console.log(isPrime(31)); // true


//Как лучше делать
function isPrimeOrNot(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false; //роль флага взял на себя return. 
            //Нашел в цикле число, на которое исходное число делится без остатка,
            //вернул flase и автоматически прервал цикл
        }
    }

    return true;  //не нашел - вернул значение true
    //То есть, сама функция - это один большой флаг.
}

console.log(isPrimeOrNot(31)); // true
console.log(isPrimeOrNot(8)); // false


//Задача: Сделайте функцию, которая параметром будет принимать массив с числами, 
//и проверять, что все элементы в этом массиве являются четными числами.
let array = [2, 4, 6, 10];

function isEven(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isEven(array)); // true


//Задача: Сделайте функцию, которая параметром будет принимать число 
//и проверять, что все цифры это числа являются нечетными.
let number = 1347;

function isOdd(num) {
    let str = String(num);

    for (let elem of str) {
        if (elem % 2 == 0) {
            return false;
        }
    }
    return true;
}

console.log(isOdd(number)); // false



//Задача: Сделайте функцию, которая параметром будет принимать массив и проверять, 
//how many identical elements in the array
let arr = [1, 4, 2, 3, 4];
let count = {};

function isIdentical(array) {

    for (let elem of array) {
        if (count[elem] === undefined) {
            count[elem] = 1;
        }
        else {
            count[elem]++;
        }
    }
    return count;
    
}

function check() {
    for (let key in count) {
        if (count[key] > 1) {
            return `Number ` + key + ` repeats ` + count[key] + ` times`;
        }
    }
    return `No identical numbers in the array`;
}

console.log(check(isIdentical(arr)));


//Task: Сделайте функцию, которая параметром будет принимать массив 
//и проверять, есть ли в этом массиве два одинаковых элемента подряд.

let arrayA = [1, 3, 5];

function isRepeatable(arr) {
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            flag = true;
        }
    }
    
    return flag
}

console.log(isRepeatable(arrayA))



