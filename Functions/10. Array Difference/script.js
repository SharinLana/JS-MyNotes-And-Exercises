/*
Пусть у нас даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

Можно заметить, что числа 1, 4 и 5 не присутствуют одновременно 
в обоих массивах. Такие элементы называются разностью массивов.

*/
let arr1 = [1, 4, 5];
let arr2 = [2, 3, 4, 5];

//First, we have to find the numbers that don't exist in arr2
function getFirstDiff(array1, array2) {
    let result = [];

    for (let elem of array1) {
        if (array2.indexOf(elem) == -1) {  //"if such elem doesn't exist in arr2... "
            result.push(elem);   //"...put it in the array named result"
        }
    }

    return result;
}

//Second, we have compare elements of the second array (arr2) to the first array
//and put the results (through concatenation) into a new array

function getDiff(array1, array2) {
    let res = [];

    res = res.concat(getFirstDiff(array1, array2));
    res = res.concat(getFirstDiff(array2, array1));

    return res;
}

console.log(getDiff(arr1, arr2))