/*
Чтобы сделать чекбокс отмеченным - 
ему нужно написать атрибут checked (true or false).

*/

//Task 1
//Давайте узнаем состояние нашего чекбокса
let elem = document.querySelector('#elem');
console.log(elem.checked); // false


//Task 2
//Дан чекбокс и две кнопки. 
//По нажатию на первую кнопку установите чекбокс в отмеченное состояние, 
//а по нажатию на вторую - в неотмеченное.
let checkbox = document.querySelector('#checkbox');
let checked = document.querySelector('#checked');
let unchecked = document.querySelector('#unchecked');

checked.addEventListener('click', function() {
    checkbox.checked = true;
});

unchecked.addEventListener('click', function() {
    checkbox.checked = false;
});


//Task 3
//Дан чекбокс, кнопка и абзац. 
//По нажатию на кнопку, если чекбокс отмечен, 
//выведите в абзац слово 'привет',
// а если чекбокс не отмечен, то слово 'пока'.
let checkbox2 = document.querySelector('#checkbox2');
let btn = document.querySelector('#btn');
let par = document.querySelector('#par');

btn.addEventListener('click', function() {
    if (checkbox2.checked === true) {
        par.textContent = `Hello!`;
    }
    else {
        par.textContent = `Good bye!`;
    }
})