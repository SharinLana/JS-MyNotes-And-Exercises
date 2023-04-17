/*
return 
не выводит результат работы функции сразу на экран, 
а записывает его в переменную.

После того, как выполнится инструкция return - 
функция закончит свою работу и никакой код дальше не выполнится.
*/

function func(num) {
    return num ** 2;
}
let result = func(3); // здесь будет храниться результат работы функции
console.log(result);

//После этого можно как-то обработать эти данные и лишь затем вывести их на экран
function power(num) {
    return num ** 3;
}
let res = power(3);
let res2 = res + 2;
console.log(res2);

//Но можно не записывать результат в переменную, а сразу вывести его на экран:
function sum(num) {
    return num + num;
}
document.write(sum(2));


//Задача: Сделайте функцию, которая параметром принимает число, 
//а возвращает куб этого числа. 
//С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
function square(num) {
    return num ** 3;
}
let resultA = square(3);
console.log(resultA);


//Задача: Сделайте функцию, которая параметром принимает число, 
//а возвращает квадратный корень из этого числа. 
//С помощью этой функции найдите корень числа 3, 
//затем найдите корень числа 4. 
//Просуммируйте полученные результаты и выведите их на экран.
function f(num) {
    return Math.sqrt(num);
}
let sumRes = f(3) + f(4);
console.log(sumRes); // 3.732050807568877



/*
Можно также результат работы одной функции передать параметром в другую, 
например, вот так мы сначала найдем квадрат числа 2, а затем квадрат результата:
 */
function p(num) {
    return p ** 2;
}
let reS = func(func(2));
console.log(reS); // 16


//
function square(num) {
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}

let resulT = cube(square(2));
console.log(resulT); // 64


//Задача: Пусть у вас есть функция, возвращающая квадратный корень из числа, 
//и функция, округляющая дробь до трех знаков в дробной части.
//С помощью этих функций найдите квадратный корень из числа 2 
//и округлите его до трех знаков в дробной части.
function sq(num) {
    return Math.sqrt(num);
}
function round(num) {
    return num.toFixed(3);
}
let final = round(sq(2));
console.log(final); // 1.414


//Задача: Пусть у вас есть функция, возвращающая квадратный корень из числа, 
//и функция, возвращающая сумму трех чисел.
//С помощью этих функций найдите сумму корней чисел 2, 3 и 4 
//и запишите ее в переменную, округлив до 3-х знаков в дробной части (также с помощью функции).
function sqroot(num) {
    return Math.sqrt(num);
}
function summation(num1, num2, num3) {
    return num1 + num2 + num3;
}
function rounD(num) {
    return num.toFixed(3);
}

let res1 = rounD(summation(sqroot(2), sqroot(3), sqroot(4)));
console.log(res1); // 5.146


//ТОНКОЕ МЕСТО RETURN

//После того, как функция return закончит свою работу, 
//никакой код дальше не выполнится:
function func(num) {
	return num * num;
	
	alert('!'); // этот код никогда не выполнится
}

let result3 = func(3);

//Это не значит, что в функции должен быть один return. 
//Просто выполнится только один из них. 
//В следующем примере в зависимости от значения параметра 
//выполнится либо первый, либо второй return:
function condition(num) {
    if (num >= 0) {
        return `+`;
    }
    else {
        return `-`;
    }
}
let res3 = condition(-3);
console.log(res3); // -


//
function func(num) {
	return num;
	
	let result = num * num;
	return result;
}

alert( func(3) ); //выведет 3, т.к. выполнится только первый return


//
function funct(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num * num;
	}
}

console.log( funct(10) ); // 100
console.log( funct(-5) ); // 5


//
function functi(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num * num;
}

console.log( functi(10) );
console.log( functi(-5) );



//ЦИКЛ И RETURN

//Если расположить return внутри цикла for или while,
//то вернется результат, полученный только при ОДНОЙ ПРОКРУТКЕ/ИТЕРАЦИИ цикла
function loop() {
    let sum = 0;

    for (let i = 1; i <= 5; i++) {
        sum += i;
        return sum;
    }
}

let resultLoop = loop();
console.log(resultLoop); // 1 (вернется результат лишь одной итерации цикла)

//Чтобы вернуть результат суммы ВСЕХ итераций, нужно return вынести за пределы цикла
function iter() {
    let sum = 0;

    for (i = 1; i <= 5; i++) {
        sum += i;
    }

    return sum;
}
let resIter = iter();
console.log(resIter); // 15


//
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

alert( func(5) ); // 1 (return видит лишь то, что внутри первой итерации цикла)



//То, что return расположен внутри цикла, 
//не всегда может быть ошибкой. 
//В следующем примере сделана функция, которая определяет, 
//сколько первых элементов массива нужно сложить, 
//чтобы сумма стала больше или равна 10:
function elems(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let resultElems = elems([1, 2, 3, 4, 5]);
alert(resultElems); // 4 (на этоv эелементе массива сумма = или > 10)


//Пример функции, которая вычисляет, сколько целых чисел, начиная с 1, 
//нужно сложить, чтобы результат был больше 100:
function numbers() {
    let sum = 0;
    let i = 1;

    while (true) { //бесконечный цикл
        sum += i;
        if (sum >= 100) {
            return i;
        }

        i++; // ставим здесь, чтобы система сначала проверила результат сложения, а потом прибавляла числа
    }
}
let resultNumbers = numbers();
console.log(resultNumbers); // 14



//Напишите функцию, которая параметром будет принимать число 
//и делить его на 2 столько раз, 
//пока результат не станет меньше 10. 
//Пусть функция возвращает количество итераций, 
//которое потребовалось для достижения результата.
function divider(num) {
	let i = 1; // ввели переменную для подсчета итераций

	while (num >= 10) { //пока число > 10
		num /= 2; //дели его на 2

		if (num < 10) { //если оно стало меньше 10
			return i; //верни количество итераций, затраченных на подсчет
		}
		i++; // если число пока не меньше 10, то иди на новый круг итерации
	}
	
	if (num < 10) { // если аргумент меньше 10
		alert(`please enter an argumet higher than 10`); // то выведи эт
	}
}
let resDivider = divider(19);
console.log(resDivider)


//Task: Сделайте функцию reverseStr, 
//которая параметром будет принимать строку 
//и переворачивать ее символы в обратном порядке. 
//Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(string) {
    return string.split('').reverse().join('');
}


console.log(reverseStr('abcde'))