/*

Объект this удобен, когда элемент, в котором произошло событие, 
и элемент, с которым совершаются действия в результате события, - 
это один и тот же элемент.

Например, если у нас есть инпут, 
мы можем привязать к нему обработчик потери фокуса 
и по наступлению этого события что-то сделать с текстом инпута. 

особое преимущество this проявляется, когда у нас несколько элементов, 
и к каждому привязана одна и та же функция
*/

let input = document.querySelector('#input');

input.addEventListener('blur', function() {
    console.log(this); // contains a link to the element
    console.log(this.value); // got the value of the element on blur
    this.value = '!!!'; // changed the value
    console.log(this.value); // !!!
});


//Task: Дан инпут. По получению фокуса этим инпутом 
//запишите в него число 1, а по потери фокуса - число 2. 
//Для обращения у инпуту внутри функции-обработчика 
//используйте объект this.

let input2 = document.querySelector('#input2');

input2.addEventListener('focus', function() {
    this.value = 1;
    console.log(this.value);
});

input2.addEventListener('blur', function() {
    this.value = 2;
    console.log(this.value);
});


//Task: Дана кнопка, значением которой служит число 1. 
//Сделайте так, чтобы по клику на эту кнопку 
//ее значение каждый раз увеличивалось на единицу.

let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    this.innerHTML = Number(this.innerHTML);
    this.innerHTML++;
});


//Task: Даны 5 абзацев с какими-то текстами. 
//По клику на любой абзац запишите в конец его текста восклицательный знак.

let pars = document.querySelectorAll('.par');

for (let par of pars) {
    par.addEventListener('click', addExclamationPoint);
}

function addExclamationPoint() {
    this.innerText = this.innerText + '!';
};


//Task: Даны 3 инпута, в которых записаны какие-то числа. 
//По потери фокуса в любом из инпутов 
//возведите стоящее в нем число в квадрат.
let elem1 = document.querySelector('#inpt1');
let elem2 = document.querySelector('#inpt2');
let elem3 = document.querySelector('#inpt3');

elem1.addEventListener('blur', getSquare);
elem2.addEventListener('blur', getSquare);
elem3.addEventListener('blur', getSquare);

function getSquare() {
    this.value = this.value ** 2;
}


//Task: Сделайте так, чтобы по потери фокуса 
//в любом из инпутов выполнялась функция:
//function func() {
//	this.value = Number(this.value) + 1;
//}

let inputFields = document.querySelectorAll('.input');

for (let input of inputFields) {
    input.addEventListener('blur', func);
};

function func() {
    this.value = Number(this.value) + 1;
};


//Task: Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац 
//его число в нем возводилось в квадрат.

let paragraphs = document.querySelectorAll('.p');

for (let p of paragraphs) {
    p.addEventListener('click', getSquareNum);
}

function getSquareNum() {
    this.innerText = this.innerText ** 2;
}


