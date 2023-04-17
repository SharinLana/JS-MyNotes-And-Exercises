// Task 
// Пусть у нас даны два дива с числами
// Давайте сделаем так, чтобы по клику по первому диву 
// его значение возводилось в квадрат, 
// а по клику по второму диву - в куб
// And we need to use the same names of variables for each DOM element

; (function() {
    let elem = document.querySelector('#div1');

    function func(num) {
        return num ** 2;
    }

    elem.addEventListener('click', function() {
        this.textContent = func(elem.textContent);
    })
})();

; (function() {
    let elem = document.querySelector('#div2');

    function func(num) {
        return num ** 3;
    }

    elem.addEventListener('click', function() {
        this.textContent = func(elem.textContent);
    })

})();


// Task 2
// Иногда нужно сделать так, 
// чтобы некоторые переменные и функции модуля были доступны снаружи.
// Пусть у нас есть модуль.
// Давайте экпортируем нашу функцию func. 
// Для этого запишем ее в свойство встроенного в браузер объекта window

; (function() {
    let str = 'string';

    function func() {
        document.write(str)
    }

    window.func = func;
})();

func(); // we'va got 'string' written on the screen


// Task 3
// Экспорт функции
// Дан следующий модуль
// Экспортируйте наружу одну из переменных и две любые функции.

;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}

    window.str1 = str1;
    window.func1 = func1;
    window.func2 = func2;
})();

console.log(str1);
func1();
func2();


// Task 4
// Экспорт объекта

;(function() {
	let module = {};
	
	module.func1 = function() {
		alert('function 1');
	}
	module.func2 = function() {
		alert('function 2');
	}
	module.func3 = function() {
		alert('function 3');
	}
	
	window.module = module;
})();

module.func1();
module.func2();
module.func3();


// Task 5
// Дан следующий модуль
// Экспортируйте наружу объект 
// с первыми пятью функциями 
// и первыми двумя переменными

;(function() {
    let object = {};
	object.str1 = 'variable 1';
	object.str2 = 'variable 2';
	object.str3 = 'variable 3';
	
	object.func1 = function() {
		alert('one');
	}
	object.func2 = function() {
		alert('two');
	}
	object.func3 = function() {
		alert('three');
	}
	object.func4 = function() {
		alert('four');
	}
	object.func5 = function() {
		alert('five');
	}

    window.object = object;
})();

object.func1();
object.func2();
object.func3();
object.func4();
object.func5();

console.log(object.str1);
console.log(object.str2);