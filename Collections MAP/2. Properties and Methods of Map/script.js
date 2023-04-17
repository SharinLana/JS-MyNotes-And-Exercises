/*
Коллекции Map имеют ряд полезных свойств и методов
*/

// Размер коллекции
// В свойстве size содержится размер коллекции:
let arr = ['abc', 'fox', 'cbs'];
let obj = {a: "democrates", b: "respublican", c: "democrates"}
let map = new Map;

map.set(arr, obj);
console.log(map.size); // 1


// Проверка наличия ключа
// Проверить наличие ключа в коллекции 
// можно с помощью метода has:
console.log(map.has(arr)); // true


// Удаление по ключу
// Удалить элемент из коллекции 
// можно с помощью метода delete:
console.log(map.delete(arr)); // true
console.log(map.get(arr)); //undefined


// Очистка коллекции
// Очистить всю коллекцию 
// можно с помощью метода clear:
map.clear();
console.log(map.get(arr)); // undefined


