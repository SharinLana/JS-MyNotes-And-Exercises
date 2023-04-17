/*
Свойство parentElement
Свойство parentElement содержит родительский элемент.

Синтаксис: элемент.parentElement
*/

//Task 1: Давайте получим родителя элемента #elem 
//и выведем на экран его id

let elem = document.querySelector('#elem');
console.log(elem.parentElement.id);


//Task 2: Дан элемент.
//Найдите его родителя и задайте ему красную границу.
let item = document.querySelector('#item');

let parent = item.parentElement.style.border = '2px solid red';
console.log(item.parentElement)


//Task 3: Дан элемент.
//Найдите родителя его родителя и задайте ему красную границу.

let firstParent = item.parentElement;
let grandParent = firstParent.parentElement;
grandParent.style.border = '4px solid red';
console.log(firstParent.parentElement);



/*
Метод closest

Метод ищет ближайший родительский элемент, 
подходящий под указанный CSS селектор, 
при этом сам элемент тоже включается в поиск.

Синтаксис: элемент.closest('селектор')
*/

//Task 4: Давайте найдем среди родителей элемента "child" элемент с классом www
let child = document.querySelector('#child');
let dad = child.closest('.www');
console.log(dad);


//Task 5: Давайте найдем среди родителей элемента элемент с классом www.
let child2 = document.querySelector('#child2');
let mother = child2.closest('.www');
console.log(mother); // <p class="www" id="child2"></p> (В результате мы получим ссылку на сам элемент, так как он сам имеет этот класс:)


//Task 6: Найдите ближайшего родителя этого элемента, являющегося тегом div.
let span = document.querySelector('#span');
let parent2 = span.closest('div');
console.log(parent2)
