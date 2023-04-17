/*
Атрибут disabled - для блокировки элементов.

Для того, чтобы установить такой атрибут, 
соответствующему свойству требуется присвоить значение true, 
а чтобы убрать - значение false.
*/

//Task 1:
//Пусть у нас есть заблокированый инпут in HTML.
//Давайте выведем значение атрибута disabled этого инпута
let elem = document.querySelector('#elem');
console.log(elem.disabled); // true

//А теперь давайте отблокируем его:
elem.disabled = false;
console.log(elem.disabled); // false


//Task 2: 
//Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
let elem2 = document.querySelector('#elem2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function() {
    elem2.disabled = true;
});


//Task 3
//Дан инпут и две кнопки. 
//Пусть нажатие на первую кнопку блокирует инпут, 
//а нажатие на вторую - отблокирует.
let elem3 = document.querySelector('#elem3');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn3.addEventListener('click', blockInput);
btn4.addEventListener('click', unblockInput);

function blockInput() {
    elem3.disabled = true;
}

function unblockInput() {
    elem3.disabled = false;
}


//Task 4
//Дан инпут и кнопка. По нажатию на кнопку узнайте, 
//заблокирован инпут или нет.
let elem4 = document.querySelector('#elem4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');

btn6.addEventListener('click', toggleBlock);

function toggleBlock() {
    elem4.disabled = !elem4.disabled;
}

btn5.addEventListener('click', function() {
    if (elem4.disabled === true) {
        console.log('Blocked')
    }
    else {
        console.log('Available')
    }
})