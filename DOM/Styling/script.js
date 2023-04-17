//Task 1: Сделаем этот элемент красного цвета

let elem = document.querySelector('#elem');
elem.style.color = 'red';

/*
Свойства, которые записываются через дефис, например font-size, 
преобразуются в camelCase. То есть font-size станет fontSize:
*/


//Task 2: Дан див и кнопка. 
//По клику на кнопку добавьте диву ширину, высоту и границу.
//установите диву размер шрифта в 20px, 
//а также верхнюю границу и фон.

let container = document.querySelector('.container');
let btn = document.querySelector('.btn');

btn.addEventListener('click', styling);

function styling() {
    container.style.width = '100px';
    container.style.height = '200px';
    container.style.border = '1px solid black';
    container.style.fontSize = '30px';
    container.style.borderTop = '5px solid red';
    container.style.backgroundColor = 'gray';
    
};


/*
Исключение
Свойство float является исключением, 
так как оно является специальным в JavaScript. 
Для него следует писать cssFloat:

elem.style.cssFloat = 'right';
*/

//Task 3: Дан список ul и кнопка. 
//По клику на кнопку добавьте тегам li свойство float в значении left.
let items = document.querySelectorAll('.item');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
    items.forEach(item => {
        item.style.cssFloat = 'left';
    })
})