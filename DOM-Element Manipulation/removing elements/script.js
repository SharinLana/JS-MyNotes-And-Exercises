/*
Давайте теперь научимся удалять элементы. 
Для этого нужно использовать метод remove

NOTE: ths method does not change the length of the array/object
*/

//Task 1
//Пусть у нас есть абзацы
//Давайте сделаем так, чтобы любой абзац удалялся по клику на нем
let pars = document.querySelectorAll('p');

for (let par of pars) {
    par.addEventListener('click', function() {
        par.remove();
    });
}

console.log(pars.length); //always remains 5


//Task 2
//Сделайте так, чтобы любая li удалялась по клику на нее.
let items = document.querySelectorAll('.li');

for (let li of items) {
    li.addEventListener('click', function() {
        li.remove();
    });
}


//Task 3
//Сделайте так, чтобы по каждому клику на кнопку 
//удалялся последний элемент из #parent
let parent = document.getElementById('parent');
let listItems = parent.getElementsByTagName('li'); // do not use querySelector beause we need to get the HTMLCollection, not a NodeList of elements!
let btn = document.querySelector('#button');
console.log(listItems); // it is important to get the array prototype as an HTMLCollection, NOT NodeList
//because the remove() method doesn't change the length of the NodeList
//but it does change the length of the HTMLCollection array prototype 

btn.addEventListener('click', function() {
    if(listItems.length === 0) return; // if there is no items in listItems then quit the function (don't attempt to remove what doesn't exist)

    let last = listItems[listItems.length - 1];
    last.remove();
});


//Task 4
//Пусть теперь элементов в родителе изначально нет
//Давайте в цикле создадим 9 новых абзацев, 
//при этом сделаем так, чтобы любой абзац удалялся по клику на нем

let cont = document.querySelector('#cont');

for (let i = 1; i <= 9; i++) {
    let p = document.createElement('p');
    p.textContent = i;

    p.addEventListener('click', function() {
        this.remove();
    })

    cont.appendChild(p);
}


// Task 5
//Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. 
//Сделайте так, чтобы любая li удалялась по клику на нее
let list = document.querySelector('#list');
let button = document.querySelector('#btn');
let lis = document.querySelectorAll('.listItem');
let counter = 3;

button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.className = 'listItem';
    li.textContent = counter + 1;
    counter++;

    li.addEventListener('click', deleteLi)

    list.appendChild(li);
});

for (let li of lis) {
    li.addEventListener('click', deleteLi)
}

function deleteLi() {
    let items = document.querySelectorAll('li');

    for (let item of items) {
        item.addEventListener('click', function() {
            item.remove()
        })
    }
}


// Task 6
// Пусть у нас абзац. 
// Давайте рядом с ним сделаем ссылку, 
// с помощью которой этот абзац можно будет удалить.
// Обратите внимание на то, что в атрибуте href ссылки стоит #. 
// Если эту решетку убрать - мы получим переход по ссылке и, 
// как следствие, обновление страницы.


let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function() {
    elem.remove();
});


//If there's no # in the a tag, then you should use preventDefault()
// to avoid the page re-loading;

remove.addEventListener('click', function(e) {
    e.preventDefault();
    elem.remove();
});


//Task 7
// Пусть теперь у нас есть много абзацев
// Давайте сделаем так, чтобы каждому абзацу в конец добавлялась ссылка на его удаление
let parParent = document.querySelector('#parParent');
let parags = parParent.querySelectorAll('p');

for (let par of parags) {
    let link = document.createElement('a');
    link.href = '';
    link.textContent = ' remove';

    par.appendChild(link);

    link.addEventListener('click', function(e) {
        e.preventDefault();
        par.remove();
    })
}


// Task 8
// Дан тег ul. 
// Добавьте в конец каждого тега li ссылку на удаления этого li из списка.

let listParent = document.querySelector('#listParent');
let bullets = listParent.querySelectorAll('li');

for (let bullet of bullets) {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = ' delete';
    bullet.appendChild(a);

    a.addEventListener('click', function() {
        bullet.remove();
    })
}


// Task 9
// Дана HTML таблица. 
// Добавьте в нее еще одну колонку, 
// в которой для каждого ряда таблицы 
// будет стоять ссылка на удаление этого ряда

let table = document.querySelector('#table');
let trs = table.querySelectorAll('tr');

for (let tr of trs) {
    let remove = document.createElement('td');
    remove.textContent = 'REMOVE';

    tr.appendChild(remove);

    remove.addEventListener('click', function() {
        tr.remove();
    })
}


//Task 10
// Пусть у нас есть некоторый набор абзацев
// Давайте для этих абзацев сделаем так, 
// чтобы можно было редактировать текст каждого абзаца 
// и при этом в конце каждого абзаца стояла ссылка на удаление.
let lines = document.querySelectorAll('p');
let spans = document.querySelectorAll('span');

for (let par of lines) {
    let remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = ' remove';

    remove.addEventListener('click', function() {
        par.remove();
    })
    
    par.appendChild(remove);
}

for (let span of spans) {
    span.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = span.textContent;
            span.textContent = '';
            span.appendChild(input);
    
            input.addEventListener('change', function() {
                span.textContent = input.value;
                span.addEventListener('click', func);
            })
            span.removeEventListener('click', func);
  
    })
}


// Task 11
// Пусть теперь изначально тегов span нет
// Оберните сначала текст абзаца в теги span, 
// добавьте к этим тегам возможность редактирования, 
// а затем добавьте в конец каждого абзаца ссылку на удаление.

let paragraphs = document.querySelectorAll('p');

for (let par of paragraphs) {
    let span = document.createElement('span');
    span.textContent = par.textContent;
    par.textContent = '';

    let remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = ' remove';

    remove.addEventListener('click', function() {
        par.remove();
    })

    span.addEventListener('click', function func() {
        let input = document.createElement('input'); 
        input.value = span.textContent;
        span.textContent = '';

        input.addEventListener('change', function() {
            span.textContent = input.value;
            span.addEventListener('click', func)
        })
    
        span.appendChild(input);
        span.removeEventListener('click', func);
    })
    
    par.appendChild(span);
    par.appendChild(remove);
}


// Task 12
// Пусть теперь у нас есть много абзацев и у каждого своя кнопка для сокрытия
// Сделаем так, чтобы по клику на кнопку 
// скрывался или показывался соответствующий ей абзац

let btns = document.querySelectorAll('button')

for (let btn of btns) {

    btn.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    })
}


// Task 13
// Расставлять id и data-атрибуты не очень удобно. 
// Давайте сделаем так, чтобы связь была по порядковому номеру:
// пусть первая кнопка скрывает первый абзац, 
// вторая кнопка - второй и так далее

let buttons = document.querySelectorAll('.btn');
let pps = document.querySelectorAll('.pp');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        pps[i].classList.toggle('hidden');
    })
}

// Как можно увидеть, абзац, связанный с кнопкой, 
// является ее соседом слева. Можно это использовать в качестве связи

for (let button of buttons) {
    button.addEventListener('click', function() {
        this.previousElementSibling.classList.toggle('hidden');
    })
}
