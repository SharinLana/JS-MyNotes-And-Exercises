/*
Метод contains позволяет проверить, 
содержит ли один элемент внутри себя другой. 

Параметром метода передается элемент, 
который будет проверяться на то, 
что он находится внутри элемента, 
к которому применился метод.

Синтаксис
родитель.contains(элемент)
*/

//Task 1
//Проверим, находится ли абзац #child в блоке #parent

let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

console.log(parent.contains(child)); // true


//Task 2
//Можно передать тот же элемент, 
//на котором метод был вызван (parent element), 
//в этом случае метод также вернет true

console.log(parent.contains(parent)); //true


//Task 3
//Даны две переменные elem1 и elem2, содержащие два элемента
//Проверьте, является ли элемент из elem2 потомком элемента из elem1.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

console.log(elem1.contains(elem2)); // true