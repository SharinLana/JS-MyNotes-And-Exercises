/*
С помощью объекта Event можно узнать, 
были ли нажаты в момент события клавиши Ctrl, Alt и Shift. 
Это делается с помощью свойств ctrlKey, altKey и shiftKey - 
они имеют значение true или false в зависимости от того, 
была ли нажата эта клавиша в момент события или нет.
*/

//Task 1
//Пусть у нас дана кнопка.
//По клику на кнопку будем выводить сообщение о том, 
//была ли нажата одна из клавиш Ctrl, Alt и Shift
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    if (event.ctrlKey) {
        console.log(`Ctrl is pressed`);
    }
    else if (event.altKey) {
        console.log(`Alt is pressed`);
    }
    else if (event.shiftKey) {
        console.log(`Shift is pressed`);
    }
});


//Task 2
//Дан элемент. Сделайте так, чтобы по клику на него 
//он красился в красный цвет, 
//но только если в момент клика нажата клавиша Alt.
let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
    if (event.altKey) {
        elem.style.color = 'red'; 
    }
});


//Task 3
//Пусть у вас есть список ul с тегами li
//Сделайте так, чтобы по клику на любую li, 
//в конец ее текста добавлялось число 1, если нажата клавиша Alt, 
//и число 2, если нажата клавиша Shift.
let ul = document.querySelector('#ul');
let items = ul.children;

for (let item of items) {
    item.addEventListener('click', addNumber);
}

function addNumber(event) {
    if (event.altKey) {
        this.textContent = this.textContent + ' - 1';
    }
    else if (event.shiftKey) {
        this.textContent = this.textContent + ' - 2'
    }
}