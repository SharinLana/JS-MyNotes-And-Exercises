/*
Метод pop удаляет последний элемент из массива. 
При этом исходный массив изменяется, 
а результатом метода возвращается удаленный элемент.

массив.pop()
*/

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.pop();
console.log(arr); //['a', 'b', 'c', 'd']


//
let arrA = ['a', 'b', 'c', 'd', 'e'];
let elem = arrA.pop();
console.log(elem); // e


//Задача: Пусть дан массив ['1', '2', '3', '4', '5', '6']. 
//Давайте сделаем из него строку '16-25-34'.
let arrB = ['1', '2', '3', '4', '5', '6'];
let result = [];

while (arrB.length > 0) {
    let first = arrB.shift();
    let last = arrB.pop();

    let str = first + last;

    result.push(str);
}

let string = result.join('-');
console.log(string); //16-25-34