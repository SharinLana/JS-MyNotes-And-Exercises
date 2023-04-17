/*
Метод append позволяет вставить 
в конец 
какого-либо элемента другой элемент. 
Параметром метод принимает элемент, 
как правило созданный через createElement, 
либо строку. 

Можно добавить сразу несколько элементов или строк, 
перечислив их через запятую.

Синтаксис: родитель.append(элемент или строка)
*/

//Task 1
//Поместим сразу несколько абзацев в конец блока #parent
let parent = document.querySelector('#parent');
let p1 = document.createElement('p');
p1.textContent = '!';

let p2 = document.createElement('p');
p2.textContent = '!!';

parent.append(p1, p2);


//Task 2
//Давайте в качестве параметра метода используем строку
let div = document.querySelector('#div');

let string = 'text text';
div.append(string);


//Task 3
//Дан ul. Давайте разместим в нем 9 тегов li, 
//при этом их текстом сделаем порядковые номера
let list = document.querySelector('#list');

for (let i = 0; i <= 9; i++) {
    let li = document.createElement('li');
    li.textContent = i;

    list.append(li);
}


//Task 4
//Давайте заполним таблицу tr-ками и td-шками
let table = document.querySelector('#table');

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 6; j++) {
        let td = document.createElement('td');
        td.innerHTML = j;

        tr.append(td);
    }
    table.append(tr);
}


// Task 5
// Вставьте ему в конец элемент с текстом 'finish'.
let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.textContent = 'finish';
elem.append(li);