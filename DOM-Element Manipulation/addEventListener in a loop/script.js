//Task 1
//Пусть у нас есть див-родитель
//Запустим цикл, который добавит в конец нашего дива 9 новых абзацев, 
//навесив на них обработчик клика

let parent = document.querySelector('#parent');
let counter = 0;

for (let i = 1; i <= 9; i++) {
    let par = document.createElement('p');
    par.textContent = counter;
    counter++;

    par.addEventListener('click', function() {
        console.log(this.textContent);
    });

    parent.appendChild(par);
}


//Task 2
//Дан див. Запустите цикл, который добавит в наш див 5 инпутов. 
//Пусть дан также абзац. С
//делайте так, чтобы каждый из новых инпутов по потери фокуса 
//записывал свой текст в абзац.

let div = document.querySelector('#div');
let par = document.querySelector('#par');

for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');

    input.addEventListener('blur', function() {
        let value = this.value;
        par.textContent = value;
    });

    div.appendChild(input)
}