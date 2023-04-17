/*
Пусть у нас есть инпут

Пусть по клику на этот инпут сработает анонимная функция 
и внутри этой функции запустится таймер, 
каждую секунду выводящий что-нибудь в консоль.

Пока все работает верно. 
Но пусть теперь мы хотим выводить в консоль value нашего инпута - 
нас ждет сюрприз: в консоль будет выводится undefined.
*/

let input = document.querySelector('#input');

input.addEventListener('click', function() {

    setInterval(function() {
        console.log(this.value); // undefined
    }, 1000)
});

/*
Все дело в том, что у нас получается функция в функции: 
есть внешняя анонимная функция, 
которая вызывается по клику 
и внутренняя анонимная функция, 
которую запускает таймер. 
Во внешней функции this указывает на инпут, 
но во внутренней - нет. 
Имеет место потеря контекста.

Поправим проблему введением self
*/

input.addEventListener('click', function() {
    let self = this;

    setInterval(function() {
        console.log(self.value); // text
    }, 1000)
});


//Task 2
//по нажатию на input
//значение input каждую секунду увеличивалось на 1

let elem = document.querySelector('#elem');
let timerID;

elem.addEventListener('click', function() {
    let self = this;

    timerID = setInterval(function() {
        self.value = Number(self.value) + 1;
    }, 1000)
});

elem.addEventListener('blur', function() {
    clearInterval(timerID)
});


/*
Другие способы решить проблему

можно использовать стрелочную функцию
*/

//Task 3
//по нажатию на input
//значение input каждую секунду увеличивалось на 1

let el = document.querySelector('#el');
let timerId;

el.addEventListener('click', func);

function func() {
    timerId= setInterval(() => (this.value = Number(this.value) + 1), 1000);
    el.removeEventListener('click', func)
}

el.addEventListener('blur', function() {
    clearInterval(timerId);
});


/*
One more effective solution of the problem descripted in Task 1.

Суть в том, 
что кроме первых двух параметров (function, 1000)
в setInterval можно передавать еще дополнительные параметры.

Давайте посмотрим на примере. 
Пусть у нас есть вот такая функция, принимающая два параметра:
*/

function func2(str1, str2) {
	console.log(str1, str2);
}

//Давайте передадим эту функцию в setInterval первым argument, 
//вторым argument укажем время, 
//и еще сделаем два дополнительных arguments 'a' и 'b'.
//Вот эти дополнительные arguments 
//и будут автоматически попадать в параметры нашей функции func as str1, str2.

function func2(str1, str2) {
	console.log(str1, str2); // каждую секунду будет вводить 'a','b' 
}
setInterval(func, 1000, 'a', 'b');

//Сделаем нашу функцию анонимной (компактнее, но менее очевидно)

setInterval(function(str1, str2) {
	console.log(str1, str2);
}, 1000, 'a', 'b');


//Решим теперь задачу 1, используя описанную особенность setInterval

input.addEventListener('click', function() {
	setInterval(func, 1000, this); // параметром передаем this
	
	function func(self) { // в self попадает this
		console.log(self.value);
	}
});

//Сделаем более компактное решение через анонимную функцию

input.addEventListener('click', function() {
    setInterval(function(self) {
        console.log(self.value)
    }, 1000, this)
});