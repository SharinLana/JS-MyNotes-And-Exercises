/*
Оператор instanceof позволяет проверить 
принадлежит ли объект определенному классу.
*/

// Task 1
class Student {
	constructor(name) {
        this.name = name;
    }
}
class Employee {
	constructor(name) {
        this.name = name;
    }
}

let employee = new Employee;
console.log(employee instanceof Employee); // true
console.log(employee instanceof Student); // false

// Task 2
// Дан следующий код
// Переберите циклом массив объектов 
// и выведите в консоль только имена работников
let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];

for (let user of users) {
    if (user instanceof Employee) {
        console.log(user.name); // user2 // user4 // user6
    }
}