/*
Можно увидеть в консоли список свойств и методов объекта. 
Для этого нужно воспользоваться  командой console.dir()
*/

let date = new Date();
console.dir(date); 

// Task 2
// Изучите результат выполнения следующего кода
let reg = new RegExp;
console.log(reg);
console.dir(reg);
console.log(reg instanceof RegExp);


// Task 3
let arr = [1, 2, 3];
console.log(arr);
console.dir(arr);
console.log(arr instanceof Array);


// Task 4
let array = new Array(1, 2, 3);
console.log(array);
console.dir(array);
console.log(array instanceof Array);


// Task 5
let obj = {a: 1, b: 2, c: 3};
console.log(obj);
console.dir(obj);
console.log(obj instanceof Object);


// Task 6
let object = new Object;
console.log(object);
console.dir(object);
console.log(object instanceof Object);