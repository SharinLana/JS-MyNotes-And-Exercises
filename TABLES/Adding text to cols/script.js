/*

можно просто получить все td 
и перебрать их циклом, выполняя нужную операцию.

*/
let table = document.querySelector('#table');
let tds = document.querySelectorAll('#table td');

for (let td of tds) {
	td.textContent = '!';
}


//Task 2
//Пусть дана некоторая HTML таблица с числами и кнопка. 
//По нажатию на кнопку 
//увеличьте число в каждой ячейки таблицы в два раза.
let tbl = document.querySelector('#tbl');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let tds = document.querySelectorAll('#tbl td');

    for (let td of tds) {
        td.textContent = +td.textContent * 2;
    }
});


// Task 3
// Дан следующий массив с работниками.
// Выведите этих работников в HTML таблице
// Добавьте ячейкам созданной таблицы возможность редактирования
// Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let t = document.querySelector('#t');

for (let employee of employees) {
    let tr = document.createElement('tr');

    let remove = document.createElement('a');
        remove.href = '#';
        remove.textContent = 'Remove';

    for (let key in employee) {
        let td = document.createElement('td');
        td.textContent = key + ": " + employee[key];

        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.textContent;
            td.textContent = '';

            input.addEventListener('change', function() {
                td.textContent = input.value;
                td.addEventListener('click', func);
            })
            td.appendChild(input);
            td.removeEventListener('click', func)
        })
        tr.appendChild(td);
        
    }

    remove.addEventListener('click', function() {
        tr.remove();
    })
   

    t.appendChild(tr);
    tr.appendChild(remove)
}