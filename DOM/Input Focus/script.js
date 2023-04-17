/*
cобытие focus позволяет отловить получение фокуса инпутом, 
а событие blur - потерю
*/

let input = document.querySelector('#input');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');

//Task: Дан инпут. По получению фокуса запишите в него число 1, 
//а по потери фокуса - число 2.
input.addEventListener('focus', function() {
    console.log(input.value = 1);
});

input.addEventListener('blur', function() {
    console.log(input.value = 2);
});


//Task: Дан инпут. Пусть в него вводится число. 
//По потери фокуса выведите на экран квадрат этого числа.
input2.addEventListener('blur', function() {
    console.log(input2.value ** 2);
})


//Task: Дан инпут, в котором изначально есть какой-то текст. 
//По получению фокуса инпутом очистите содержимое этого инпута.
input3.addEventListener('focus', function() {
    input3.value = '';
})