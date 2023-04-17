/*
Свойства объекта, которые можно прочитывать и записывать извне, 
называются публичными. 
Существуют также приватные свойства, 
которые будут доступны только внутри класса.

Имена приватных свойств нужно начинать с символа #. 
Кроме того, такие свойства 
обязательно нужно объявить в начале кода класса. 
*/

class Employee {
    #firstName;
    #salary;
    #age;

    constructor(firstName, salary, age) {
        this.#firstName = firstName;
        this.#salary = salary;
        this.#age = age;
    }

    showData() {
        return `${this.#toUpper(this.#firstName)}, salary: ${this.#salary}, age: ${this.#age}`
    }

    #toUpper(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

}

let employee = new Employee('lana', 100000, 40);
console.log(employee.showData()); // Lana, salary: 100000, age: 40


/*
Приватными могут быть не только свойства, но и методы. 
Обычно приватными делают вспомогательные методы, 
чтобы они случайно не могли быть вызваны извне класса.
*/

class User {
	#firstName;

    constructor(firstName) {
        this.#firstName = firstName;
    }

    show() {
        return this.#cap(this.#firstName);
    }

    #cap(str) {
        return str[0].toUpperCase() + str.slice(1)
    }
}

let user = new User('lana');
console.log(user.show()); // Lana


//
class Emp {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}

let emp = new Emp('Lana', 100000);
console.log(emp.getSalary()); // 100000$
