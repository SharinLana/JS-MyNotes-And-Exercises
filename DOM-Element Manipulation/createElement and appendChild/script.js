/*
Для этого предназначен метод document.createElement. 
Параметром этого метода следует передавать имя тега, 
который должен быть создан.

наш элемент не будет размещен на странице. 
А так мы можем менять ему текст, атрибуты, 
навешивать обработчики событий 
и в конце концов разместить его на странице.

Для размещения нового элемента на странице 
применяется метод appendChild. 
Этот метод следует применять к тому элементу, 
в который мы хотим поместить наш элемент. 
А параметром метода следует передавать наш новый элемент, 
созданный ранее через createElement.
*/

//Task 1
//Пусть у нас есть див, а в нем - несколько абзацев
// Давайте создадим абзац, установим ему текст 
//и поместим на страницу в конец блока #parent

let parent = document.querySelector('#parent');
let p = document.createElement('p');
p.textContent = '!';
parent.appendChild(p);


//Task 2
//Вставьте ему в конец li с текстом 'item'.

let list = document.querySelector('#list');

let li = document.createElement('li');
li.textContent = 'item';
list.appendChild(li);


//Task 3
//Дан ol и кнопка
//Сделайте так, чтобы по клику на кнопку 
//в конец списка добавлялся li с текстом 'item'.

let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');

btn.addEventListener('click', addText);

function addText() {
    let li = document.createElement('li');
    li.textContent = 'item';
    elem.appendChild(li);
}