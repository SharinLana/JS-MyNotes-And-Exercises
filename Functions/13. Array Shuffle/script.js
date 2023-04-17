/*
Реализуем функцию shuffle, параметром принимающую массив 
и перемешивающую его элементы в случайном порядке.

Давайте рассмотрим алгоритм решения данной задачи.

запустим цикл и в каждой итерации будем вырезать случайный элемент массива 
и записывать его в новый массив. 
Будем повторять пока элементы не закончатся. 

Полученный новый массив и будет содержать элементы старого массива 
в случайном порядке.

Для реализации описанного нам понадобится функция, 
возвращающая случайное целое число в заданном диапазоне:
*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Давайте попробуем с помощью приведенной выше функции вырезать элементы массива в случайном порядке. Пусть у нас есть массив:
//[1, 2, 3, 4, 5];

//Вырежем из него один случайный элемент, используя метод splice:
let arrC = [1, 2, 3, 4, 5];

let randomC = getRandomInt(0, arrC.length - 1);
let elemC = arrC.splice(randomC, 1);

console.log(elemC);

//Здесь, однако, нас ждет подвох: метод splice возвращает массив элементов и в нашем случае это будет массив, состоящий из одного нашего элемента. А мы хотели бы не массив, а сам элемент. Поправим проблему:
let arrA = [1, 2, 3, 4, 5];

let randomA = getRandomInt(0, arrA.length - 1);
let elems = arrA.splice(randomA, 1);
let elemA = elems[0];

console.log(elemA);
//Перепишем в более компактном виде:
let arrB = [1, 2, 3, 4, 5];

let randomB = getRandomInt(0, arrB.length - 1);
let elemB = arrB.splice(randomB, 1)[0];

console.log(elemB);
//Вспомним теперь то, как работает splice - он вырезает элемент из массива, при этом изменяя сам массив. В нашем случае это замечательно, так нам нужно вырезать элементы массива так, чтобы они не дублировались. В этом случае поведение splice - это то, что нам нужно: уже вырезанный элемент не будет вырезан снова.
//Кроме того, есть еще один положительный момент в работе splice. Суть в следующем: когда мы будем вырезать элемент второй раз, логично, что нам нужно генерировать случайное число в диапазоне до arr.length-2, а в третий раз - до arr.length-3 и так далее.
//Однако splice изменяет массив, а значит и длину массива. Это значит, что arr.length-1 после каждого вырезания будет становится на единицу меньше, как нам и надо!
//Давайте с учетом вышесказанного вырежем все элементы массива:
let arr = [1, 2, 3, 4, 5];
let random, elem;

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 5
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 4
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 3
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 2
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 1
elem = arr.splice(random, 1)[0];
console.log(elem);

//Преобразуем приведенный выше код в цикл:
let arrD = [1, 2, 3, 4, 5];

while (arrD.length > 0) {
	let randomD = getRandomInt(0, arrD.length - 1);
	let elemD = arrD.splice(randomD, 1)[0];
	console.log(elemD);
}

//Будем теперь вырезанные элементы записывать в новый массив:
let arrE = [1, 2, 3, 4, 5];
let resultE = [];

while (arrE.length > 0) {
	let randomE = getRandomInt(0, arrE.length - 1);
	let elemE = arrE.splice(randomE, 1)[0];
	resultE.push(elemE);
}

console.log(resultE);

//Соберем все вместе и получим решение нашей задачи:
function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(shuffle([1, 2, 3, 4, 5]));



//Task: Сделайте функцию range принимающую параметрами 2 целых числа - 
//начало и конец диапазона, 
//и возвращающую массив, заполненный целыми числами из этого диапазона.
let number1 = 10;
let number2 = 30;

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(num1, num2) {
    let arr = [];

    for (let i = num1; i <= num2; i++) {
        arr.push(getRandomNum(num1, num2));
    }

    return arr
}

console.log(range(10, 30))


//Task: Сделайте функцию randomRange, возвращающую массив, 
//заполненный случайными целыми числами из заданного диапазона. 
//При этом числа не должны повторяться. 
//Для решения задачи используйте комбинацию функций range и shuffle.

function getRandom(min = 0, max = 100) {
    let rand = Math.floor(Math.random()*((max - min + 1) + min));
    return rand
}

function randomRange(min, max) {
    let buff;

    if (min > max) {
        buff = min;
        min = max;
        max = buff;
    }
    
    //The goal is to create an array that will not contain equal numbers
    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

//we have to save the result in a constant
const randomArray = randomRange(getRandom(), getRandom());

//Let's shuffle the straight range of the numbers in the array
function shuffle(array) {
    let result = [];
    
    while (array.length > 0){
        let randomKey = getRandomIndex(0, arr.length - 1);
        let elem = arr.splice(randomKey, 1);
        elem = elem[0]; // let's take out each element from its array
        result.push(elem); //and push it to the array "result".
    }
    
    return result
}

//this is how we can check the result 
console.log(shuffle(randomArray))
