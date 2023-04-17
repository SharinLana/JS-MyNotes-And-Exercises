/*
С помощью метода JSON.parse можно преобразовать JSON 
в структуру данных JavaScript.

В случае, если строка будет содержать некорректный JSON, 
наш метод выдаст ошибку
*/

// Task 1
// Дана строка в формате JSON, содержащая массив с числами
// Преобразуйте эту строку в настоящий массив JavaScript 
// и найдите сумму чисел этого массива
let json = '[1,2,3,4,5]';
let arr = JSON.parse(json);
let sum = 0;

for (let elem of arr) {
    sum += elem;
}
console.log(sum); // 15


// Task 2
// Дана строка в формате JSON, содержащая объект с данными
// Найдите сумму чисел из представленных данных.
let json2 = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
let obj = JSON.parse(json2);
let sum2 = 0;

for (let key in obj) {
   for (let num of obj[key]) {
    sum2 += num;
   }
}
console.log(sum2); // 45


// Task 3
// Дана строка в формате JSON, содержащая имена юзеров
// Выведите эти имена в виде списка ul.
let json3 = '["user1","user2","user3","user4","user5"]';
let userArr = JSON.parse(json3);
let ul = document.querySelector('ul');

for (let user of userArr) {
    let li = document.createElement('li');
    li.textContent = user;
    ul.append(li);
}

// Task 4
// Дана строка в формате JSON, содержащая массив с данными работников
// Выведите этих работников на экран в виде HTML таблицы.
let json4 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let data = JSON.parse(json4);
let table = document.querySelector('table');

for (let elem of data) {
    let tr = document.createElement('tr');
    tr.style.height = '50px';

    for (let key in elem) {
        let td = document.createElement('td');
        td.textContent = elem[key];
        td.style.border = '2px solid black';
        td.style.width = '100px';
        tr.append(td)
    }

    table.append(tr);
}