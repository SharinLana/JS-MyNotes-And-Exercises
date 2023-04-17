// Task 1
// Давайте теперь сделаем так, чтобы при редактировании 
// инпут появлялся в самом абзаце - вместо текста этого абзаца. 
// Пусть затем при окончании редактирования инпут будет убираться, 
// а вместо него опять появляться текст абзаца

let par = document.querySelector('#elem');

par.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = par.textContent;
    par.textContent = '';
    par.appendChild(input);

    input.addEventListener('change', function() {
        par.textContent = input.value;
        par.addEventListener('click', func);
    })
    par.removeEventListener('click', func);
});


// Task 2
// Пусть теперь у нас есть не один абзац, а много
// Давайте сделаем так, чтобы по клику на любой абзац 
// в нем появлялся инпут для редактирование

let pars = document.querySelectorAll('.par');

for (let p of pars) {
    p.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = p.textContent;
        p.textContent = '';
        p.appendChild(input);

        input.addEventListener('change', function() {
            p.textContent = input.value;
            p.addEventListener('click', func);
        })
        p.removeEventListener('click', func);
    })
}


// Task 3
// Дан тег ul. Сделайте так, чтобы по клику на любую li 
// в ней появлялся инпут, 
// с помощью которого можно будет поредатировать текст этой li
let items = document.querySelectorAll('li');

for (let li of items) {
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent;
        li.textContent = '';
        li.appendChild(input);

        input.addEventListener('change', function() {
            li.textContent = input.value;
            li.addEventListener('click', func);
        })
        li.removeEventListener('click', func);
    })
}


// Task 4
// Дана HTML таблица. 
// Сделайте так, чтобы по клику на любую ячейку 
// в ней появлялся инпут для редактирования текста этой ячейки.
let rows = document.querySelectorAll('td');

for (let row of rows) {
    row.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = row.textContent;
        row.textContent = '';
        row.appendChild(input);

        input.addEventListener('change', function() {
            row.textContent = input.value;
            row.addEventListener('click', func);
        })
        row.removeEventListener('click', func);
    })
}