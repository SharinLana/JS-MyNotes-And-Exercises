/*
Иногда классы используют для группировки методов схожей тематики. 
В этом случае как правило создается только один объект этого класса 
и его методы используются много раз в различных ситуациях.
*/

// Task 1
// Сделаем класс, который будет манипулировать массивами чисел:
class ArrHelper {
    getSum(arr) {
        const res = arr.reduce((total, amount) => total + amount);
        return res;
    }

    getAvg(arr) {
        if (arr.length > 0) {
            return this.getSum(arr) / arr.length;
        } else {
            return 0;
        }
    }
}
let array = new ArrHelper;
console.log(array.getSum([1, 2, 3])); // 6
console.log(array.getAvg([3, 4, 5])); // 4


// Task 2
// Сделайте класс Validator, который будет выполнять проверку строк на корректность.
// Сделайте метод isEmail, проверяющий строку на то, что она корректный email.
// Сделайте метод isDomain, проверяющий строку на то, что она корректное имя домена.
// Сделайте метод isNumber, проверяющий строку на то, что она содержит только числа.

class Validator {
    isEmail(str) {
        if (str.match(/^[^@?!+/\|=:;`"\[\]{}()]+@[^@?!+/\|=:;`"\[\]{}()]+\.[a-z]{2,3}$/)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(str) {
        if (str.match(/^(http)[s]?:\/{2}[a-z0-9]+\.[a-z]{2,3}/)) {
            return true;
        } else {
            return false;
        }
    }

    isNumber(str) {
        if (str.match(/^\d+$/)) {
            return true;
        } else {
            return false;
        }
    }
}

let email = new Validator;
console.log(email.isEmail('sharina@showmeshow.org')); // true

let domain = new Validator;
console.log(domain.isDomain('http://showmeshow.org')); // true

let number = new Validator;
console.log(number.isNumber('12344')); // true