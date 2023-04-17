/*
Объект Event также позволяет получить элемент, 
в котором произошло событие. 
Этот элемент содержится в свойстве target. 

Зачем это нужно, если этот элемент содержится в this?
Дело в том, что на самом деле 

this всегда содержит элемент, 
к которому было привязано событие, 

а свойство target - элемент, по которому реально был клик.

Этот реальный элемент может совпадать с this, а может не совпадать.
*/


//Task
//Привяжите к тегу ul обработчик клика. 
//В этом обработчике проверяйте с помощью свойства tagName, 
//по какому тегу был клик. 
//Если клик был по тегу li - 
//добавьте в конец текста этого тега восклицательный знак. 
//А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.
let elem = document.querySelector('#elem');
let items = document.querySelectorAll('li');

for (let item of items) {
    item.addEventListener('click', handler)
}

elem.addEventListener('click', function(event) {
    let item = event.target;

     if (event.target.tagName === 'UL') {
        let li = document.createElement('li');
        li.textContent = 'I am a newbie!'

        li.addEventListener('click', handler);
        
        item.appendChild(li);
        
    }
});

function handler() {
    this.textContent = this.textContent + "!";
}