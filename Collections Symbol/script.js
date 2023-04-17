// Task 1
// Пусть дан объект. 
// Создайте символ и добавьте в объект еще один элемент, 
// ключом которого будет созданный символ, 
// а значением - какая-нибудь строка. 
// Переберите объект через цикл for-in,
// убедитесь в том, что новый элемент не появляется при переборе.

let obj = {
    a: 'Sunday',
    b: "Monday",
    c: 'Tuesday'
};
let sym = Symbol('optional description');
obj[sym] = 'Birthday';
console.log(obj); // {a: 'Sunday', b: 'Monday', c: 'Tuesday', Symbol(day): 'Birthday'}

for (let key in obj) {
    console.log(obj[key]); //Sunday //Monday //Tuesday
}


// Task 2
// Пусть дан объект. Добавьте в него еще один элемент, 
// значением которого будет функция, выводящая на экран '!', 
// а ключом - созданный вами символ.

let obj2 = {
    a: 'Sunday',
    b: "Monday",
    c: 'Tuesday'
};

let sym2 = Symbol();
obj2[sym2] = function() { console.log("!") };
console.log(obj2); // {a: 'Sunday', b: 'Monday', c: 'Tuesday', Symbol(): ƒ}
console.log(obj2[sym2]); // ƒ () { console.log("!") }


// Task 3
// Пусть дан объект, ключами которого являются какие-то строки, а значением - числа. 
// Добавьте в наш объект функцию, которая будучи вызванной 
// будет возвращать сумму элементов нашего объекта

let obj3 = {
	a: 1,
	b: 2,
	c: 3,
};

let func = Symbol(); //created a Symbol

obj3[func] = function() {  //now func is a key of the obj3 and its function is a value
    let sum = 0;
    for (let key in this) {
        sum += this[key];
    }
    return sum;
}
console.log(obj3[func]()); // 6


/*  Символы и массивы  */

// Task 4
// Пусть дан массив с числами. 
// Добавьте в этот массив функцию, 
// которая будет возвращать сумму элементов этого массива. 
// Сделайте так, чтобы наша функция имела символьный ключ.

let arr = [1, 5, 3];
let func2 = Symbol(); // created a symbol
arr[func2] = function() {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

console.log(arr[func2]()); // 9



/* Symbol.for */

// Task 5
// Переделайте предыдущую задачу так, 
// чтобы ключ-символ для функции задавался через Symbol.for.

let array = [3, 4, 5, 6];
let func3 = Symbol.for('sum of the elems');
array[func3] = function() {
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum;
}
console.log(array[func3]()); // 18
console.log(Symbol.keyFor(func3)); // sum of the elems


// Task 6
// Пусть у нас есть скрипт. 
// В этом скрипте есть функция, которая возвращает массив, 
// заполненный случайными числами от 1 до 10. 
// В этом скрипте также есть функция, 
// которая параметром принимает два массива с числами 
// и возвращает массив элементов, которые есть в обоих массивах.

// Сделайте так, чтобы массивы, 
// возвращаемые любой из функций нашего скрипта, 
// содержали функцию, возвращающую сумму чисел этого массива. 
// Ключ этой функции должен быть одинаковым для всех массивов, 
// то есть созданным через Symbol.for.
let getElemsSum = Symbol.for('get sum of elems');

function getRandomNums() {
    let randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let arr = [];
    arr[getElemsSum] = function() {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    }

    for (let i = 1; i <= 10; i++) {
        arr.push(randomNum(1, 10));
    }
    return arr;
}

let result1 = getRandomNums();
console.log(result1[getElemsSum]()); // 41

function getInt(arr1, arr2) {
    let arr = [];
    arr[getElemsSum] = function() {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    };

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] == arr1[i]) {
                arr.push(arr1[i]);
            }
        }
    }
    return arr;
}
let result2 = getInt([1, 2, 3, 6, 7, 8, 9], [3, 2, 5, 8, 9, 0]);
console.log(result2[getElemsSum]()); //22