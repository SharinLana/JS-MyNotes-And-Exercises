/*
Пусть в методе мы решили использовать некоторый вспомогательный метод класса. 
В этом случае контекст и потеряется.

Можно исправить проблему, например, введя стрелочную функцию
*/

class Employee {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce((total, coeff) => {
			return total + this.salary * coeff;
		}, 0);
	}
}

let employee = new Employee('john', 
	1000, [1.1, 1.2, 1.3]); 
let total = employee.getTotal();
console.log(total); // 3600


// Task 2
// При использовании исходного кода метода класса может потеряться контекст. 
// Давайте посмотрим на примере. Пусть у нас есть следующий класс:
// В момент записи метода в переменную контекст и потерялся. 
// Теперь this внутри кода метода не будет указывать на объект класса.
// Для решения проблемы можно привязать контекст к функции, например, через bind:
class User {
    #name;
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const user = new User('John');
let func = user.getName;
// console.log(func()); // TypeError 

func = func.bind(user);
console.log(func()); // John




