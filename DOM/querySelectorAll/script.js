//Task: Пусть у нас даны абзацы с классом www.
//Давайте получим массив этих абзацев, переберем их циклом 
//и в цикле выведем тексты найденных абзацев в консоль
//и в конец текста каждого абзаца добавим восклицательный знак

let pars = document.querySelectorAll('.www');

for (let par of pars) {
    console.log(par.innerText);
    par.innerText = par.innerText + '!';
};


//Task: Даны абзацы и кнопка. 
//По нажатию на кнопку найдите все абзацы, переберите из циклом 
//и установите текст каждого абзаца в значение 'text'.
//По нажатию на кнопку запишите 
//в конец текста каждого абзаца его порядковый номер.

let paragraphs = document.querySelectorAll('.par');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = 'text - ' + (i + 1);
    }
});


//Task: Даны инпуты с числами, абзац и кнопка. 
//По нажатию на кнопку найдите сумму чисел из инпутов 
//и запишите эту сумму в текст абзаца.

let elems = document.querySelectorAll('.elem');
let button = document.querySelector('#inputBtn');
let p = document.querySelector('#paragraph');

button.addEventListener('click', doMath);

function doMath() {
    let sum = 0;
    for (let elem of elems) {
        sum += +elem.value;
    }

    p.innerText = sum;
}