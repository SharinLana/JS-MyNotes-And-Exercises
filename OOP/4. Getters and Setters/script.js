/*
Геттеры - специальные методы, 
позволяющие прочитать приватные свойства

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

  getFirstName() {
    return this.#firstName;
  }

  getSalary() {
    return this.#salary;
  }

  getAge() {
    return this.#age;
  }
}
let employee = new Employee("Lana", 100000, 40);
console.log(employee.getSalary()); // 100000

/*
сеттеры в ООП.
Для записи приватных свойств также делают методы, 
которые называют сеттеры. Их имена следует начинать со слова set.
*/

class User {
  #name;
  #surname;

  setName(name) {
    return (this.#name = name);
  }

  setSurname(surname) {
    return (this.#surname = surname);
  }

  getName() {
    return this.#name;
  }

  getSurname() {
    return this.#surname;
  }
}
let user = new User;
user.setName('Lana');
user.setSurname('Sharin');
console.log(user.getName()); // Lana
console.log(user.getSurname()); // Sharin


/* Преимущества сеттеров и геттеров в ООП */
/*
Дело в том, что геттеры и сеттеры имеют преимущество: 
перед обращением к свойству можно выполнять некоторые проверки. 
К примеру, в нашем случае мы при записи имени и фамилии можем проверить, 
что новое значение не является пустой строкой
*/

//Task 1
// В классе в сеттере возраста 
// сделайте проверку на то, 
// что возраст должен быть от 0 до 120.

class Human {
    #age;
    #salary;

    setAge(age) {
        if (age > 0 && age <= 120) {
            this.#age = age;
        } else {
            throw new Error('The age is incorrect')
        }
    }

    setSalary(salary) {
        this.#salary = salary;
    }

    getAge() {
        return this.#age
    }

    getSalary() {
        return '$ ' + this.#salary;
    }
}
let human = new Human;
human.setAge(0);
human.setSalary(100000);
console.log(human.getAge()); // Uncaught Error: The age is incorrect
console.log(human.getSalary()); // $ 100000