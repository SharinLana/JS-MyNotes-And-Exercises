/*
Чтобы получить только ключи или только значения, 
существуют специальные методы. 

Для получения значений - метод values:
let values = map.values();

Аналогично с ключами:
let keys = map.keys();

Существует также метод entries, 
возвращает набор пар ключ-значение:
let entries = map.entries();

*/


// Task 1
// Пусть дана коллекция Map. 
// Получите массив ее ключей и переберите их циклом for-of.
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

for (let elem of map.keys()) {
    console.log(elem); // (2) [1, 2]
                       // (2) [3, 4]
}


// Task 2
// Пусть дана коллекция Map. 
// Получите массив ее элементов 
// и переберите их циклом for-of.

for (let elem of map.values()) {
    console.log(elem); // data1
                       // data2
}


/*
Object.entries: Object => Map

Если у нас уже есть обычный объект, 
и мы хотели бы создать Map из него, 
то поможет встроенный метод Object.entries(obj), 
который получает объект и возвращает массив пар ключ-значение для него, 
как раз в этом формате.

Так что мы можем создать Map из обычного объекта следующим образом

*/

let object = {
    firstName: "John",
    lastName: "Smith"
};

let newMap = new Map(Object.entries(object));
console.log(newMap); // Map(2) {'firstName' => 'John', 'lastName' => 'Smith'}
console.log(newMap.get("firstName")); // John



/*
Object.fromEntries: Map => Object

Есть метод Object.fromEntries, который, 
получив массив пар вида [ключ, значение], создаёт из них объект
*/
let productsMap = new Map();
productsMap.set("bananas", 16);
productsMap.set("kiwi", 2);
productsMap.set("oranges", 12);

let newObj = Object.fromEntries(productsMap);
console.log(newObj); // {bananas: 16, kiwi: 2, oranges: 12}
