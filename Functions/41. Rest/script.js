/*
если в функцию передать лишние параметры, это не приведет к ошибке:

let str1 = 'a';
let str2 = 'b';
let str3 = 'cde';

function func(s1, s2) {
    console.log(s1); // a
    console.log(s2); // b
}
func(str1, str2, str3);

Оператор rest позволяет получить все лишние параметры в виде массива. 
Для этого в функцию добавляется еще один параметр (обязательно последним),
перед которым пишутся 3 точки:

*/

let str1 = 'a';
let str2 = 'b';
let str3 = 'cde';

function func(s1, s2, ...rest) {
    console.log(s1); // a
    console.log(s2); // b
    console.log(...rest) //[cde]
}
func(str1, str2, str3);


/* Все параметры в массив */
//В функции вообще может не быть параметров, но при этом в нее можно добавить rest:

function func2(...rest) {
    console.log(...rest); // [a b cde]
}

func2(str1, str2, str3);



//Task: Напишите функцию, которая будет принимать параметрами 
//произвольное количество чисел 
//и возвращать их среднее арифметическое 
//(сумма делить на количество).

function getAvg(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum / nums.length;
}
console.log(getAvg(1, 2, 3, 4, 5, 6)); // 3.5


//Task: Давайте сделаем функцию unite, 
//которая параметрами будет принимать произвольное количество массивов 
//и сливать их в один двухмерный.

function unite(...rest) {
    return rest;
}
console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9])); //  [Array(3), Array(3), Array(3)]



//Task: Давайте теперь реализуем функцию merge, 
//параметрами принимающую произвольное количество массивов 
//и сливающую их элементы в один массив.

function merge(...arrs) { // here we added all the arguments into the function (by using REST)
    //so we've got here anested array [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    return [].concat(...arrs); //and here we used SPREAD to merge the elements of a nested array
}
console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));


//Task: Давайте напишем функцию getInt, 
//которая будет находить пересечение любого количества массивов.
function getInt(...arrs) {
    let newArr = [];
    let arr0 = arrs.shift(); //here we extracted the very first array from all the arrays

    for (let elem of arr0) {
        if(inArrays(elem, arrs)) {
            newArr.push(elem);
        }
    }

    return newArr;
}

function inArrays(elem, arrs) {
    for (let arr of arrs) {
        if (!inArray(elem, arr)) {
            return false;
        }
    }
    return true;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

console.log(getInt([1, 5, 2, 3], [3, 4, 5, 6], [5, 6, 7, 8])); // [5, 3]

