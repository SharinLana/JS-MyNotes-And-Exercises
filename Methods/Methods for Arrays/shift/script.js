/*
Метод shift удаляет первый элемент из массива. 
При этом исходный массив изменяется, 
а результатом метода возвращается удаленный элемент.

массив.shift();
*/

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.shift();

console.log(arr); // ["b", "c", "d", "e"] (4)


//Задача: Удалить первый элемент из массива и вывести его на экран
let arrA  = ['a', 'b', 'c', 'd', 'e'];
let elem = arrA.shift();

console.log(elem); // a


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

let newStr = result.join('-');

console.log(newStr); // 16-25-34