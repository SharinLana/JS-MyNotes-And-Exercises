/*
Сравнение объектов в ООП

Два переменные будут считаться равными, 
если они содержат ссылку на один и тот же объект.
*/

// Task 1
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp2); // false


// Task 2
class Employee2 {
	constructor(name) {
		this.name = name;
	}
}

let emp21 = new Employee2('john');
let emp22 = new Employee2('eric');

console.log(emp21 === emp22); // false


// Task 3
class Employee3 {
	constructor(name) {
		this.name = name;
	}
}

let emp31 = new Employee3('john');
let emp32 = new Employee3('john');

console.log(emp31 === emp32); // false


// Task 4
class Employee4 {
	constructor(name) {
		this.name = name;
	}
}

let emp41 = new Employee4('john');
let emp42 = new Employee4('eric');

console.log(emp41 !== emp41); // false


// Task 5
class Employee5 {
	constructor(name) {
		this.name = name;
	}
}

let emp51 = new Employee5('john');
let emp52 = emp51;

console.log(emp51 === emp52); // true


// Task 6

class Employee6 {
	constructor(name) {
		this.name = name;
	}
}

let emp61 = new Employee6('john');
let emp62 = new Employee6('eric');

console.log(emp61 !== emp62); // true


// Task 7
class Employee7 {
	constructor(name) {
		this.name = name;
	}
}

let emp71 = new Employee7('john');
let emp72 = emp71;
emp72.name = 'eric';
console.log(emp71.name)
console.log(emp72.name)
console.log(emp71 === emp72); // true