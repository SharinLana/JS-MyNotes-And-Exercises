let table = document.querySelector('#table');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let trs = document.querySelectorAll('tr');
    let tr = document.createElement('tr');

    for (let i = 1; i <= trs.length + 1; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table.appendChild(tr);
});


// Task 2
// Давайте теперь сделаем функцию createTable, 
// которая будет будет создавать таблицу заданного размера 
// и добавлять ее в конец заданного элемента.
// Пусть первым параметром наша функция принимает количество рядов, 
// вторым параметром - количество колонок, 
// а третьим - ссылку на DOM элемент, 
// внутри которого будет создаваться наша таблица.

let div = document.querySelector('#elem');

let tbl = (num1, num2, elem) => {
    for (let i = 1; i <= num1; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= num2; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        elem.appendChild(tr);
    } 
}

tbl(3, 4, div);


// Task 3
// С помощью функции создайте новую таблицу, 
// а затем вставьте ее в конец дива.

let parent = document.querySelector('#parent');
addTable(4, 6, parent);

function addTable(rows, cols, elem) {
    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= cols; j++) {
            let td = document.createElement('td');
            td.style.borderColor = 'green';

            tr.appendChild(td);
        }

        elem.appendChild(tr);
    }
}


// Task 4
// создание таблицы из массива
// Давайте сделаем функцию createTableByArr, 
// которая параметром будет принимать двухмерный массив и строить на его основе таблицу.
let container = document.querySelector('#div');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function createTableByArr(item, arr) {

    for (let elem of arr) {
        let tr = document.createElement('tr');

        for (let subElem of elem) {
            let td = document.createElement('td');
            td.textContent = subElem;

            tr.appendChild(td);
        }


        item.appendChild(tr);
    }
}

createTableByArr(container, arr)

