/*
Обращение к таким атрибутам устроено не стандартным образом. 
Нельзя просто обратиться к одноименному свойству элемента, 
как мы делали это раньше, 
а следует использовать специальное свойство dataset, 
после которого через точку пишется имя атрибута без data-. 

Например, если наш атрибут называется data-test, 
то для обращения к нему мы будем писать elem.dataset.test, 
где elem - переменная с нашим элементом.

Пользовательские атрибуты могут содержать дефисы в своем названии.
Для обращения к таким атрибутам следует использовать camelCase:
alert(elem.dataset.myTest);

Обращение через методы
К пользовательским атрибутам можно также обращаться с помощью методов 
типа getAttribute, 
в этом случае следует писать полное название атрибута:
alert(elem.getAttribute('data-num')); 
*/

//Task 1: Выведем на экран значение его атрибута data-num.
//И присвоим этому атрибуту другое значение
let elem = document.querySelector('#elem');
console.log(elem.dataset.num); // 1000
elem.dataset.num = '3';
console.log(elem.dataset.num); // 3


//Task 2: Сделайте так, чтобы по клику на див в конец его текста 
//добавилось содержимое его атрибута data-text
let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', function() {
    elem2.innerText = elem2.innerText + ` ${elem2.dataset.text}`
});


//Task 3: Даны дивы, содержащие в атрибуте data-num свой порядковый номер
//Сделайте так, чтобы по клику на любой из дивов 
//ему в конец записывался его порядковый номер.
let divs = document.querySelectorAll('.container');

divs.forEach(div => {
    div.addEventListener('click', addText);
})

function addText() {
    this.innerText = this.innerText + `-${this.dataset.num}`
};


//Task 4: Дана кнопка. 
//Сделайте так, чтобы эта кнопка считала количество кликов по ней, 
//записывая их в какой-нибудь пользовательский атрибут. 
//Пусть по двойному клику на эту кнопку на экран выводится, 
//сколько кликов по этой кнопке было сделано.
let result = document.querySelector('.result');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    btn.dataset.num = +btn.dataset.num + 1;
});
btn.addEventListener('dblclick', function() {
    result.innerText = btn.dataset.num - 2; // -2 because we don't need the dblclick to be counted
});


//Task 5: Дан инпут.
//В этом инпуте атрибуты data-min и data-max содержат диапазон. 
//Сделайте так, чтобы по потери фокуса, 
//если количество введенных символов не попадает в этот диапазон, 
//выводилось сообщение об этом.
let input = document.querySelector('#input');

input.addEventListener('blur', function() {
    if (input.value.length < input.dataset.min || input.value.length > input.dataset.max) {
        alert(`The wrong number of symbols!`)
    }
});


//Task 6: Дан div.
//Сделайте так, чтобы по клику на див в конец его текста 
//добавлялась стоимость покупки, равная цене, умноженной на количество.
let container = document.querySelector('#div');

container.addEventListener('click', addPrice);

function addPrice() {
    let price = container.dataset.productPrice * container.dataset.productAmount;
    container.innerText = container.innerText + ` - $ ${price}`
};


//Tasl 7: Даны абзацы. 
//Переберите их циклом 
//и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. 
//Используйте метод setAttribute.
let pars = document.querySelectorAll('.par');

for (let i = 0; i < pars.length; i++) {
    pars[i].setAttribute('data-num', `${i + 1}`);
    pars[i].innerText = pars[i].innerText + `-${pars[i].dataset.num}`
}