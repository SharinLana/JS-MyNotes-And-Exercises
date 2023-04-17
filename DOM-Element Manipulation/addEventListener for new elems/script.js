//Task 1
//Пусть у нас есть вот такой родительский элемент
//Давайте добавим в конец этого родителя еще один абзац, 
//установив ему обработчик клика

let parent = document.querySelector('#parent');

let par = document.createElement('p');
par.textContent = 'Hello';
 
par.addEventListener('click', function() {
    console.log(this.textContent);
 });

 parent.appendChild(par);