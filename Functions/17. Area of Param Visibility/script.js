function func(localNum) {
	console.log(localNum); // 1
}

func(1);


//
function funcA(localNum) {
	console.log(localNum); // 1
}

let num = 1;
funcA(num);


//
function funcB(localNum) {
	console.log(localNum); // 1
}

let numB = 1;
funcB(numB);
numB = 2;


//
let numC = 1;

function funcC(localNum) {
	console.log(localNum); // 2
}

numC = 2;
funcC(numC);


//
function funcD(localNum) {
	localNum = 2;
}

let numD = 1;
funcD(numD);
console.log(numD); // 1


//
function funcE(localNum) {
	numE = 2;
}

let numE = 1;
funcE(numE);
console.log(numE); // 2


//
function funcF(localNum) {
	let numF = 2;
}

let numF = 1;
funcF(numF);
console.log(numF); // 1


/* Одноименные параметры */

//Давайте назовем параметр функции таким же именем, как и внешнюю глобальную переменную.
//это будут разные переменные! 
//Изменение переменной num внутри функции будет приводить к изменению локальной переменной функции.
//А внешняя переменная num внутри функции будет недоступна и не сможет быть изменена никаким способом

function funcG(numG) {
	numG = 2; // меняем локальную переменную
}

let numG = 1;
funcG(numG);
console.log(numG); // выведет 1 - ничего не поменялось