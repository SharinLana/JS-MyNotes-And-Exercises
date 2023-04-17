/*
Цепочки методов в ООП 

Можно сделать так, чтобы методы можно было вызывать друг за другом цепочкой. 
Для этого каждый такой метод должен возвращать this. 
*/

class Employee {
    #name;
    #lastName;

    setName(name) {
        this.#name = name;
        return this;
    }
    setLastName(lastName) {
        this.#lastName = lastName;
        return this;
    }

    getName() {
        return this.#name;
    }
    getLastName() {
        return this.#lastName;
    }
}
let employee = new Employee;
employee.setName('Lana').setLastName('Sharin');
console.log(employee.getName()); // Lana
console.log(employee.getLastName()); // Sharin