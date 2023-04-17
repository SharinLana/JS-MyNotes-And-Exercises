/*
Свойство previousElementSibling

Свойство содержит предыдущий элемент, 
находящийся в этом же родителе. 
Если такого элемента нет - возвращается null.

Синтаксис: элемент.previousElementSibling
*/

//Task 1: Дан элемент #elem. Давайте выведем текст его соседа сверху
let elem = document.querySelector('#elem');
let sibling = elem.previousElementSibling.innerText;
console.log(sibling);


//Task 2: Если соседа сверху нет 
//или он расположен не в родителе нашего элемента, 
//также возвращается null
let elem2 = document.querySelector('#elem2');
let sibling2 = elem2.previousElementSibling;
console.log(sibling2);



/*
Свойство nextElementSibling
Свойство содержит следующий элемент, 
находящийся в этом же родителе. 
Если такого элемента нет - возвращается null.

Синтаксис: элемент.nextElementSibling

*/

//Task 3: Дан элемент #elem. 
//Давайте выведем текст его соседа снизу
let elem3 = document.querySelector('#elem3');
let belowSibling = elem3.nextElementSibling.innerText;
console.log(belowSibling);


//Task 4: Дан элемент.
//Найдите его соседа сверху и добавьте ему в конец текст '!'.
let elem4 = document.querySelector('#elem4');
let upperSibling = elem4.previousElementSibling;
upperSibling.innerText = upperSibling.innerText + "!";


//Task 5: Дан элемент.
//Найдите его соседа снизу и добавьте ему в конец текст '!'.
let elem5 = document.querySelector('#elem5');
let lowSibling = elem5.nextElementSibling;
lowSibling.innerText = lowSibling.innerText + "!";


//Task 6: Дан элемент.
//Найдите его следующий элемент за соседним и добавьте ему в конец текст '!'.
let elem6 = document.querySelector('#elem6');
let nextSibling = elem6.nextElementSibling;
let lastSibling = nextSibling.nextElementSibling;
lastSibling.innerText = lastSibling.innerText + "!";

//Alternative
let ul = document.querySelector('.cont');
ul.lastElementChild.innerText = ul.lastElementChild.innerText + "?"


//Task 7: Дан элемент.
//Поменяйте местами текст его соседа сверху и текст его соседа снизу.
let elem7 = document.querySelector('#elem7');
let firstSibling = elem7.previousElementSibling;
let secondSibling = elem7.nextElementSibling;
let buff = 'text4';
secondSibling.innerText = firstSibling.innerText;
firstSibling.innerText = buff;
