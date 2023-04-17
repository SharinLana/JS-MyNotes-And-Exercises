// Task 1
// Добавьте в конец каждого абзаца ссылку, 
// по клику на которую текст абзаца будет перечеркиваться 
// (а ссылка - нет)
//и чтобы после нажатия на ссылку эта ссылка удалялась из абзаца 
//(а текст абзаца становился перечеркнутым).

let pars = document.querySelectorAll('.ppp');

for (let par of pars) {
    let link = document.createElement('a');
    link.href = '#';
    link.textContent = ' cross the text';

    let span = document.createElement('span'); 
    span.textContent = par.textContent;
    par.textContent = '';

    link.addEventListener('click', function() {
        span.style.textDecoration = 'line-through';
        this.remove();
    })

    par.appendChild(span);
    par.appendChild(link);
}



// Task 2
// Дана некоторая HTML таблица. 
// Добавьте в эту таблицу еще одну колонку со ссылкой. 
// По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.

// Модифицируйте задачу так, 
// чтобы первое нажатие по ссылке красило ряд в зеленый фон, 
// а второе нажатие отменяло это действие

let rows = document.querySelectorAll('tr');

for (let row of rows) {
    let td = document.createElement('td');

    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'change color';

    link.addEventListener('click', function() {
        row.classList.toggle('changed');
        link.classList.toggle('changed');
    })
    
    row.appendChild(td);
    row.appendChild(link);
}


// Task 3
// Дана HTML список ul. 
// Сделайте так, чтобы по нажатию на любой пункт списка 
// он активировался красным фоном
// и чтобы по нажатию на активированный пункт списка активация с него снималась.

let lis = document.querySelectorAll('li');

for (let li of lis) {
    li.addEventListener('click', function() {
        li.classList.toggle('active');
    })
}


// Task 4
// Давайте теперь сделаем так, 
// чтобы происходило чередование цветов: 
// пусть первая ячейка красится в красный, вторая - в зеленый, 
// третья - опять в красный и так далее.
let tableDatas = document.querySelectorAll('.tableData');
let color = 'color1';

for (let td of tableDatas) {
    td.addEventListener('click', function() {
        if (color === 'color1') {
            color = 'color2';
        }
        else {
            color = 'color1';
        }
        td.classList.add(color);
    })
}


// Task 5
// Чередование многих цветов из массива
let tds = document.querySelectorAll('td');
let colors = ['color1', 'color2', 'color3'];
let i = 0;

for (let td of tds) {
    td.addEventListener('click', function() {
        this.classList.add(colors[i]);
        i++;

        if (i == colors.length) {
            i = 0;
        }
    });
}