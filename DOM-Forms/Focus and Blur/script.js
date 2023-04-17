//Task 1
//Даны инпут и кнопка. Давайте по нажатию на кнопку 
//установим фокус ввода на наш инпут
let input = document.querySelector('#inp');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    input.focus();
});


//Task 2
//Даны два инпута. 
//Сделайте так, чтобы после ввода двух символов 
//фокус ввода переходил ко второму инпуту, 
//а после ввода двух символов в этот инпут - фокус из него убирался.
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

inp1.addEventListener('input', function() {
    if (inp1.value.length >= 2) {
        inp1.blur();
        inp2.focus();
    }
});

inp2.addEventListener('input', function() {
    if (inp2.value.length >= 2) {
        inp2.blur();
    }
})