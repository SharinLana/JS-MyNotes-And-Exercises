/* VARIABLE KEYS / КЛЮЧИ ИЗ ПЕРЕМЕННЫХ */

//ARRAY KEYS
//Ключи массивов можно прописывать не только как [0], [1] и т.д., но и отдельно, в виде строк
let arr = ['a', 'b', 'c' ];
let key1 = 0;
let key3 = 2;
console.log(arr[key1]); //выведет a
console.log(arr[key3]); //выведет a

//Задача: Найдите сумму элементов, ключи которых хранятся в указанных переменных.
let arrTwo = [1, 2, 3, 4, 5];
let keyOne = 1;
let keyTwo = 2;
let result = arrTwo[keyOne] + arrTwo[keyTwo];
console.log(result);



//OBJECT KEYS
//Ключи объектов также могут хранится в переменных
let obj = {key1: 'a', key2: 'b', key3: 'c'};
let key4 = 'key1'; // записываем ключ в переменную
console.log(obj[key4]); 
// КЛЮЧ ИЗ ПЕРЕМЕННОЙ в объекте всегда оформляется в КВАДР. СКОБКАХ и БЕЗ КАВЫЧЕК!!!!


let objTwo = {
    'a': 1, 
    'b': 2, 
    'c': 3
};
let key = 'a';
console.log(objTwo[key]); //выведет 1

