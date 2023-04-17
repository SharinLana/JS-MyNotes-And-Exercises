/*
Метод insertBefore позволяет вставить элемент 
перед другим элементом. 

Чаще всего используется после создания элемента с помощью createElement. 
Метод применяется к родителю того элемента, перед которым произойдет вставка.

Синтаксис: родитель.insertBefore(элемент, перед кем вставить)
*/

//Task 1
//Создадим абзац и поместим его перед вторым абзацем

let parent = document.querySelector('#parent');
let before = document.querySelector('#before');

let p = document.createElement('p');
p.textContent = 'Middle par';

parent.insertBefore(p, before);


//Task 2
//Добавим абзац в начало элемента #parent. 
//Для этого вставим наш абзац перед первым потомком #parent. 
//Этого потомка можно найти с помощью firstElementChild

let block = document.querySelector('#block');

let par = document.createElement('p');
par.textContent = '!';

block.insertBefore(par, block.firstElementChild);


//Task 3
//При передаче вторым параметром null 
//метод insertBefore срабатывает как appendChild. 
//В то же время, если в элементе нет дочерних элементов, 
//firstElementChild возвращает null. 
//Следовательно, добавлять в начало элемента можно даже тогда, 
//когда в нем нет дочерних элементов

let div = document.querySelector('#div');

let paragraph = document.createElement('p');
paragraph.textContent = 'paragraph';

div.insertBefore(paragraph, div.firstChild);


//Task 4
//Дан элемент #item.
//Вставьте перед этим элементом элемент с текстом 'new'.
//чтобы клик на вставленный элемент приводил к тому, 
//что в конец его текста будет добавляться '!'

let list = document.querySelector('#list');
let item = document.querySelector('#item');

let li = document.createElement('li');
li.textContent = 'new';
li.addEventListener('click', function() {
    this.textContent = this.textContent + '!';
})

list.insertBefore(li, item);
