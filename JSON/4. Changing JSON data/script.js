// Task 1
// Дан следующий JSON
// Добавьте в конец строки еще одного юзера.
let json = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(json);
arr.push("user6");
let res = JSON.stringify(arr);
console.log(res); // ["user1","user2","user3","user4","user5","user6"]


// Task 2
// Дан следующий JSON
// Поменяйте имя второго юзера.
let json2 = '["user1","user2","user3","user4","user5"]';
let arr2 = JSON.parse(json2);
arr2[1] = "second";
let res2 = JSON.stringify(arr2);
console.log(res2); // ["user1","second","user3","user4","user5"]


// Task 3
// Дан следующий JSON
// Добавьте в эту строку еще одного работника.
let json3 = `[
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

let arr3 = JSON.parse(json3);
arr3.push({
    "name": "user4",
	"age": 28,
	"salary": 4000
});

let res3 = JSON.stringify(arr3);
console.log(res3); // [{"name":"user1","age":25,"salary":1000},{"name":"user2","age":26,"salary":2000},{"name":"user3","age":27,"salary":3000},{"name":"user4","age":28,"salary":4000}]