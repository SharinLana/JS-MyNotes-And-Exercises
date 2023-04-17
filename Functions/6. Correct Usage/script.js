
//Task: Сделайте функцию delElem, 
//которая параметрами будет принимать значение и массив 
//и удалять из массива все элементы с таким значением.
function delElem(value, arr) {
    let newArr = [];

    for (elem of arr) {
        if (elem === value) {
            continue; // по задумке равные элементы пропускаем и не складываем в новый массив; 
        }
        else {
            newArr.push(elem);
        }
    }
    return newArr;
}

console.log(delElem(2, [2, 2, 2, 2, 5]));



//Задача: запишем в новый массив только те элементы, 
//сумма первых двух цифр в которых равна сумме вторых двух цифр.
let arr = [1524, 1321, 4563, 7144, 2879];
let newArr = [];

for (let elem of arr) {
    if (checkDigitsPaisSum(elem)) { // если результат ф-ции === true
        newArr.push(elem)
    }
}

console.log(newArr)

function checkDigitsPaisSum(num) {
    let str = String(num);
    let sum1 = +str[0] + +str[1];
    let sum2 = +str[2] + +str[3];

    if (sum1 == sum2) {
        return true;
    }
    else {
        return false;
    }
}


//Задача: найдите все простые числа в интервале от 1 до 100.
let arr2 = [];

for (let i = 2; i < 100; i++) {
    if (isPrime(i)) {
        arr2.push(i);
    }
}
console.log(arr2);

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}


//Задача: найдите все года от 1 до 2030, сумма цифр которых равна 13.
let years = [];

for (let i = 1; i < 2030; i++) {
    if (getDigitSum(i) == 13) {
        years.push(i);
    }
}

console.log(years);

function getDigitSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (elem of digits) {
        sum += +elem;
    }

    return sum;
}


//Задача: Сделать так, чтобы цифры в каждом элементе массива были в обратном порядке.
let nums = [123, 456, 789];
let result = [];

for (let elem of nums) {
    result.push(reverseNums(elem));
}

console.log(result);

function reverseNums(num) {
    num = String(num).split('').reverse().join('');
    num = +num;
    return num;
}


//Задача: Необходимо проверить, равна ли сумма цифр первого числа 
//сумме цифр второго числа
let num1 = 234;
let num2 = 536;

function isEqual(n1, n2) {
    return getDigitSum(n1) == getDigitSum(n2);
}

function getDigitSum(num) {
    let sum = 0;
    let str = String(num).split('');

    for (let elem of str) {
        sum += +elem;
    }

    return sum
}

console.log(isEqual(num1, num2))


// Задача: перебрать массив с числами 
//и вывести в консоль нетривиальные делители этих чисел 
//(то есть исключая число 1 и само число). 
let numbers = [12, 24, 35, 14];

for (let num of numbers) {
	console.log(num + ': ' + getDivisors(num).join());
}

function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}
