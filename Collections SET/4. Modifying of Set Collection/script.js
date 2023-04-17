/*
Коллекции Set можно преобразовывать в массивы. 
Можно также выполнять обратную операцию - 
массивы преобразовывать в Set.
*/

// Преобразование Set в массив

// 1. деструктуриация
let set = new Set([1, 2, 3]);
let arr = [...set];
console.log(arr); // (3) [1, 2, 3]

// 2. метод Array.from
let arr2 = Array.from(set);
console.log(arr2); // (3) [1, 2, 3]


// Task 1
// Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами.
let newSet = new Set(['word', 'text', 'symbol']);
let array1 = [...newSet]; 
let array2 = Array.from(newSet);

console.log(array1); // (3) ['word', 'text', 'symbol']
console.log(array2); // (3) ['word', 'text', 'symbol']


// Преобразование массива в Set

let array3 = [1, 2, 3];
let set3 = new Set(arr);

console.log(set3); // Set(3) {1, 2, 3}