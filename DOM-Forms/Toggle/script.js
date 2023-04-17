//Task:
//Дан чекбокс и кнопка. 
//Сделайте так, чтобы каждый клик по кнопке 
//приводил к смене состояния чекбокса.
let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    elem.checked = !elem.checked;
})