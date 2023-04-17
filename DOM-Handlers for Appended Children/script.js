// Task
// Пусть у нас есть список ul и кнопка.
//Сделаем так, чтобы по нажатию на кнопку 
//в конец списка добавлялся новая li,
//И чтобы по клику на любую li (в том числе на новую)
//ей в конец добавлялся восклицательный знак.

/*
Как вы уже знаете, кликая на li, 
мы одновременно кликаем и на ul. 
Это возможно благодаря всплытию событий. 

Мы можем использовать это для решения нашей задачи: 
навесим событие не на каждую li, а на их родителя ul.

Теперь в обработчике события this будет указывать на элемент, 
к которому привязан обработчик, 
а event.target - на элемент, в котором случилось событие
*/

let ul = document.querySelector('.ul');
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let newLi = document.createElement('li');
    newLi.textContent = `item`;
    ul.appendChild(newLi);
});

ul.addEventListener('click', function(event) {
    let item = event.target;
    item.textContent = item.textContent + '!'
});


/*
Method closest('')

Приведенный код рабочий, однако, не без недостатков. 
Давайте разберем эти недостатки и напишем более универсальное решение.

Недостаток нашего кода проявится в том случае, 
когда внутри li будут какие-то вложенные теги. 
В нашем случае пусть это будут теги i (see Task 2):
*/

let ul2 = document.querySelector('.ul2');

ul2.addEventListener('click', function(event) {
    let li = event.target.closest('li');
    if (li) {
        li.textContent = li.textContent + "!"
    }
})