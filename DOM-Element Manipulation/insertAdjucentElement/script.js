/*
Метод insertAdjacentElement 
позволяет вставить элемент в любое место страницы. 

Чаще всего используется после создания элемента с помощью createElement.
Код вставляется относительно опорного элемента. 
Можно сделать вставку 

перед опорным элементом 
(способ вставки beforeBegin), 

после него 
(способ вставки afterEnd), 

а также в начало опорного элемента
(способ вставки afterBegin) 

или в конец 
(способ вставки beforeEnd) 

Синтаксис:
опорный элемент.insertAdjacentElement(способ вставки, element для вставки)

*/

//Task 1 
//Способ beforeBegin
//Пусть опорный элемент - это элемент #target. 
//Вставим перед ним новый абзац

let target = document.querySelector('#target');

let p = document.createElement('p');
p.textContent = '!';

target.insertAdjacentElement('beforeBegin', p);
/*
<p>!</p>
<div id="target">
	<p>elem</p>
</div>
*/


//Task 2
//Способ afterEnd
//А теперь вставим новый абзац после опорного элемента

let div = document.querySelector('#div');

let p2 = document.createElement('p');
p2.textContent = '!';

div.insertAdjacentElement('afterEnd', p2);
/*
<div id="target">
	<p>elem</p>
</div>
<p>!</p>
*/


//Task 3
//Способ afterBegin
//Вставим новый абзац в начало опорного элемента

let elem = document.querySelector('#elem');

let p3 = document.createElement('p');
p3.textContent = '!!!';

elem.insertAdjacentElement('afterBegin', p3);
/*
<div id="target">
    <p>!</p>
	<p>elem</p>
</div>

*/


//Task 4 
//Способ beforeEnd
//Вставим новый абзац в конец опорного элемента

let block = document.querySelector('#block');

let p4 = document.createElement('p');
p4.textContent = '!!!';

block.insertAdjacentElement('beforeEnd', p4)

/*
<div id="target">
	<p>elem</p>
    <p>!</p>
</div>

*/


//Task 5
//Дан элемент
//Вставьте перед ним абзац с текстом '!!!'.

let div2 = document.querySelector('#div2');

let p5 = document.createElement('p');
p5.textContent = '!!!';

div2.insertAdjacentElement('beforeBegin', p5);


//Task 6
//Дан элемент
//Вставьте после него абзац с текстом '!!!'.
let p6 = document.createElement('p');
p6.textContent = '!!!';

div2.insertAdjacentElement('afterend', p6);


//Task 7
//Дан элемент
//Вставьте ему в начало абзац с текстом '!!!'.
let p7 = document.createElement('p');
p7.textContent = '!!!';

div2.insertAdjacentElement('afterbegin', p7);


//Task 8
//Дан элемент
//Вставьте ему в конец абзац с текстом '!!!'.
let p8 = document.createElement('p');
p8.textContent = '!!!';

div2.insertAdjacentElement('beforeend', p8);