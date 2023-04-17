//Task: find a random element of this array

let arr = [1, 2, 3, 4, 5];

//1. Getting a random number in a range of numbers
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2. Making this random number a key of the array
function randomElem(arr) {
    let key = getRandomNum(0, arr.length - 1); //first possible key is 0, last - the array length - 1;

    return arr[key];
}

console.log(randomElem(arr))


//Task: find 3 random elements of this array

let arrA = [1, 2, 3, 4, 5];
let amountOfRandomElems = 3;

//1. Getting a random number in a range of numbers
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2. Making this random number a key of the array
function getRandomElem(arr, length) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(arr[getRandomIndex(0, arr.length - 1)]);
    }

    return array;
}

console.log(getRandomElem(arrA, amountOfRandomElems))