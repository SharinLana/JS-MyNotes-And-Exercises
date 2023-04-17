/*

Псевдомассивы ведут себя похожим на обычные массивы образом, 
но не поддерживают все возможности массивов.

Что общего

К элементам псевдомассива, как и к элементам обычного массива, 
можно обратиться по их номеру:
console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);

Можно также узнать количество элементов с помощью свойства length:
console.log(elems.length);

Можно перебрать элементы псевдомассива циклом:
for (let elem of elems) {
	console.log(elem);
}

В чем отличия
Хотя псевдомассивы и похожи на массивы, но все же это обычные объекты. 
У них нет свойств и методов массивов, таких как forEach, join, slice и других:
console.log(elems.slice(1, 3)); // будет ошибка


Как отличить

Существует специальный метод Array.isArray, 
который возвращает true, если параметром ему передан массив, 
и false в остальных случаях

*/

let test1 = [1, 2, 3];
console.log(Array.isArray(test1)); // выведет true

let elems = document.querySelectorAll('p');
console.log(Array.isArray(elems)); // выведет false


/*

Преобразование псевдомассивов 

*/

// Task 1
// Пусть у нас есть псевдомассив абзацев
// Давайте преобразуем его в обычный массив.

// Способ первый
// можно перебрать псевдомассив циклом, 
// формируя в этом цикле новый массив

let arr = [];

for (let elem of elems) {
	arr.push(elem);
}

// Способ второй
// Можно воспользоваться деструктуризацией:
let arr2 = [...elems];


// Способ третий
// Можно воспользоваться методом Array.from:
let arr3 = Array.from(elems);


// Task 2
// Даны абзацы
// С помощью метода slice получите все абзацы, кроме первого и последнего.
let arr4 = [...elems];

function func(arr) {
    arr = arr.slice(1, arr.length - 1);
    return arr;
}

console.log(func(arr4)); 



/*
Типы псевдомассивов.

через querySelectorAll мы получим коллекцию NodeList;

А через getElementsByTagName мы получим коллекцию HTMLCollection.

Разница между двумя типами псевдомассивов 
в различном поведении при изменении DOM элементов. 

Пусть, к примеру, мы получили коллекцию абзацев 
в виде HTMLCollection и в виде NodeList. 
Затем мы создадим и добавим еще один абзац в наш DOM. 
В этом случае он автоматически появится в HTMLCollection, 
но коллекция NodeList останется без изменений:
*/
let div = document.querySelector('div');
let parags = document.querySelectorAll('p'); // NodeList(5) [p, p, p, p, p]
let pars = document.getElementsByTagName('p'); // HTMLCollection(5) [p, p, p, p, p]

let newPar = document.createElement('p');
div.appendChild(newPar);

console.log(parags) ; // NodeList(5) [p, p, p, p, p]
console.log(pars); // HTMLCollection(6) [p, p, p, p, p, p]


// Task 3
// Проверьте, какой тип коллекции будет в свойстве childNodes и в свойстве children.
console.log(div.childNodes); // NodeList(12) [text, p, text, p, text, p, text, p, text, p, text, p]
console.log(div.children); // HTMLCollection(6) [p, p, p, p, p, p]
