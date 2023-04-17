/* CONSTANTS IN ARRAYS and OBJECTS */

//JavaScript не разрешает изменять значения самих констант, 
//но изменять свойства объектов и значения элементов массивов - можно.
const obj = {a: 1, b: 2, c: 3};
// obj = 123; //TypeError
// obj = {a: 4, b: 5, c: 6}; //TypeError
obj.b = 6; //works! (see below)
obj['b'] = 6; //also will work 
console.log(obj); //{a: 1, b: 6, c: 3}


const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); //["a", "!", "c"]

const arrTwo = ['a', 'b', 'c'];
arrTwo = [1, 2, 3];
console.log(arrTwo); //TypeError

const arrThree = ['a', 'b', 'c'];
arrThree = ['a', 'b', 'c'];
console.log(arrThree); //SyntaxError
