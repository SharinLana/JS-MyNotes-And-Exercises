/*

Если в функции одна строка кода, 
то в стрелочных функциях можно не писать return и фигурные скобки:

*/

let func2 = (num1, num2) => num1 * num2;

/*
The regular way would be:
let func2 = function(num1, num2) {
    return num1 * num2;
}
 */


/*
Если параметр стрелочной функции один - круглые скобки можно не писать:
*/

let func = num => num * num;


/* Если в функции вообще нет параметров - нужно писать пустые круглые скобки: */

let func3 = () => alert(`Hello!`);


/* Особое преимущество стрелочные функции имеют в качестве коллбэков. */

let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

/*
The regular way:

let result = filter([1, 2, 3, 4, 5], function(elem) {
    return elem % 2 == 0;
})

*/

let result2 = every([1, 2, 3, 4, 5], elem => elem > 0);



//Task: If elem multiplied by its index is more that 10, return true
function every(arr, callback) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i));
    }

    return newArr;
}

let result3 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

console.log(result3);


//Task: if the sum of items in each sub array multiplied by the array index is more than 10, 
//return true

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function getSums(arr) {
    let sums = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        sums.push(sum);
    }

    return sums;
}

let sums = getSums(array);

function every(arr, callback) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i));
    }

    return newArr;
}

let result4 = every(sums, (elem, index) => elem * index > 10);
console.log(result4)