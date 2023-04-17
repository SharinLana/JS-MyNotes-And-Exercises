/* DELETE OPERATOR */
//Удаляет элементы массивов и объектов

//OBJECTS
let obj = {a: 1, b: 2, c: 3};
delete obj['b']; //вариант - delete.obj.b;
console.log(obj); // выведет {a: 1, c: 3}

let objTwo = {a: 1, b: 2, c: 3, d: 4, e: 5};
delete objTwo.e;
console.log('e' in objTwo); //false


//ARRAYS
let arr = ['a', 'b', 'c'];
delete arr[1];
console.log(arr); // выведет ['a', ,'c'] или ['a', 2: 'c']

let arrTwo = ['a', 'b', 'c', 'd', 'e'];
delete arrTwo[1];
delete arrTwo[2];
console.log(arrTwo); //["a", 3: "d", 4: "e"]
//При этом длина массива с удаленными элементами останется прежней,
//потому что дыры будут определяться как undefined: ["a", undefined, undefined, 3: "d", 4: "e"]
console.log(arrTwo.length); // 5