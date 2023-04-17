/*
Есть два типа свойств объекта.

Первый тип это свойства-данные (data properties). 
Мы уже знаем, как работать с ними. 
Все свойства, которые мы использовали до текущего момента, были свойствами-данными.

Второй тип свойств - свойства-аксессоры (accessor properties). 
По своей сути это функции, которые используются для присвоения и получения значения, 
но во внешнем коде они выглядят как обычные свойства объекта.

Свойства-аксессоры создаются с помощью ключевых слов get и set 
написанных при объявлении методов:
*/

class Employee {
    #name;
    set name(name) {
        if (name.length > 0) {
            this.#name = name;
        }
    }
    get name() {
        return this.#name;
    }
}

const newbie = new Employee;
newbie.name = 'Lana';
console.log(newbie.name); // Lana


/* 
Геттеры мнимых свойств в ООП

С помощью аксессоров можно создавать мнимые свойства, 
которых в объекте на самом деле нет.
*/

class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    get fullName() {
        return this.name + " " + this.surn
    }
}

const user = new User('Lana', "Sharin");
console.log(user.fullName); // Lana Sharin


/*
Сеттеры мнимых свойств в ООП 

внутри сеттера мы должны получить данные, разделить их 
и записать соответствующие части в нужные публичные свойства.
*/

class Student {
    constructor(name, surn) {
        this.name = name;
		this.surn = surn;
    }
    set fullName(full) {
        [this.name, this.surn] = full.split(' ');
    }
    
    get fullName() {
        return this.name + " " + this.surn;
    }
}

const student = new Student('John', 'Smith');
student.fullName = 'Eric Johns';
console.log(student.fullName); // Eric Johns
