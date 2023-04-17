/*
Метод matches позволяет проверить, 
удовлетворяет ли элемент указанному CSS селектору.

Синтаксис
элемент.matches('селектор');
*/

//Task 1
//Проверим, является ли наш элемент абзацем с классом www
let elem = document.querySelector('#elem');
console.log(elem.matches('p.www')); //true

//Task 2
//Дан элемент
//Проверьте, является ли этот элемент элементом с классом sss
let par = document.querySelector('#par');
console.log(par.matches('p.sss')); //false


//Task 3
//Дан элемент. Проверьте, является ли этот элемент абзацем.
let paragraph = document.querySelector('#paragraph');
console.log(paragraph.matches('p')); //true