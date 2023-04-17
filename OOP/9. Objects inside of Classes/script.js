// Task 1
class City {
    constructor(name) {
        this.name = name;
    }
};

class User {
    constructor(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
};

let city = new City('Las Vegas');
let user = new User('Lana', 'Sharin', city);
console.log(user.firstName); // Lana
console.log(user.lastName); // Sharin
console.log(user.city.name); // Las Vegas


// Task 2
// Дан следующий класс
// Сделайте так, чтобы во второй и третий параметры 
// передавались объекты отдельных классов. 

class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
};

class Position {
    constructor(title) {
        this.title = title;
    }
};

class Department {
    constructor(title) {
        this.title = title;
    }
};

let position = new Position('software engineer');
let department = new Department('IT');
let employee = new Employee('Lana', position, department);
console.log(employee.name); // Lana
console.log(employee.position.title); // software engineer
console.log(employee.department.title); // IT


// Task 3
// Манипуляция объектами в классах
class Student {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
};

class StudentCollection {
    #students;

    constructor() {
        this.#students = [];
    }

    add(student) {
        return this.#students.push(student);
    } 
    show() {
        for (let student of this.#students) {
            console.log(student.getName());
        }
    }
}
const studentCollection = new StudentCollection;
studentCollection.add(new Student('Lana'));
studentCollection.add(new Student( 'Stacey'));
studentCollection.add(new Student( 'Rachel'));
studentCollection.show(); // Lana    //Stacey   // Rachel


// Task 4
// Сделайте класс EmployeesCollection, который будет содержать массив работников.
// Сделайте в этом классе метод для добавления нового работника.
// Сделайте в этом классе метод для вывода всех работников.
// Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.
// Сделайте в этом классе метод для расчета средней зарплаты всех работников.
class Worker {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary;
    }
};

class WorkerCollection {
    #workers;

    constructor() {
        this.#workers = [];
    }

    add(worker) {
        return this.#workers.push(worker);
    }
    show() {
        for (let worker of this.#workers) {
            console.log(worker.getName());
            console.log(worker.getSalary());
        }
    }
    salarySum() {
        const result = this.#workers.reduce((total, amount) => total += amount.getSalary(), 0);
        console.log(result);
        return result;
    }
    avgSalary() {
        let avg = this.salarySum() / this.#workers.length;
        console.log(avg) 
    }
}

const wc = new WorkerCollection;
wc.add(new Worker('Lana', 100000));
wc.add(new Worker('Susan', 80000));
wc.add(new Worker('Carla', 48000));
wc.show(); // Lana //100000 // Susan // 80000 // Carla // 48000
wc.salarySum(); // 228000
wc.avgSalary(); // 76000