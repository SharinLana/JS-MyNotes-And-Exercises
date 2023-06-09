/* IF - ELSE */
//Конструкция else не является обязательной. Ее можно не прописывать, пиать только if


//Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
let test = 11;
if (test > 10) {
    alert('true');
}
else {
    alert('false');
}


//ПРОВЕРКА НА РАВЕНСТВО (==)
//Для проверки двух значений на равенство используется оператор == 
//(не путай его с оператором =, который используется для присваивания).
//Давайте для примера проверим, что test переменная равна 0:

let test2 = 10; // пусть значение переменной равно 0

if (test2 == 10) {
	alert('true'); // сработает этот alert, так как переменная равна 0
} else {
	alert('false');
}


//ПРОВЕРКА НА НЕРАВЕНСТВО (!=)
let test3 = 1; // пусть значение переменной равно 1

if (test3 != 10) {
	alert('true'); // сработает этот alert, так как переменная НЕ равна 0
} else {
	alert('false');
}


//СРАВНЕНИЕ ПЕРЕМЕННЫХ
let num1 = 15;
let num2 = 3;
if (num1 > num2) {
    console.log('true'); //выведет true
}
else {
    console.log('false')
}


//СРАВНЕНИЕ СТРОК
let test4 = 'abc';

if (test4 == 'abc') {
	alert('верно'); // сработает этот alert, так как переменная равна 'abc'
} else {
	alert('неверно');
}


//ЧИСЛА В КАВЫЧКАХ и операторы == и ===

//При сравнении чисел-строк (например, '3') с настоящими числами (например, 3),
// JavaScript считает, что строка в кавычках равна такому же числу.
if ('3' == 3) {
	alert('true'); // сработает этот alert - значения равны
} else {
	alert('false');
}

//Если нужно сравнить так, чтобы система определила число в кавычках как строку,
//то нужно использовать оператор === вместо ==
if ('3' === 3) {
	alert('true');
} else {
	alert('false'); // сработает этот alert
}

//Разница между оператором == и оператором === проявляется именно тогда, 
//когда значения одинаковые, но разный тип данных.
//То есть, == сравнивает СОДЕРЖИМОЕ переменных, а === ТИП переменных
//В остальных случаях эти операторы работают одинаково. 
if (2 === 3) {
	alert('true');
} else {
	alert('false'); // сработает этот alert
}


//НЕРАВЕНСТВО ПО ЗНАЧЕНИЮ И ТИПУ (!= VS !==)

//Оператор != сравнивает СОДЕРЖИМОЕ переменных (из значение)
//Оператор !== сравнивает ТИП переменных, ЕСЛИ типы различаются (строка VS номер),
//если типы переменных равны (две строки или два номера, например), то идет сравнение СОДЕРЖИМОГО
//как в случае с !=

let test6 = 3;
let test7 = '3';
		
if (test6 !== test7) {
	alert('true');  //выведет true, так как типы переменных не равны (строка и число)
} else {
	alert('false');
}


let test8 = 3;
let test9 = 2;
		
if (test8 !== test9) {
	alert('true'); //выведет true, так как типы равны, но сожержимое разное
} else {
	alert('false');
}


//НЮАНСЫ с числом 0
if (0 == '') {
	alert('верно'); // выведет 'верно'
} else {
	alert('неверно');
}


if (0 == '0') {
	alert('верно'); // выведет 'верно'
} else {
	alert('неверно');
}


//НЕОБЯЗАТЕЛЬНОСТЬ СИНТАКСИСА IF - ELSE
//1. Else можно не прописывать, использовать только if

//2. Если в фигурных скобках if или else - только ОДНО выражение, 
//можно эти фигурные скобки не писать и оформить всё столбиком или в одну линию.
//Столбик без braces
if (test == 0) 
	alert('верно'); 
else 
	alert('неверно!');

//One line without braces
if (test == 0) alert('верно'); else alert('неверно!');

//В случае, если выражений в if - else БОЛЬШЕ ОДНОГО, то ВСЕГДА используй фигурные скобки
//В противном случае система зачтет только первое выражениие в условие if-else, остальные же просто
//запустит при загрузке документа.
//То есть, условие, оформленное вот так:
let test12 = 3;
if (test12 > 0)
	alert(test11);
	alert('верно');

//система прочитает, как:
let test11 = 3;
if (test11 > 0) {
	alert(test11);
}
alert('верно'); // эта строка оказалась снаружи условия



// ELSE IF

// Конструкция else if нужна для того, чтобы была возможность отловить ситуацию, 
//когда значение переменной не подходит ни под одно из условий
if (day <= 10 ) {
	alert('first decade');
}
else if (day > 10 && day <= 20) {
	alert('second decade');
}
else if (day > 20 && day <= 31) {
	alert('third decade');
}
else {
	alert('Error!')
}


//ВЛОЖЕННЫЕ IF

//Конструкции if-else можно вкладывать друг в друга произвольным образом. 

let num18 = 3;
if (num18 >= 0) {
	if (num18 <= 5) {
		alert('меньше или равно 5');
	} else {
		alert('больше 5');
	}
} else {
	alert('меньше нуля');
}


let num20 = 18;
num20 = String(29); //предбразовали к строке, чтобы впоследствии сложить числа переменной между собой
if (num20 >= 20 && num20 <= 99) {
	let sum = Number(num20[0]) + Number(num20[1]);
	if (sum <= 9) {
		alert('single digit');
	}
	else {
		alert('two-digit-number');
	}
}
else {
	alert('the number does not fit the range');
}



/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено». */

let start = prompt (`Who's there?`);
let firstAnswer = start.toLowerCase();

if (firstAnswer === 'admin') {

	let password = prompt (`Enter password`);

	if (password === 'head') {
		alert (`Hello!`);
	}
	else if (password === '' || password === null ) {
		alert (`Action canceled`);
	}
	else {
		alert (`The person is unknown`);
	}
}
else if (firstAnswer === '' || firstAnswer === null) {
	alert (`Action canceled`);
}
else {
	alert (`The person is unknown`);
}