//Task 1: Узнаем количество классов элемента:
let elem = document.querySelector('#elem');

let length = elem.classList.length;
console.log(length);


//Task 2: Выведем столбец классов элемента:
let classNames = elem.classList;
console.log(classNames); // ['www', 'ggg', 'zzz', value: 'www ggg zzz']

classNames.forEach(item => {
    document.write(item + `<br>`);
});


//Task 3: Дан элемент. Добавьте ему класс xxx.
elem.classList.add('xxx');
console.log(elem.className);



//Task 4: Дан элемент.  Удалите у него класс www и класс zzz.
elem.classList.remove('xxx', 'zzz');
console.log(elem.className);



//Task 5: Дан элемент. Проверьте наличие у него класса ggg.
console.log( elem.classList.contains('ggg') );



//Task 6: Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    elem.classList.toggle('www');
    console.log(elem.className);
});
