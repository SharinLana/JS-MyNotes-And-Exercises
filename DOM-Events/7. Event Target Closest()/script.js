/*
Method closest('')

Приведенный код in DOM-Handlers for Appended Children
рабочий, однако, не без недостатков. 
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
});