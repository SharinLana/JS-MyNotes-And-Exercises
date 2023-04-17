/*
реализуем функцию randoms, 
возвращающую заданное количество случайных элементов из массива. 
Пусть первым параметром функция принимает массив, а вторым - 
количество элементов, которое следует вернуть.
*/
let array = [1, 2, 3, 4, 5];
let elemsToReturn = 3;

//1. Getting a random index of an element to use in the shuffle function later
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2. Let's shuffle the elements of the array to avoid repetition in numbers
//(we cut each selected element from the array to avoid its repetition in the future)
function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) { //while the arr length > 0
		let random = getRandomInt(0, arr.length - 1); //get the random index from the array in each iteration
		let elems = arr.splice(random, 1); //then cut the elem with this index from the initial array and put it into another array named elems
		let elem = elems[0]; //select an elem in the new array
        result.push(elem); //and push it to the array named result
	}
	
	return result;
}

//3.
function randoms(arr, length) {
    let slicedArr = arr.slice(0, length); 
	return slicedArr;
}

let threeRandomNums = randoms(shuffle(array), elemsToReturn)




console.log(shuffle(array) );