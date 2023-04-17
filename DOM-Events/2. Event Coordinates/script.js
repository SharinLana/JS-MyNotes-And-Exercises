/*
Давайте посмотрим разницу между 
clientX/clientY   и   pageX/pageY.

значения clientX и clientY отсчитываются 
относительно окна (window), а не документа (document).

pageX и pageY содержат координаты события с учетом прокрутки.
*/


/*
Свойство event.clientX
Свойство event.clientX содержит в себе 
координаты курсора мыши по оси X.

Синтаксис:
event.clientX;


Свойство event.clientY
Свойство event.clientY содержит в себе 
координаты курсора мыши по оси Y.

Синтаксис:
event.clientY;
*/

//Task 1
//При движении мыши по странице 
//будем выводить ее координаты 
//относительно окна браузера (clientX и clientY):
let par = document.querySelector('#par');

document.addEventListener('mousemove', function(event) {
    par.textContent = event.clientX + ' : ' + event.clientY;
});



/*
Свойство event.pageX
координаты курсора мыши по оси X.

Синтаксис
event.pageX


Свойство event.pageY 
координаты курсора мыши по оси Y.

Синтаксис:
event.pageY
*/


//Task 2
//При движении мыши по странице будем выводить ее координаты 
//относительно окна браузера (pageX и pageY):

let par2 = document.querySelector('#par2');

document.addEventListener('mousemove', function(event) {
    par2.textContent = event.pageX + ' : ' + event.pageY;
})