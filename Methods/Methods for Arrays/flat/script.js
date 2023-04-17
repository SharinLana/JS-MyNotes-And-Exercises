/*
Method flat() concatenate all elements of the sub-arrays into the new array:
*/

//
let arr = [[1, 2, 3,], [3, 4, [3, 4, 5], 1, 5], [6, 7, 8, 5]];
let result = arr.flat(2); // 2 is about the array depth
console.log(result); //(14) [1, 2, 3, 3, 4, 3, 4, 5, 1, 5, 6, 7, 8, 5]


//If you don't know the depth of the array, use Infinity
const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]


// If an array has empty slots, 
// you can use the flat() method to remove the holes:
const array = [1, 2, , 4, , 5];
const sequence = array.flat();
console.log(sequence); // (4) [1, 2, 4, 5]