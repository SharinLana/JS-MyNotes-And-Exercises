// Task 1
// давайте сделаем функцию, которая первым параметром 
// будет принимать id элемента, а вторым - текст элемента, 
// и будет устанавливать этому элементу новый текст.

function setText(id, text) {
    let elem = document.querySelector(id);
    elem.textContent = text;
}

setText('#elem1', 'text1');
setText('#elem2', 'text2');

// Task 2
// Модифицируйте созданную мною функцию так, 
// чтобы параметром она принимала не id элемента, 
// а произвольный CSS селектор.

function func(className, text) {
    let elem = document.querySelector(className);
    elem.textContent = text;
}

func('.ppp', 'new text');
func('.p', 'new text - 2');


// Task 3
// Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. 
// Пусть первым параметром функция принимает селектор элемента, 
// вторым - имя атрибута, а третьим - его новое значение

function setAttr(id, className, value) {
    let elem = document.querySelector(id);
    elem.setAttribute(className, value);
    console.log(elem);
}

setAttr('#elem5', 'class', 'par');


// Task 4 - группа DOM элементов

// Сделайте функцию appendText, 
// которая первым параметром будет принимать селектор, 
// а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст 
// в конец переданных элементов.

function addText(selector, text) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        elem.textContent = elem.textContent + " - " + text;
    }
}

addText('.elem', 'newly added text');

// Task 5
// Сделайте функцию appendText, 
// которая первым параметром будет принимать DOM элемент, 
// а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
let header = document.querySelector('#header');

function appendText(elem, text) {
    elem.textContent = elem.textContent + ' - ' + text;
}
appendText(header, '!');


// Task 6
// Даны абзацы. Получите их, переберите циклом 
// и каждому добавьте в конец '!' с помощью функции appendText, 
// сделанной в предыдущей задаче.
let pars = document.querySelectorAll('.par');

for (let par of pars) {
    appendText(par, '!')
}


// Task 7
// Сделайте функцию setValue, 
// которая первым параметром будет принимать ссылку на инпут, 
// а вторым - текст. Сделайте так, чтобы данная функция 
// устанавливала переданный текст в value инпута.

let input = document.querySelector('#input');

function setValue(elem, text) {
    elem.value = text;
}
setValue(input, 'new text');


// Task 8
// Сделайте функцию, 
// которая первым параметром будет принимать массив DOM элементов, 
// а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст 
// в конец переданных элементов.

let ps = document.querySelectorAll('.p');

function addText(elems, text) {
    for (let elem of elems) {
        elem.textContent = elem.textContent + " - " + text;
    }
}

addText(ps, 'added text');


// Task 9
// Сделайте функцию appendElem, 
// которая первым параметром будет принимать ссылку на DOM объект, 
// в котором лежит тег ul, а вторым - текст. 
// Сделайте так, чтобы данная функция создавала новую li 
// с переданным текстом и добавляла ее в конец переданного тега ul.

const ul = document.querySelector('#ul');

function appendElem(elem, text) {
    let li = document.createElement('li');
    li.textContent = text;

    elem.appendChild(li);
}

appendElem(ul, 'I am a new item!');
appendElem(ul, 'I am a new item!');
appendElem(ul, 'I am a new item!');


// Task 10
// Дан массив и ul. С помощью функции appendElem, 
// созданной в предыдущей задаче, 
// запишите каждый элемент массива в отдельную li в этом ul.

let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const list = document.querySelector('#list');

function addItems(elem, arr) {
    for (let item of arr) {
        let li = document.createElement('li');
        li.textContent = item;

        elem.appendChild(li);
    }
}

addItems(list, arr );



