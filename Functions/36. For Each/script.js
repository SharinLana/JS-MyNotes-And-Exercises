/*
forEach работает также, как и метод map, 
только не возвращает измененный массив, 
а просто вызывает функцию-коллбэк для каждого элемента массива.

In fact, it's an alternative of a for of loop
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(function(elem, index) {
	document.write(index + '. ' + elem + '<br>');
});

/*
На первый взгляд кажется, что метод forEach не очень полезен, 
так как ничего не возвращает. 
На самом деле просто можно сделать переменную, 
расположенную снаружи коллбэка:

*/
let arr2 = [1, 2, 3, 4, 5];
let sum = 0;

arr2.forEach(function(elem) {
	sum += elem;
});

console.log(sum);


//Task: Дан массив с числами. 
//Используя метод forEach найдите сумму квадратов элементов этого массива.

let array = [1, 2, 3, 4, 5];
let sum2 = 0;

array.forEach(elem => {
    sum2 += elem ** 2;
});

console.log(sum2)