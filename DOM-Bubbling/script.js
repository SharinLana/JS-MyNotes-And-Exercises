/*
Всплытие событий

когда вы кликаете на самый внутренний блок, 
событие клика возникает сначала в нем, 
затем срабатывает в его родителе, 
в родителе его родителя и так далее, пока не дойдет до самого верха.

Всплывать могут не все события.
*/

//Task 1
//есть несколько вложенных друг в друга блоков
//Нажмите теперь на самый внутренний красный блок - 
//и вы увидите, как событие сначала сработает в красном блоке, 
//потом в голубом, потом в зеленом. 
//И это логично, ведь кликая на внутренний блок, 
//вы одновременно кликаете на все внешние.

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function() {
    console.log(`green`);
});

elem2.addEventListener('click', function() {
    console.log(`violet`);
});

elem3.addEventListener('click', function() {
    console.log(`coral`);
});


//Task 2
// Навешайте на див обработчик клика. 
//В этом обработчике определите, в каком из тегов сработало событие.
let div = document.querySelector('#cont');
let ul = document.querySelector('#ul');
let items = ul.children;
for (let item of items) {
    item.addEventListener('click', function(event) {
        if (event.target.matches('li')) {
            this.textContent = this.textContent + `!`
        }
    })
}


div.addEventListener('click', function(event) {
    if (event.target.matches('div')) {
        console.log(`div was clicked`);
    }
    else if (event.target.matches('ul')) {
        let newLi = document.createElement('li');
        newLi.textContent = 'new li'
        ul.appendChild(newLi);
    }
});



/*
Прекращение всплытия событий

Для этого в коде элемента 
следует вызвать метод stopPropagation 
объекта Event.
 */
elem1.addEventListener('click', function() {
    console.log(`green`);
});

elem2.addEventListener('click', function(event) {
    console.log(`violet`);
    event.stopPropagation();
});

elem3.addEventListener('click', function() {
    console.log(`coral`);
});


/*
Если у элемента есть несколько обработчиков на одно событие, 
то даже при прекращении всплытия все они будут выполнены. 

То есть, stopPropagation препятствует продвижению события дальше, 
но на текущем элементе все обработчики отработают.
*/

elem1.addEventListener('click', function() {
	console.log('зеленый');
});
elem2.addEventListener('click', function(event) {
	console.log('голубой - первый обработчик');
	event.stopPropagation(); // остановим всплытие
});
elem2.addEventListener('click', function() {
	console.log('голубой - второй обработчик'); 
		// все равно сработает 
});
elem3.addEventListener('click', function() {
	console.log('красный');
});


/*
Немедленное прекращение всплытия

Для того, чтобы полностью остановить обработку, 
современные браузеры поддерживают метод stopImmediatePropagation. 
Он не только предотвращает всплытие, 
но и останавливает обработку событий на текущем элементе.

*/
elem1.addEventListener('click', function() {
	console.log('зеленый');
});
elem2.addEventListener('click', function(event) {
	console.log('голубой - первый обработчик');
	event.stopImmediatePropagation();     // остановим всплытие
});
elem2.addEventListener('click', function() {
	console.log('голубой - второй обработчик'); 
		// уже не сработает 
});
elem3.addEventListener('click', function() {
	console.log('красный');
});


//Task 3
// Практическое применение
// Пусть div id=block изначально скрыт (see css).
//Сделаем так, чтобы по клику на кнопку наш блок показался
//А теперь сделаем так, чтобы по клику на любое место родителя 
//наш блок скрывался
//Нас, однако, ждет неожиданный сюрприз: так как кнопка находится внутри родителя, то клик по кнопке одновременно означает и клик по родителю. Это значит, что сначала наш блок покажется, а затем из-за всплытия события сработает обработчик в родителе и наш блок скроется.
//Вот тут-то нам и пригодится возможность отменить всплытие: 
//мы можем сделать так, чтобы при клике на кнопку отменить всплытие, 
//родитель не реагировал на этот клик.

let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
	block.classList.add('active');
});

parent.addEventListener('click', function() {
    block.classList.remove('active');
});