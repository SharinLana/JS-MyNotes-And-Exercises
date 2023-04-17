/* BULLEAN in IF - ELSE */

//Значения, которые при приведению к логическому типу дают false: 
//0, -0, +0, null, false, NaN, undefined, '' (пустая строка).

//При сравнении булевых значений (true or false) можно использовать как == (сравнение по значению переменных),
// так и === (сравнение переменных по типу и значению)

let test = true;
if (test === false) {
	alert('верно');
} else {
	alert('неверно');
}

let test1 = 1; //(единица в переводе на bullean = true)
if (test1 == true) {
    console.log('true'); //выведет true
}
else {
    console.log('false');
}

let test2 = 0; //(0 в переводе на bullean = false)
if (test2 == true) {
    console.log('true'); 
}
else {
    console.log('false'); //выведет false
}


let test3 = 1;
if (test3 != true) {
	alert('верно');
} else {
	alert('неверно'); //false
}


let test4 = NaN;
if (test4 == true) {
	alert('верно');
} else {
	alert('неверно'); //false
}


let test5 = '';
if (test5 == false) {
	alert('верно'); //true
} else {
	alert('неверно');
}


let test6; //undefined
if (test6 == true) {
	alert('верно');
} else {
	alert('неверно'); //false
}


let test7 = 3 * 'a'; //NaN
if (test7 == true) {
	alert('верно');
} else {
	alert('неверно'); //false
}

//на самом деле конструкция if не является обязательной для сравнения - 
//сами операторы вида ==, ===, !=, <, > и т.д. возвращают своим результатом либо true, либо false.
console.log(1 == 1); // выведет true
console.log(1 == 2); // выведет false

//Задача: Пусть даны следующие переменные:
let a = 2 * (3 - 1);
let b = 6 - 2;
//Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
let result = a == b;
console.log(result); //выведет true


//Задача: Пусть даны следующие переменные:
let c = 2 ** 4;
let d = 4 ** 2;
//Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.
let result2 = c != d;
console.log(result2); //выведет false, т.к. значения переменных равны, а мы в уравнении утверждали обратное
