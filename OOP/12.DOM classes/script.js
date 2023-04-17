/*
DOM элементы также представляют собой объекты встроенных классов. 
Давайте посмотрим на примере. Пусть у нас есть абзац
Можно определить к какому классу принадлежит наш абзац. 
Для этого в списке свойств нужно найти особое свойство [[Prototype]]
*/
let par = document.querySelector('p');
console.dir(par); //[[Prototype]]:  HTMLParagraphElement
console.log(par instanceof HTMLParagraphElement); // true


// Task 2
let div = document.querySelector('div');
console.dir(div); //HTMLDivElement
console.log(div instanceof HTMLDivElement); // true


// Task 3
let elem = document.querySelector('input');
console.dir(elem); // HTMLInputElement


// Task 4
let elems = document.querySelectorAll('div');
console.dir(elems); // NodeList
console.log(elems instanceof NodeList); // true


// Task 5
let parent = document.querySelector('#parent');
let pars = parent.querySelectorAll('p');

console.dir(pars); // NodeList