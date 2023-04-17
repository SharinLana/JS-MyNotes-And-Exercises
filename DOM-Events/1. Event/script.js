//Task 
//Давайте посмотрим, как получить объект Event. 
//Пусть у нас есть кнопка.
//Пусть по клику на эту кнопку выполняется некоторая функция.
//Внутри привязанной функции уже есть объект Event - 
//мы просто пока еще не знаем, как его получить. 

//Получается он следующем образом: 
//нужно при объявлении нашей функции 
//передать в нее параметром любую переменную 
//(как правило, event - но название может быть любым) 
//и в эту переменную браузер автоматически положит объект Event:

let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) { //here!!!
    console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
});



/*
Объект Event также содержит в себе 
тип произошедшего события: click, mouseover, etc 
*/
btn.addEventListener('mouseover', function(event) {
    console.log(event.type); // mouseover
});


//Task 2:
//Допишите код функции func так, 
//чтобы при клике на элемент 
//этот элемент красился в зеленый цвет, 
//а при двойном клике - в красный
let button = document.querySelector('#elem');

button.addEventListener('click', addColor);
button.addEventListener('dblclick', addColor);

function addColor(event) {
    if (event.type === 'click') {
        button.style.backgroundColor = 'green';
    }
    else if (event.type === 'dblclick') {
        button.style.backgroundColor = 'red';
    }
}