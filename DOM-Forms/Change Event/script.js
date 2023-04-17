/*
Пусть у вас есть инпут и в нем есть текст. 
Если вы измените этот текст, то в этом случае и возникнет событие change.
*/


//Task 1
//Пусть у нас есть инпут
//Давайте по его изменению выведем в консоль его новое значение
let inp1 = document.querySelector('#inp1');

inp1.addEventListener('change', function() {
    console.log(inp1.value);
})


//Task 2
//Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let inp2 = document.querySelector('#inp2');
let par2 = document.querySelector('#par2');

inp2.addEventListener('change', function() {
    par2.textContent = inp2.value;
})


//Task 3
//Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
let checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', function() {
    console.log(checkbox.checked);
})


//Task 4
//Дан инпут. По его изменению проверьте, 
//количество символов в нем меньше 5-ти или нет. 
//Если меньше - покрасьте границу инпута в зеленый цвет, 
//а если больше - в красный.
let inp3 = document.querySelector('#inp3');

inp3.addEventListener('change', changeBorderColor);
function changeBorderColor() {
    if (inp3.value.length <= 5) {
        inp3.style.borderColor = 'green';
    }
    else {
        inp3.style.borderColor = 'red';
    }
}