let btn = document.querySelector('#btn');

btn.addEventListener('click', func);

function func() {
    alert(`!!!`);
    this.removeEventListener('click', func);
}


//Task: Дана ссылка. 
//По нажатию на эту ссылку добавьте в конец ее текста 
//содержимое ее атрибута href в круглых скобках. 
//Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

let link = document.querySelector('a');

link.addEventListener('click', addHREF);

function addHREF() {
    this.innerText = this.innerText + ' ' + this.href;
    this.removeEventListener('click', addHREF);
}


//Task: Дана кнопка, значением которой служит число 1. 
//Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
//После того, как значение кнопки достигнет 10 - отвяжите обработчик события, 
//чтобы кнопка больше не реагировала на нажатие.
let button = document.querySelector('#button');

button.addEventListener('click', startCounting);

function startCounting() {

    if (this.innerText >= 10) {
        this.removeEventListener('click', startCounting);
    }
    else {
        this.innerText = Number(this.innerText) + 1;
    }
    
}


/* Отвязывание обработчиков событий в цикле */

//Task: Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
//Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let elems = document.querySelectorAll('.elem');

for (let elem of elems) {
    elem.addEventListener('click', addExclamationPoint);
}

function addExclamationPoint() {
    this.innerText = this.innerText + `!`
    this.removeEventListener('click', addExclamationPoint);
}



/* Отвязывание анонимных функций в JavaScript 

Пусть мы хотим отвязать эту функцию от абзаца после клика по этому абзацу. 
Нас, однако, ждет проблема: у функции нет имени, 
а значит мы не сможем обратится к ней по этому имени, чтобы отвязать ее.
Для решения проблему нужно дать имя функции, 
сделав из нее именованное функциональное выражение. 
*/

let elems2 = document.querySelectorAll('.elem2');

for (let elem of elems2) {
    elem.addEventListener('click', function func() {
        this.innerText = this.innerText + `?`;
        this.removeEventListener('click', func);
    })
}