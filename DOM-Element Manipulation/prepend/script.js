/*
Метод prepend позволяет вставить 
в начало 
какого-либо элемента другой элемент. 

Параметром метод принимает элемент, 
как правило созданный через createElement, либо строку. 
Можно добавить сразу несколько элементов или строк, 
перечислив их через запятую.

Синтаксис: родитель.prepend(элемент или строка)
*/

//Task 1
//Давайте создадим абзац, 
//установим ему текст и поместим на страницу 
//в начало блока #parent

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.textContent = 'beginning';
parent.prepend(p);


//Task 2
//Поместим сразу несколько абзацев в начало блока

let block = document.querySelector('#block');

for (let i = 1; i <= 4; i++) {
    let p = document.createElement('p');
    p.textContent = i;

    block.prepend(p);
}


//Task 3
//Давайте в качестве параметра метода используем strings

let div = document.querySelector('#div');

let str1 = 'text1';
let str2 = 'text2';

div.prepend(str1, ' ',  str2 );
