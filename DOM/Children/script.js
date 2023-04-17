/*
Свойство firstElementChild

Содержит первый дочерний элемент. 
Дочерними элементами считаются все теги, 
которые непосредственно расположены внутри блока. 
Если у элемента нет дочерних элементов - возвращается null.

Синтаксис: элемент.firstElementChild
*/

//Task 1: Получим содержимое первого потомка элемента
let div = document.querySelector('#parent');
console.log(div.firstElementChild.innerText);


//Task 2: А теперь у элемента нет дочерних элементов и поэтому выведется null
let div2 = document.querySelector('#parent2');
console.log(div2.firstElementChild);



/*
Свойство lastElementChild

Свойство хранит в себе последний дочерний элемент. 
Если у элемента нет дочерних элементов - возвращается null.

Синтаксис: элемент.lastElementChild
*/

//Task 3: Получим содержимое последнего потомка элемента
let div3 = document.querySelector('#parent3');
console.log(div3.lastElementChild.innerText);



/*
Свойство children

Свойство хранит в себе псевдомассив дочерних элементов. 
(Псевдомассив - это объект, который похож на массив. 
У него есть числовые свойства, как у массивов. 
А также свойство length.

Чаще всего встречается при работе с DOM - 
все свойства, и методы, которые возвращают несколько элементов 
обычно возвращают именно псевдомассив. 
Например, свойство children 
возвращает псевдомассив дочерних элементов.

Хоть псевдомассивы и похожи на массивы, 
все же это обычные объекты. У них нет свойств, 
и методов массивов, таких как forEach, join, slice и др.)

Синтаксис: элемент.children
*/

//Task 4: переберем в цикле всех потомков элемента и выведем их содержимое
let div4 = document.querySelector('#parent4');
let elems = div4.children;

for (let elem of elems) {
    console.log(elem.innerHTML);
}



//Task 5: Дан элемент #elem.
//Найдите первого потомка этого элемента 
//и сделайте его текст красного цвета.
let elem = document.querySelector('#elem');
elem.firstElementChild.style.color = 'red';


//Task 6: Найдите последнего потомка этого элемента 
//и сделайте его текст красного цвета.
elem.lastElementChild.style.color = 'red';


//Task 7: Найдите всех потомков этого элемента 
//и добавьте им в конец текст '!'.
let kids = elem.children;
for (let kid of kids) {
    kid.innerText = kid.innerText + "!";
}