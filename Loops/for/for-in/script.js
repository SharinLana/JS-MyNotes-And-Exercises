/* Loop FOR-IN */
//Нужен для перебора ОБЪЕКТОВ
/*
for (let переменнаяДляКлюча in объект) {
	
}
*/

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
	console.log(key); // выведет ключи 'a', 'b', 'c'
}

//А теперь выведем элементы:
let obj2 = {a: 1, b: 2, c: 3};
for (let key in obj2) {
	console.log(obj2[key]); // выведет 1, 2, 3
}


//Задача: Найти сумму элементов объекта
let object = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;
for (let key in object) {
    sum += object[key];
}
console.log(sum); //