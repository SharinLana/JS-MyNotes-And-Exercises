/*
Метод getAttribute

Метод getAttribute считывает значение заданного атрибута у тега.

Синтаксис: элемент.getAttribute(имя атрибута);

атрибут, полученный через getAttribute, 
хранит исходное значение даже после того, 
как пользователь заполнил поле и свойство изменилось.
Эту особенность можно использовать. 
Например, можно взять изначальное значение из атрибута 
и сравнить со свойством, чтобы узнать, изменилось ли значение. 
А при необходимости и перезаписать свойство атрибутом, отменив изменения.
*/

let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);


let elem2 = document.querySelector('#elem2');
let className = elem2.getAttribute('class');
console.log(className);



/*
Метод setAttribute

Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.

Синтаксис: элемент.setAttribute(имя атрибута, новое значение)
*/

let elem3 = document.querySelector('#elem3');
console.log(elem3.value); //abcd
elem3.setAttribute('value', '!!!');
console.log(elem3.value); //!!!

let elem4 = document.querySelector('#elem4');
console.log(elem4.value); // (empty)
elem4.setAttribute('value', 'text');
console.log(elem4.value); //text

let elem5 = document.querySelector('#elem5');
elem5.setAttribute('class', 'valid'); 
console.log(elem5.className); // valid



/*
Метод removeAttribute

Метод removeAttribute удаляет заданный атрибут у какого-либо тега.

Синтаксис: элемент.removeAttribute(имя атрибута)
*/

let elem6 = document.querySelector('#elem6');
elem6.removeAttribute('value');
console.log(elem6.value); // (empty)


/*
Метод hasAttribute

Метод hasAttribute проверяет наличие заданного атрибута у элемента. 
Если атрибут есть - выведет true, если нет - выведет false.

Синтаксис: элемент.hasAttribute(имя атрибута)
*/

let elem7 = document.querySelector('#elem7');
console.log(elem7.hasAttribute('value')); // true

let elem8 = document.querySelector('#elem8');
console.log(elem8.hasAttribute('value')); // false


//Task 1: Дан инпут с каким-то начальным значением. Дана также кнопка. 
//По нажатию на кнопку определите, было ли изменено пользователем 
//начальное значение инпута.
let input = document.querySelector('#input');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {

    if (input.getAttribute('value') !== input.value) {
        console.log(`The value has been changed`);
    }
    else {
        console.log(`The value stays the same`)
    }
});


/*
Изменение атрибута
А вот изменение атрибута обновляет свойство:
*/

elem.setAttribute('value', 'new'); // поменяли атрибут

let value2 = elem.value;
console.log(value2); // выведет 'new'


//Task 2: Дан инпут с каким-то начальным значением. 
//Пусть пользователь меняет это значение. 
//Сделайте рядом с инпутом кнопку, 
//по нажатию на которую value инпута вернется в изначальное значение.

let input2 = document.querySelector('#input2');
let btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', getBackToTheInitialValue);

function getBackToTheInitialValue() {
    input2.value = input2.getAttribute('value');
}

