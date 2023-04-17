// Task 1
// Давайте сделаем так, чтобы по клику на каждый абзац 
// ему в конец записывался его порядковый номер в списке абзацев. 
// Решим задачу через Map.

let pars = document.querySelectorAll('p');
let map = new Map;
let i = 1;

for (let par of pars) {
    map.set(par, i++);
    par.addEventListener('click', function() {
        this.textContent = this.textContent + '-' + map.get(this);
    })
}


// Task 2
// Даны инпуты. 
// Переберите эти инпуты циклом и создайте коллекцию Map, 
// ключами в которой будут инпуты, 
// а значением - их порядковый номер на странице. 
// Сделайте так, чтобы по клику на любой инпут 
// ему в value записывался его порядковый номер.

let inputs = document.querySelectorAll('.input');
let mapInputs = new Map;
let counter = 1;

for (let input of inputs) {
    mapInputs.set(input, counter++);

    input.addEventListener('click', function() {
        this.value = mapInputs.get(this);
    })
}


// Task 3
// Даны инпуты. В каждый инпут можно ввести число. 
// Пусть по нажатию на Enter инпут запоминает введенное число. 
// Сделайте так, чтобы по потери фокуса в инпуте 
// в консоль выводился массив всех введенных ранее в инпут чисел.

let elems = document.querySelectorAll('.inp');
let mapElems = new Map;

for (let elem of elems) {
    let arr = [];
    mapElems.set(elem, arr);

    elem.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            arr.push(this.value);
        }
    });

    elem.addEventListener('blur', function() {
        console.log(mapElems.get(this));
    })
}