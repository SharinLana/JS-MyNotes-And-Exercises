/*
метод call

позволяют принудительно указать, 
в каком контексте вызывается функция 
(то есть принудительно сказать, чему равен this).
*/

let elem = document.querySelector('#elem');

function getThis() {
    console.log(this.value); /// text
}

getThis.call(elem);


//Task 3
//Даны три инпута 
//С помощью метода call и функции func 
//выведите на экран value каждого из инпутов
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func() {
    console.log(this.value);
}
func.call(elem1);
func.call(elem2);
func.call(elem3);


/*
Метод call с параметрами
*/

//Task 4
//чтобы на экран вывелось 'hello, John Smit'. 
//Слово 'hello' должно взяться из value инпута, 
//а 'John' и 'Smith' должны быть параметрами функциями.
let elem4 = document.querySelector('#elem4');

function func2(param1, param2) {
    console.log(this.value + " " + param1 + " " +  param2);
}

func2.call(elem4, "John", "Smith")