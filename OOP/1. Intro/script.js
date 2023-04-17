// Schema
class Car {
    color;
    fuel;

    go() {};
    turn() {};
    stop() {};
};

// Product
let myCar = new Car;
myCar.color = 'black';
myCar.fuel = '50';

myCar.go();
myCar.turn();
myCar.stop();


//
class Employee {
    firstName;
    lastName;
    age;
    position;
    salary;

    // Methods
    nameAndSalary() {
        return this.firstName + ' ' + this.salary;
    };
    ageData() {
        return this.age;
    };
    positionData() {
        return this.position;
    }
};

let employee1 = new Employee;
employee1.firstName = 'Tom';
employee1.lastName = 'Riddle';
employee1.age = 40;
employee1.position = 'The Dark Lord';
employee1.salary = 99000;

console.log(employee1); // Employee {firstName: 'Tom', lastName: 'Riddle', age: 40, position: 'The Dark Lord'}

let employee2 = new Employee;
employee2.firstName = 'Albus';
employee2.salary = 100000;

// Get the summary of salaries
let sum = employee1.salary + employee2.salary;
console.log(sum); // 199000

// Передайте в ваш тестовый метод имя и зарплату работника.
console.log(employee1.nameAndSalary()); // Tom 99000
console.log(employee2.nameAndSalary()); // Albus 100000
console.log(employee1.ageData()); // 40
console.log(employee1.positionData()); // The Dark Lord


/* Обращение к методам внутри классов в ООП  */

// Task 1 
// Одни методы можно вызывать внутри других через this. 
// Давайте посмотрим на примере. 
// Пусть у нас дан класс с юзером и методом, 
// в котором возвращается свойство
//Пусть у нас также есть метод cape 
// преобразующий первую букву строки в заглавную
// Давайте воспользуемся методом cape внутри метода show

class User {
    name;

    show() {
        return this.capitalLetter(this.name);
    };

    capitalLetter(str) {
        return str[0].toUpperCase() + str.slice(1)
    }
}
let user = new User;
user.name = 'stephan';
console.log(user.show()); // Stephan (the first leter become capital)


// Task 2
// В объект класса Student запишите свойства name и surn.
// Сделайте метод, который вернет инициалы студента, 
// то есть первые буквы его имени и фамилии.
class Student {
    name = 'Lana';
    lastName = 'Sharin';

    getInitials() {
        return this.transform(this.name, this.lastName);
    };
    transform(str1, str2) {
        return str1[0].toUpperCase() + '.' + str2[0].toUpperCase() + '.'
    }
}

let student = new Student;
console.log(student.getInitials()); // P.S.