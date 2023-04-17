/*
Этот метод работает следующим образом: 
принимает параметром функцию-коллбэк 
и применяет ее для каждого элемента массива, 
а затем возвращает измененный массив.

Функция-коллбэк может также принимать второй параметр - 
в него JavaScript разместит ключ элемента массива.

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function() {
	// функция применится для каждого элемента 
		массива 
});

*/

/*
Если в коллбэке указать первый параметр (имя параметра значения не имеет), 
то в него автоматически будут попадать значения элементов массива:
*/
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem) {
	console.log(elem); // последовательно выведет 1, 2, 3, 4, 5 
});


//Task: Дан массив с числами. 
//Используя метод map извлеките из каждого элемента массива квадратный корень 
//и запишите результат в новый массив.

let array = [4, 9, 16, 36];

let res = array.map(function(elem) {
    return Math.sqrt(elem);
})
console.log(res);


//Task: Дан массив со строками. 
//Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let array2 = ['me', 'you', 'we', 'they'];

let result2 = array2.map(function(elem) {
    return elem + '!';
});
console.log(result2);


//Task: Дан массив со строками. 
//Используя метод map переверните символы каждой строки в обратном порядке.
let array3 = ['me', 'you', 'we', 'they'];

let result3 = array3.map(function(elem) {
    return elem.split('').reverse().join('');
});
console.log(result3);


/*Task:
Дан следующий массив:

let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]; */

let array4 = ['123', '456', '789'];

let result4 = array4.map(function(elem) {
    elem = elem.split('');
    let arr = [];

    for (let el of elem) {
        el = +el;
        arr.push(+[el].join(''))
    }

    return arr;
});
console.log(result4);



/* Функция-коллбэк может также принимать второй параметр - ключ элемента массива. */

let array5 = ['a', 'b', 'c', 'd', 'e'];
let result5 = array5.map(function(elem, index) {
	return elem + index;
});
console.log(result5); // выведет ['a0', 'b1', 'c2', 'd3', 'e4'] 



//Task: Дан массив с числами. 
//Используя метод map запишите в каждый элемент массива значение этого элемента, 
//умноженное на его порядковый номер в массиве.
let array6 = [1, 2, 3, 4, 5, 6];

let result6 = array6.map(function(elem, index) {
    elem = elem * index;
    return elem;
});

console.log(result6);



//Перебор многомерных массивов
let array7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result7 = array7.map(function(elem) {
    return elem.map(function(num) {
        return num * num;
    })
});
console.log(result7); //[[1, 4, 9], [16, 25, 36], [49, 64, 81]]
