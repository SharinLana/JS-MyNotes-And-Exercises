/*
Пусть у нас даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

Можно заметить, что числа 2 и 3 присутствуют и в одном, и во втором массиве. 
Такие общие элементы называются пересечением массивов.

*/

//Task: Давайте напишем функцию getInt, которая будет находить 
//пересечение массивов и возвращать пересечение этих массивов. 
//Пусть пересечение возвращается в виде массива, 
//состоящего из общих элементов.

let array1 = [1, 2, 3, 5, 6];
let array2 = [4, 5, 6, 7, 8];

//мне нужна функция, которая параметром принимает элемент, 
//а вторым - массив, и проверяет, есть ли такой элемент в этом массиве.
function inArray(elem, arr) {
    if (arr.indexOf(elem) == -1) {
        return false
    }
    else {
        return true
    }
}

//нужно перебрать циклом элементы одного массива и в каждой итерации 
//проверять, есть ли такой элемент во втором массиве. 
//Если есть - добавим его в результат.
function getInt(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        // if (inArray(elem, arr2)) {
        //     result.push(elem);
        // }

        if (inArray(elem, arr2)) { //transferred data from arr2 to inArray()
            result.push(elem);
        }
    }

    return result; 
}

console.log(getInt(array1, array2))