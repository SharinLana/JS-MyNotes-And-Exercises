//Task 1
//Пусть у нас есть инпут.
//Навесим на наш инпут событие, 
//срабатывающее по каждому нажатию клавиши - 'keydown'.
//В свойстве key объекта с событием будет лежать нажатый символ.
//А в свойстве code будет лежать код нажатой клавиши

let input1 = document.querySelector('#input1');

input1.addEventListener('keydown', function(event) {
	console.log(event.key); // Enter
    console.log(event.code); // Enter
    console.log(event.keyCode); // 13
});


//Task 2
// Дан абзац и инпут. 
//В него вводится текст и нажимается клавиша Enter. 
//Сделайте так, чтобы в этот момент 
//введенный текст попадал в абзац под инпутом, 
//а содержимое инпута очищалось.
let input2 = document.querySelector('#input2');
let par = document.querySelector('#par');

input2.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        par.textContent = input2.value;
        input2.value = '';
    }

});
