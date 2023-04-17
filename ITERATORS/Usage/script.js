// Task 1
// Даны абзацы и кнопка. 
// Сделайте так, чтобы по нажатию на кнопку 
// в конец каждого абзаца добавился его порядковый номер.

let btn = document.querySelector('button');
let pars = document.querySelectorAll('p');

btn.addEventListener('click', function() {
    let entries = pars.entries();
    for (let [num, elem] of entries) {
        elem.textContent = elem.textContent + ' - ' + num;
    }
})