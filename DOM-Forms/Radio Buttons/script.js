/*
Чтобы несколько радиокнопок были группой, 
они должны иметь одинаковое значение атрибута name:
<input type="radio" name="elem">
<input type="radio" name="elem">
<input type="radio" name="elem">

А чтобы отличить на JavaScript, какая именно кнопка была выбрана, 
каждой радиокнопке в группе добавляют атрибуты value с различным значением:
<input type="radio" name="elem" value="1"> 
<input type="radio" name="elem" value="2"> 
<input type="radio" name="elem" value="3"> 

Чтобы сделать какую-нибудь радиокнопку отмеченной по умолчанию, 
ей необходимо задать атрибут checked:
<input type="radio" name="elem" value="1" checked> 
<input type="radio" name="elem" value="2"> 
<input type="radio" name="elem" value="3"> 

*/


//Task 1
//Пусть у нас есть группа радиокнопок, а также обычная кнопка
//Давайте сделаем так, чтобы по нажатию на кнопку 
//на экран вывелось value той радиокнопки, 
//которая отмечена в данный момент.
let radios = document.querySelectorAll('.radio');
let btn = document.querySelector('#btn');

btn.addEventListener('click', findCheckedRadio);

function findCheckedRadio() {
    for (let radio of radios) {
        if (radio.checked === true) {
            console.log(radio.value);
        }
    }
}


//Task 2
//Даны 3 радиокнопки, абзац и кнопка. 
//По клику на кнопку выведите в абзац value отмеченной радиокнопки.
let par = document.querySelector('#par');
let radioBtns = document.querySelectorAll('.radio-input');
let button = document.querySelector('#button');

button.addEventListener('click', getValue);
function getValue() {
    for (let radio of radioBtns) {
        if (radio.checked === true) {
            par.textContent = radio.value;
        }
    }
}
