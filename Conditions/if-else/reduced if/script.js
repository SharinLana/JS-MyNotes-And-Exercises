/* REDUCED IF */
//В сокращенных операциях сравнение идет по ==, а не по === !!!
/*
//К примеру, мы хотим узнать, равна ли переменная test значению true.
//Это можно сделать классическим способом:
let test = true;
if (test == true) {
	alert('true');
} else {
	alert('false');
}

//Но можно использовать более изящную сокращенную форму:
let test1 = true;
if (test1) { // эквивалентно if (test == true)
	alert('true');
} else {
	alert('false');
}

//Пусть теперь мы проверяем на то, что переменная test не равна true.
//В этом случае сокращенный синтаксис будет выглядеть так:
let test2 = true;
if (!test2) { // используем логическое НЕ
	alert('true');
} else {
	alert('false');
}
*/

let test3 = '';
if (test3) { //эквивалент (if (test == true))
	alert('true');
} else {
	alert('false'); // false
}

let test4 = 3 * 'abc'; //NaN
if (test4) { //эквивалент if (test == true)
	alert('true');
} else {
	alert('false'); //false
}

let test5 = null;
if (test5) {
	alert('true');
} else {
	alert('false'); //false
}

let test6 = false;
if (test6) { //эквивалент if (test == true)
	alert('true');
} else {
	alert('false'); //false
}

let test7;
if (test7) {
	alert('true');
} else {
	alert('false'); //false
}

let test8 = 0;
if (test8) {
	alert('true');
} else {
	alert('false'); //false
}

let test9 = '0';
if (test9) {
	alert('true'); //true (заполненная строка == true)
} else {
	alert('false'); 
}

let test = -1; //-1 имеет булевое значение true
if (test) {
	alert('true'); //true
} else {
	alert('false');
}