/*
setTimeout() позволяет сделать задержку 
перед запуском кода. 
Эта задержка, в отличии от функции setInterval, 
случится только один раз.
*/

// Task 1
//Дан абзац. Напишите код, 
//который выведет сообщение в этот абзац 
//через 10 секунд после загрузки страницы.

let par = document.querySelector('#par');

setTimeout(function() {
    par.textContent = `Hello!`
}, 10000);


/*
setTimeout as a setInterval

Хотя функция setTimeout и не предназначена для создания таймеров, 
однако их все равно можно делать с ее помощью, 
если воспользоваться рекурсией:
*/

let par2 = document.querySelector('#par2');

function func() {
    setTimeout(function() {
        console.log(`I am being invoked with a recursion`);
        func();
    }, 2000);

}
func();


//Task 3
//Выведите в консоль число 0. 
//Через секунду выведите число 1, 
//через две секунды выведите число 2, 
//через 3 секунды выведите число 3. 
//И так далее до бесконечности.
let i = 0;

function timer() {
    setTimeout(function() {
        console.log(i);
        i++;

        timer();
    }, 1000 * i)
}

timer();



