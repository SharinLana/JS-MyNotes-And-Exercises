/*
Метод insertAdjacentHTML 
позволяет вставить строку HTML кода в любое место страницы. 

Код вставляется относительно опорного элемента. 
Можно сделать вставку 

перед опорным элементом 
(способ вставки beforeBegin), 

после него (способ вставки afterEnd), 

а также в начало опорного элемента
(способ вставки afterBegin) 

или в конец (способ вставки beforeEnd).

Синтаксис:
опорный элемент.insertAdjacentHTML(способ вставки, код для вставки)
*/

//Task 1 
//Способ beforeBegin
//Пусть опорный элемент - это элемент #target. 
//Вставим перед ним новый абзац

let target = document.querySelector('#target');
target.insertAdjacentHTML('beforeBegin', "<p>!</p>");
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
div.insertAdjacentHTML('afterEnd', "<p>!!</p>");
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
elem.insertAdjacentHTML('afterBegin', "<p>!!!</p>");
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
block.insertAdjacentHTML('beforeEnd', "<p>!!!!</p>")

/*
<div id="target">
	<p>elem</p>
    <p>!</p>
</div>
*/


//Task 5
//Дан элемент
//Вставьте перед ним следующий тег:
/*
<div class="www">
<p>text</p>
<p>text</p>
<input>
</div> 

*/

let div2 = document.querySelector('#div2');
div2.insertAdjacentHTML('beforeBegin', "<div class='www'><p>text</p><p>text</p><input></div>")

