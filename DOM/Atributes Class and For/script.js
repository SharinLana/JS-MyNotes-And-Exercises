/*
При работе с атрибутами существует исключение - это атрибут class.
Это слово является специальным в JavaScript 
и поэтому мы не можем просто написать elem.class, 
чтобы считать значение атрибута class. 

Вместо этого следует писать elem.className.

Существуют и другие исключения, например, атрибут for. 
К нему следует обращаться через htmlFor.
*/

let elem = document.querySelector('#elem');
console.log(elem.className); // выведет 'aaa bbb'


//Task: Дан див. Дана также кнопка. 
//По нажатию на кнопку прочитайте и выведите на экран 
//значение атрибута class нашего дива.
let div = document.querySelector('#container');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log(div.className)
});


//Task: Дана также кнопка. 
//По нажатию на кнопку запишите в атрибут class нашего дива 
//какой-нибудь класс.

// btn.addEventListener('click', function() {
//     div.className = 'new_class';
//     console.log(div.className)
// });


//Task: Дан див с несколькими CSS классами, записанными через пробел
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов 
//нашего дива.

btn.addEventListener('click', function() {
    let arr = div.className.split(' ');
    console.log(arr);
})