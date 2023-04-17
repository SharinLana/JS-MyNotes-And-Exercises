/*
Как вы знаете, теги могут содержать другие теги 
или, говоря в терминах JavaScript,
DOM элементы могут содержать другие DOM элементы. 

Кроме этого, однако, в них могут быть комментарии и обычный текст. 
Комментарии, тексты и DOM элементы объединяют одним названием - узлы.

Вам уже знакомы свойства 
firstElementChild, lastElementChild, 
nextElementSibling, previousElementSibling.
Эти свойства работают именно с DOM элементами, игнорируя остальные узлы. 
Как правило, именно это нам и требуется.

Однако, существуют также свойства 
firstChild, lastChild, nextSibling, previousSibling. 
Эти свойства работают аналогичным образом, однако, учитывая все узлы. 
*/



//Task 1: Пусть у нас есть див, содержащий в себе три узла.
//посмотрим, что содержится в свойствах 
//firstChild и firstElementChild
let elem = document.querySelector('#elem');
console.log(elem.firstChild); // #text
console.log(elem.firstElementChild); // <span>tag</span>


//Task 2: Напишите код, который покажет разницу 
//между lastChild и lastElementChild.
let elem2 = document.querySelector('#elem2');

console.log( elem2.firstChild ); //  #text
console.log( elem2.lastElementChild ); // <p>Paragraph</p>


//Task 3: Напишите код, 
//который покажет разницу между nextSibling и nextElementSibling.
let span = document.querySelector('#span');

console.log( span.nextSibling ); //  #text
console.log( span.nextElementSibling ); // <p>Paragraph</p>


//Task 4: Напишите код, 
//который покажет разницу между previousSibling и previousElementSibling.
console.log( span.previousSibling ); //  "par"
console.log( span.previousElementSibling ); // <h3>header</h3>



/*
Перебор циклом
в свойстве children содержатся все DOM элементы, 
являющиеся непосредственными потомками данного элемента. 

Существует аналогичное свойство childNodes, 
которое содержит в себе все потомки-узлы элемента.

console.log(elem.childNodes[0]);
console.log(elem.childNodes[1]);
console.log(elem.childNodes[2]);
*/

//Task 5: Дан див.
// Переберите циклом все узлы этого дива и выведите их в консоль.
let elem3 = document.querySelector('#elem3');

for (let elem of elem3.childNodes) {
    console.log(elem); 
}



/*

Название узлов
Все узлы имеют свойство nodeName. 

Для комментария оно содержит значение 'comment', 
для текстового узла - значение 'text', 
а для узла-элемента - имя тега в верхнем регистре. 

Получается, что nodeName для элементов аналогичен свойству tagName, 
но работает также и для других типов узлов.
*/


//Task 6: Переберите циклом все узлы этого дива и выведите в консоль их названия.
let elem4 = document.querySelector('#elem4');

for (let elem of elem4.childNodes) {
    console.log(elem.nodeName); // #text, B, #text, #comment, #text, B, #text, #comment, #text
}



/*
Тип узлов

Все узлы имеют свойство nodeType. 
Его значение числовое: 
1 - для элементов, 
3 - для текстовых узлов, 
8 - для комментариев. 

Остальные значения в настоящее время или малоиспользуемы, или устарели.
*/


//Task 7: Дан див
// Переберите циклом все узлы этого дива 
//и выведите в консоль только узлы-элементы и текстовые узлы

let elem5 = document.querySelector('#elem5');

for (let elem of elem5.childNodes) {
    if (elem.nodeType == 1) {
        console.log(elem)
    }
    else if (elem.nodeType == 3) {
        console.log(elem)
    }
}



/*
Текст узлов

Давайте теперь разберемся, как прочитать или изменить текст узлов. 

Для всех узлов работает свойство textContent. 

Для текстовых узлов и комментариев есть свойства nodeValue и data 
(они практически одинаковые, второе - короче, лучше пользоваться им).

Для элементов есть свойство innerHTML, 
прочитывающее текст вместе с тегами.

*/


//Task 8: Дан див.
// Переберите циклом все узлы этого дива 
//и выведите в консоль тексты всех узлов.
let elem6 = document.querySelector('#elem6');

for (let elem of elem6.childNodes) {
    console.log(elem.textContent); // hello, it's me, com, i was wondering, about, com
}


//Task 9: Дан див.
// Переберите циклом все узлы этого дива 
//и выведите в консоль тексты текстовых узлов и комментариев.
let elem7 = document.querySelector('#elem7');

for (let elem of elem7.childNodes) {
    console.log(elem.nodeValue); //
}


//Task 10: Дан див.
// Переберите циклом все узлы этого дива
// и каждому узлу в конец запишите его тип.
let elem8 = document.querySelector('#elem8');

for (let elem of elem8.childNodes) {
    elem.textContent = elem.textContent + ` - ${elem.nodeType}`;
}