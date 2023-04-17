/*
Массивы объектов в ООП

Объекты классов можно хранить в массиве 
и выполнять с ними различные операции, 
как с элементами массива.
*/

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
};

const users = [
    new User('Lana'),
    new User('Olga'),
    new User('Tanya')
];

for (let user of users) {
    console.log(user.getName()); //Lana  //Olga  //Tanya
}


// Task 2
// Сделайте массив объектов класса Employee.
// Перебирите созданный массив циклом 
// и выведите на экран имена и зарплаты каждого работника.
class Employee {
    #lastName;
    #salary;

    constructor(lastName, salary) {
        this.#lastName = lastName;
        this.#salary = salary;
    }

    getLastName() {
        return this.#lastName;
    }
    getSalary() {
        return this.#salary;
    }
}

const employees = [
    new Employee('Sharin', 100000),
    new Employee('Chibiryak', 70000),
    new Employee('Tebenkov', 35000)
];

const result = employees.reduce((total, amount) => {
    total[amount.getLastName()] = amount.getSalary();
    return total;
}, {});
console.log(result)

