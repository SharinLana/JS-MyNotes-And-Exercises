/* Cycle for - of */

//В ES6 появился новый цикл for-of, предназначенный конкретно для перебора МАССИВОВ.
//Он используется тогда, когда НЕ нужны номера (индексы) элементов массива
/*
for (let переменнаяДляЭлемента of массив) {
	
		В переменнуюДляЭлемента по очереди
		будут попадать элементы перебираемого массива.
	
}
*/

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	console.log(elem);
}

let array = ['a', 'b', 'c', 'd', 'e'];
for (let elem of array) {
    document.write(`${elem}, <br>`);
}

let arr2 = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
for (let elem of arr2) {
    console.log(elem);
}

//Следующую задачу нужно решать обычным циклом for со счетчиком:
//Пусть у вас есть массив с названиями месяцев. 
//Пусть в переменной month хранится номер текущего месяца, например, 10. 
//С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. 
//Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
let arr3 = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let month = 3;
for (i = 0; i < arr3.length; i ++) {
    if (arr3[i] == arr3[month]) {
        document.write(`<br><i>${arr3[i]}</i>, <br>`);
    }
    else {
        document.write(`<br>${arr3[i]}, <br>`);
    }
}



//Сумма элементов массива с помощью for-of
let array2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of array2) {
    sum += elem;
}
console.log(sum);

