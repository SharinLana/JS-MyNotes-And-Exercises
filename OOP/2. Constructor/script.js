/*
Существует специальный метод, 
который будет вызываться в момент создания нового объекта класса. 
Этот метод называется constructor. 

*/

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    show() {
        return this.name + ' ' + this.lastName;
    }
}
let user = new User('Lana', 'Sharin');
console.log(user.show()); // Lana Sharin


// Task 1
// Передайте в конструктор класса Employee 
// имя и зарплату работника и запишите их в соответствующие свойства.
// Сделайте метод, который будет выводить имя работника.
// Сделайте метод, который будет выводить зарплату работника.
// Сделайте метод, который будет увеличивать зарплату работника на 10%.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    };

    getSalary() {
        return this.salary;
    };

    increaseSalary() {
        return ((10 * this.salary) / 100) + this.salary;
    }
}

let employee = new Employee('Pavel', 1000);
console.log(employee.getName()); // Pavel
console.log(employee.getSalary()); // 1000
console.log(employee.increaseSalary()); // 1100