/*
замыкание - это функция вместе со всеми внешними переменными, которые ей доступны. 
Или, другими словами, замыкание - это функция вместе со своим лексическим окружением.

Если же какая-то функция получает переменную из своего лексического окружения, 
то говорят "переменная берется из замыкания".
*/

/* 

function test() {
    let num = 1;
    return  function() {
        alert(num); // the variable num was taken from the closure of the function test()
    }
}

console.log(test()()); // 1

*/

/* Счетчик на замыканиях
мы реализовали счетчик вызова функций, 
используя замыкание (точнее используя переменную num из замыкания нашей функции).

каждый вызов функции test будет возвращать новую функцию, 
у которой будет свое замыкание. То есть разные счетчики будут работать независимо:
*/

/*
function test2() {
    let num = 1;

    return function() {
        alert(num);
        num++;
    }
}
let result = test2();
result(); // 1
result(); // 2

let result2 = test2();
result2(); // 1
result2(); // 2

//То есть если мы вызовем функцию test два раза, 
//то полученные из нее функции будут работать независимым образом 
//и каждая из этих функций будет иметь свою независимую переменную num.
*/


/*
//Task: Пусть функция в замыкании хранит число 10. 
//Сделайте так, чтобы каждый вызов функции уменьшал это число на 1
// и выводил на экран уменьшенное число.

function test3() {
    let num = 10;

    return function() {

        if (num < 0) {
            alert(`Counting is done`)
        }
        else {
            alert(num--);
        }
    }
}

let result3 = test3();

result3();
result3();
result3();
result3();
result3();
result3();
result3();
result3();
result3();
result3();
result3();
result3();

*/

//Local Variable
//переменная num - локальная внутри функции func. 
//Поэтому каждый вызов func порождает свою локальную переменную.
//Поэтому возвращаемые функции будут ссылаться каждая на свою локальную переменную функции test. 
//Именно так и достигается независимость работы.


function func() {
	let num = 0;
	
	return function() {
		alert(num);
		num++;
	};
};

let resultFunc = func();
resultFunc(); //0
resultFunc(); //1
resultFunc(); //2

func()(); //0
func()(); //0
func()(); //0


//Global Variable
//В этом случае все возвращаемые функции будут изменять эту глобальную переменную 
//и счетчики будут работать уже зависимо друг от друга.
//лексические окружения возвращаемых функций ссылаются на одну и ту же переменную num - 
//любые изменения с этой переменной будут видны во всех функциях.

let num = 0;
function func2() {
	
	return function() {
		alert(num);
		num++;
	};
};

let resultF = func2();
resultF(); //0
resultF(); //1
resultF(); //2

func2()(); //3
func2()(); //4
func2()(); //5


//
let num2 = 0;
function func3() {
	
	return function() {
		alert(num);
		num++;
	};
};

let resultFun1 = func3();
resultFun1(); //0
resultFun1(); //1
resultFun1(); //2

let resultFun2 = func3();
resultFun2(); //3
resultFun2(); //4
resultFun2(); //5