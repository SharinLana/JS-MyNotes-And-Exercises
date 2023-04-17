/*
Событие input возникает каждый раз 
при вводе нового символа в инпут или textarea. 
*/

//Task 1
//Давайте при каждом нажатии кнопки на клавиатуре 
//будем выводить в консоль текущее содержимое инпута
let input = document.querySelector('#elem');

input.addEventListener('input', function() {
    console.log(this.value)
})


//Task 2
// Дан инпут. Пусть в него вводится текст. 
//Как только длина текста достигнет 5-ти, 
//выведите на экран сообщение об этом.
let input2 = document.querySelector('#input');

input2.addEventListener('input', function() {
    if (input2.value.length >= 5) {
        alert('The length is more than 5')
    }
}) 


//Task 3
//Дан инпут. Пусть в него разрешено ввести 5 символов. 
//Дан также абзац. 
//По мере ввода символов в инпут пишите, 
//сколько еще символов можно ввести. 
//Когда количество символов превысит 5-ти, 
//то в абзац выводите то, на сколько символов превышена длина текста.
let inp = document.querySelector('#inp');
let par = document.querySelector('.par');
let counter = 5;

inp.addEventListener('input', getNotice);

function getNotice() {
    counter--;

    if (counter >= 0) {
        par.textContent = `${counter} symbol(s) left `;
    }
    
    else {
        par.textContent = `The limit exceeded for ${inp.value.length - 5} symbol(s)`;
    }
}
