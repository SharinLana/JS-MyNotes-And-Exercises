/*
Иногда могут понадобится объекты, 
в которых ключом может быть любое значение: 
Объекты, массивы, функции, примитивные типы, даже NaN. 

Для этого в JavaScript существуют специальные коллекции Map.
в коллекцию можно  добавлять элементы с помощью метода set 
и получать их с помощью метода get.

Map – это коллекция ключ/значение, как и Object. 
Но основное отличие в том, что Map позволяет использовать ключи любого типа.

Методы и свойства:

new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.

*/

let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

console.log(map.get(arr1)); // data1
console.log(map.get(arr2)); // data2


/*Цепочка вызовов
Каждый вызов map.set возвращает объект map, 
так что мы можем объединить вызовы в цепочку:
*/
map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");


// Task 1
// Пусть даны 3 массива. 
// Создайте коллекцию Map, 
// сделайте ключами коллекции эти массивы, 
// а значениями - какие-нибудь строки.

let array1 = ['Sunday', 'Monday'];
let array2 = ['Tuesday', 'Wednesday'];
let array3 = ['Thursday', 'Friday'];

let map2 = new Map;

map2.set(array1, 'days1');
map2.set(array2, 'days2');
map2.set(array3, 'days3');

console.log(map2.get(array1)); // days1
console.log(map2.get(array2)); // days2
console.log(map2.get(array3)); // days3


// Task 2
// Пусть даны 3 объекта и 3 массива. 
// Создайте коллекцию Map, сделайте ключами коллекции объекты, 
// а значениями - соответствующие массивы.

let object1 = {a: '1', b: '2', c: '3'};
let object2 = {d: '4', e: '5', f: '6'};
let object3 = {g: '7', h: '8', i: '9'};

let newArr1 = ['word1', 'word2'];
let newArr2 = ['game1', 'game2'];
let newArr3 = ['play1', 'play2'];

let map3 = new Map;

map3.set(object1, newArr1);
map3.set(object2, newArr2);
map3.set(object3, newArr3);

console.log(map3.get(object1));
console.log(map3.get(object2));
console.log(map3.get(object3));


/*
JavaScript Maps в отличие от объектов прекрасно перебираются напрямую, 
причем порядок итерации полей всегда соответствует порядку их вставки в Map
*/

for (let [key, value] of map3) {
    console.log(key);
    console.log(value);
  };
  
  map3.forEach((key, value) => {
    console.log(key);
    console.log(value);
  });


// Task 3
// Bам нужно написать функцию isAnagram, 
// которая будет определять, являются ли два слова 
// анаграммами друг друга:

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let map = new Map();

    for (let char of str1) {
        const number = map.has(char) ? map.get(char) + 1 : 1;
        map.set(char, number);
    }

    for (let char of str2) {
        if (!map.has(char)) return false;

        const number = map.get(char) - 1;

        if (number === 0) {
            map.delete(char);
            continue;         // IMPORTANT!!!
        }
        map.set(char, number);
    }
    return map.size === 0;
}


console.log(isAnagram('anagram', 'gramana')); // true
console.log(isAnagram('anagram', 'margnna')); // false