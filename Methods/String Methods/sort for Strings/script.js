/*
array.sort()
*/

let arr = ['a', 'c', 't', 's', 'j'];

let sortedAlphabetically = arr.sort();
console.log(sortedAlphabetically); // ['a', 'c', 'j', 's', 't']


//
let string = 'acvbrty';
let sorted = string.split('').sort().join('');
console.log(sorted); // abcrtvy