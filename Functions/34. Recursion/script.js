/*
рекурсия - это когда функция вызывает сама себя. 
*/
/*
let i = 1;
function func() {
    console.log(i);
            i++;
    
        while (i <= 10) {
            func();
        }
}
func();



//Task: С помощью рекурсии выведите элементы этого массива на экран.
function func2(arr) {
	console.log(arr.shift());
	
	if (arr.length != 0) {
		func2(arr);
	}
}

func2([1, 2, 3, 4, 5]);



//Давайте теперь не будем выводить элементы массива на экран, 
//а найдем сумму элементов этого массива:
function getSum(arr) {
    let sum = arr.shift();

    if (arr.length != 0) {
        sum += getSum(arr);
    }

    return sum;
}

console.log(getSum([1, 2, 3, 4])); //10



//Task: С помощью рекурсии найдите сумму квадратов элементов этого массива.
let array2 = [1, 2, 3, 4, 5];

function getSquareSum(arr) {
    let sum = arr.shift() ** 2;

    if (arr.length != 0) {
        sum += getSquareSum(arr);
    }

    return sum;
}

console.log(getSquareSum(array2)); // 55



/* Рекурсия и многомерные структуры */
/*
let array4 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
function func4(arr) {
	for (let elem of arr) {
		if (typeof elem === 'object') { //if the type of element is object (meaning: array)
            func4(elem);                // then let it go through the functon one more time to get primitives
        }
        else {
            console.log(elem); //if the element is a primitive, show it in the console
        }
	}
}

func4(array4);


//Task: С помощью рекурсии выведите все примитивные элементы этого объекта на экран.
let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function getPrimitives(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            getPrimitives(obj[key]);
        }
        else {
            console.log(obj[key]);
        }
    }
}

getPrimitives(object);
*/

//Task: Напишите код, который развернет многомерный массив в одномерный. 
let array5 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function getNums(arr) {
    let newArr = [];

    for (let elem of arr) {
        if (typeof elem === 'object') {
            newArr.push(...getNums(elem));
        }
        else {
            newArr.push(elem)
        }
    }
    return newArr;
}
console.log(getNums(array5));



/* Сумма элементов массива произвольного уровня вложенности */

function getElemsSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        if (typeof elem === 'object') {
            sum += getElemsSum(elem); // ELEM HERE!!!
        }
        else {
            sum += elem;
        }
    }

    return sum;
}

let array6 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
console.log(getElemsSum(array6)); // 43


//Task: С помощью рекурсии найдите сумму элементов этого объекта.

let object2 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function getObjectKeysSum(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += getObjectKeysSum(obj[key]);
        }
        else {
            sum += obj[key];
        }
    }

    return sum;
}

console.log(getObjectKeysSum(object2)); // 45


//Task: С помощью рекурсии слейте элементы этого массива в одну строку:

let array7 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function getString(arr) {
    let array = [];

    for (let elem of arr) {
        if (typeof elem === 'object') {
            array.push(...getString(elem));
        }
        else {
            array.push(elem);
        }
    }
    return array.join('');
}
console.log(getString(array7)); // abcdefgjk


//Task: Давайте что-нибудь сделаем с перебираемыми элементами массива, 
//к примеру, запишем им в конец знак '!'.
//В этом случае нам придется воспользоваться обычным циклом for, а не for-of, вот так:

let array8 = [1, [2, 7, 8], [3, 4, [5, 6]]];

function addExclamationPoint(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = addExclamationPoint(arr[i]);
        }
        else {
            arr[i] = arr[i] + '!';
        }
    }

    return arr;
}
console.log(addExclamationPoint(array8)); 



//Task: Возведите все элементы-числа этого массива в квадрат.
let array9 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function getSquare(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = getSquare(arr[i]);
        }
        else {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}
console.log(getSquare(array9));


// Same task, my way to solve:
let array10 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function getNumbers(arr) {
let newArr = [];

    for (let elem of arr) {
        if (typeof elem === 'object') {
            newArr.push(...getNumbers(elem));
        }
        else {
            newArr.push(elem)
        }
    }

    return newArr
}

function powerNumbers(arr) {
    let result = [];
    for (let elem of getNumbers(arr)) {
        elem = elem ** 2;
        result.push(elem)
    }
    return result
}

console.log(powerNumbers(array10)); //(9) [1, 4, 49, 64, 9, 16, 25, 36, 49]