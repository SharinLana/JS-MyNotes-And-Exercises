/*
Отмена действия по умолчанию 
производится с помощью объекта Event. 
Для этого у него есть специальный метод preventDefault(), 
который следует вызвать в любом месте обработчика события.
*/

let ancor = document.querySelector('#ancor');

ancor.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(`This link is unavailable`);
});


//Task 2
//Даны ссылки. Сделайте так, чтобы по клику на ссылку 
//ей в конец записывался ее href, 
//а перехода по ссылке не происходило.
let links = document.querySelectorAll('.ancor');

for (let link of links) {
    link.addEventListener('click', prevent);
}

function prevent(event) {
    event.preventDefault();
    this.innerHTML = this.innerHTML + ` - ${this.href}`;
}


//Task 3
//Даны два инпута, абзац и ссылка. 
//Пусть в инпуты вводятся числа. 
//Сделайте так, чтобы по клику на ссылку 
//в абзац записалась сумма введенных чисел.
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let par = document.querySelector('#par');
let link = document.querySelector('#link');

link.addEventListener('click', function(event) {
    event.preventDefault();

    par.textContent = +inp1.value + +inp2.value;
})