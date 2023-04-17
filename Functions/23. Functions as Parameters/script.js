//Task: Сделайте функцию test, параметрами принимающую 3 функции. 
//Передайте в нее первым параметром функцию, возвращающую 1, 
//вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. 
//Выведите на экран сумму результатов функций.

console.log(test(
    function() {return 1},
    function() {return 2},
    function() {return 3}
));

function test(func1, func2, func3) {
    return func1() + func2() + func3();
}


/* Именованные функции */

//Функции, которые передаются параметрами, не обязательно должны быть анонимными.
function get1() {
    return 1;
}
function get2() {
    return 2;
}
function get3() {
    return 3;
}

function test1(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test1(get1, get2, get3);

//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression.
let res1 = function() {
    return 1;
};

let res2 = function() {
    return 2;
};

let res3 = function() {
    return 3;
}

test2(res1, res2, res3);

function test2(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}



//Task: Вызовите функцию, передав ей параметром анонимную функцию, 
//которая параметром будет принимать число и возвращать его куб.

test3(function(num) {
    return num ** 3;
});

function test3(func) {
    console.log(func(3));
}


//Task: Переделайте код так, чтобы передаваемая функция была не анонимной, 
//а была определена как Function Declaration с именем func.
function func(num) {
    return num ** 3;
}

test4(func);

function test4(f) {
    console.log(f(3));
}


//Task: Переделайте передаваемую функцию на Function Expression с тем же именем func.
let func2 = function(num) {
    return num ** 3;
};

test5(func2);

function test5(func) {
    console.log(func(4));
}


//Task: Пусть передаваемая функция теперь принимает два параметра 
//и возвращает их сумму. 
//При вызове передаваемая функции внутри test передайте 
//в передаваемую функцию число 2 и число 3. Выведите результат.
function getSum(num1, num2) {
    return num1 + num2;
}

result(getSum);

function result(func) {
    console.log(func(2, 3));
}


//Task: Пусть функция test6 первым параметром принимает число, 
//а вторым и третьим параметрами - функции, также параметром принимающие числа.
//Пусть функция test возвращает сумму результатов переданных функций:
//Вызовите функцию test6, первым параметром передав число 3,
//вторым параметром функцию, возводящую число в квадрат, 
//а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.

function getSquare(num) {
    return num ** 2;
}

function getCube(num) {
    return num ** 3;
}

test6(3, getSquare, getCube);

function test6(num, func1, func2) {
    console.log( func1(num) + func2(num) );
}


//Task: сделаем функцию, которая параметром будет принимать массив, 
//а вторым параметром - функцию. 
//Переданная функция должна будет применится к каждому элементу массива:

function test7(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result7 = test7([1, 2, 3], getSquare);

function getSquare(num) {
    return num * num;
}

console.log(result7);

//Alternatve syntax for the previous task

function test8(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result8 = test8([1, 2, 3], function(num) { //function in this case has to be anonymous
	return num ** 3;
});

console.log(result8);
