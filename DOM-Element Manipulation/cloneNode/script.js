/*
Клонировать элемент можно с помощью метода cloneNode. 

В этот метод нужно передавать параметром true либо false. 
Если передан true, 
то элемент клонируется полностью, 
вместе со всем атрибутами и дочерними элементами, 

а если false - только сам элемент.
*/

//Task 1
//Сделаем копию блока с классом elem 
//и вставим его в конец блока #parent

let parent = document.querySelector('#parent');
let elem = document.querySelector('.elem');

let clone = elem.cloneNode(true);
parent.appendChild(clone);


//Task 2
//Дан инпут. Дана кнопка. 
//По нажатию на кнопку клонируйте этот инпут.
let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let div = document.querySelector('.div');

btn.addEventListener('click', function() {
    let clone = input.cloneNode(false);
    div.insertBefore(clone, input)
});




