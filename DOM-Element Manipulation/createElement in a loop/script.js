//Task 1
//Пусть у нас есть див-родитель
//Давайте запустим цикл, 
//который добавит в конец нашего дива 9 новых абзацев 
//Сделайте так, чтобы текстом каждой li был ее порядковый номер
//And let's add an eventListener to each new child

let parent = document.querySelector('#parent');
let counter = 1;

for (let i = 1; i <= 9; i++) {
    let par = document.createElement('p');
    par.textContent = counter;
    counter++;

    par.addEventListener('click', function() {
        console.log(this.textContent)
    })

    parent.appendChild(par);
}


//Task 2
//Дан пустой ul. Запустите цикл, 
//который вставит в него 10 тегов li. 
//Сделайте так, чтобы текстом каждой li был ее index.

let ul = document.querySelector('#ul');
let num = 0;

for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = num;
    num++;

    ul.appendChild(li);
}