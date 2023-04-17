// Перебор коллекций Map циклом

let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

for (let elem of map) {
    console.log(elem); // (2) [Array(2), 'data1']
                       // (2) [Array(2), 'data2']
}

// Можно отделить ключи и значения с помощью деструктуризации
for (let [key, value] of map) {
    console.log(key); // (2) [1, 2] 
                      // (2) [3, 4]
    console.log(value); // data1
                        // data2
}


/*
Перебор Map

Для перебора коллекции Map есть 3 метода:

map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], 
этот вариант используется по умолчанию в for..of.

В отличие от обычных объектов Object, 
в Map перебор происходит в том же порядке, 
в каком происходило добавление элементов.
*/

let recipeMap = new Map([
    ["cucumber", 20],
    ["carrot", 10],
    ["tomato", 15]
]);

for (let elem of recipeMap.keys()) {
    console.log(elem);  // cucumber
                        // carrot
                        // tomato
}

for (let elem of recipeMap.values()) {
    console.log(elem);  // 20
                        // 10
                        // 15
}

for (let elem of recipeMap.entries()) {
    console.log(elem);  // (2) ['cucumber', 20]
                        // (2) ['carrot', 10]
                        // (2) ['tomato', 15]
}


/*
Кроме этого, Map имеет встроенный метод forEach, 
схожий со встроенным методом массивов Array:
*/

recipeMap.forEach((value, key, map) => {
    console.log(`${value} ${key} `); // 20 cucumber
                                    // 10 carrot
                                    // 15 tomato
});