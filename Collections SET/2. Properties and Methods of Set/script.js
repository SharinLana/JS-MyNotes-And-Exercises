//Коллекции Set имеют ряд полезных свойств и методов

// 1. Размер коллекции - size
let set = new Set;

set.add(1);
set.add(2);
set.add(3);

console.log(set.size);


// 2. Проверка наличия значения - has
console.log(set.has(1)); // true


// 3. Удаление элементов - delete
set.delete(2); // true
console.log(set); // Set(2) {1, 3}


// 4. Очистка коллекции - clear
set.clear();
console.log(set); // Set(0) {size: 0}


// Task 1
// Создайте коллекцию Set с начальными значениями 1, 2 и 3. 
// Выведите на экран количество элементов в коллекции.
let newSet = new Set([1, 2, 3]);
console.log(newSet.size); // 3


// Task 2
// Создайте коллекцию Set с начальными значениями 1, 2 и 3. 
// Проверьте наличие в коллекции элемента со значением 3, 
// а затем элемента со значением 4.
let set2 = new Set([1, 2, 3]);
console.log(set2.has(3)); // true
console.log(set2.has(4)); // false


/*
Функция в forEach у Set имеет 3 аргумента: 
значение value, 
потом снова то же самое значение valueAgain, 
и только потом целевой объект

Это сделано для совместимости с объектом Map, 
в котором колбэк forEach имеет 3 аргумента. 
Выглядит немного странно, 
но в некоторых случаях может помочь 
легко заменить Map на Set и наоборот.
*/

/*
Set имеет те же встроенные методы, что и Map:

set.values() – возвращает перебираемый объект для значений,

set.keys() – то же самое, что и set.values(), 
присутствует для обратной совместимости с Map,

set.entries() – возвращает перебираемый объект 
для пар вида [значение, значение], 
присутствует для обратной совместимости с Map.
*/

// Task 3
// Создайте функцию unique(arr), 
// которая вернёт массив уникальных, 
// не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let nameSet = new Set(arr);
    return [...nameSet];
}

console.log( unique(values) ); // Hare,Krishna,:-O


// Task 4
// Напишите функцию aclean(arr), 
// которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, 
// не важно какое

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    let set = new Set(map.values());
    return [...set]
}

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


// Task 5
// Мы хотели бы получить массив ключей map.keys() в переменную 
// и далее работать с ними, например, применить метод .push.

let map = new Map();
map.set("name", "John");
let keys = [...map.keys()]; //converted итерируемый объект to массив to make the push() fucntion active
keys.push('more');
console.log(keys); //(2) ['name', 'more']


