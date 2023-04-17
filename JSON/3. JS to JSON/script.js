/*
JS -> JSON
С помощью метода JSON.stringify 
можно преобразовать массивы и объекты JavaScript 
в формат JSON
*/

// Task 1
// Дан следующий массив
// Преобразуйте этот массив в формат JSON.
let array = ['user1', 'user2', 'user3', 'user4', 'user5'];
let json = JSON.stringify(array);
console.log(json); // ["user1","user2","user3","user4","user5"]


// Task 2
// Дан следующий HTML
// Получите список городов в формате JSON.
let items = document.querySelectorAll('li');
let arr = [];

for (let item of items) {
    arr.push(item.textContent);
}

let jsonCityNames = JSON.stringify(arr);
console.log(jsonCityNames); // ["city1","city2","city3","city4"]



// Task 3
// Дан следующий HTML
// Получите представленные данные в формате JSON 
// в виде объекта с ключами surname, name
let table = document.querySelector("table"); 
let trs = table.querySelectorAll("tr"); 
let arrKeys = ["surname", "name"]; 
let arrUsers = []; // 

for (let i = 1; i < trs.length; i++) { 
    let tds = trs[i].querySelectorAll("td"); 
    let obj = {}; // inside of each tr we create an object

    for (let i = 0; i < tds.length; i++) { 
        obj[arrKeys[i]] = tds[i].textContent;
    } 

    arrUsers.push(obj); 
} 

let jsonUsers = JSON.stringify(arrUsers);
console.log(jsonUsers); // [{"surname":"Иванов","name":"Иван"},{"surname":"Петров","name":"Петр"},{"surname":"Сидоров","name":"Сидoр"}]

