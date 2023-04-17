/*
Пусть у нас есть вот такая функция, возвращающая анонимную функцию:
*/
/*
function func() {
    return function() {
        return '!';
    }
}

//Так как вызов func() возвращает функцию, 
//то мы можем сразу же и вызвать эту возвращаемую функцию, 
//вот так: func()() - 
//первые круглые скобки получают результат функции func 
//(который сам является функцией), 
//а вторые круглые скобки применяются к результату func.

let result = func()();
console.log(result); 

//or

alert(func()());
*/

//Task: Сделайте функцию func1, которая будучи вызвана вот так: func1()(),
// вернет число 1. 
//Сделайте аналогичную функцию func2, возвращающую число 2. 
//Найдите сумму результатов этих функций.

function func1() {
    return function() {
        return 1;
    }
}

function func2() {
    return function() {
        return 2
    }
}

function getSum(func1, func2) {
    return func1()() + func2()();
}

console.log(getSum(func1, func2)); // 3


/*
Любой уровень вложенности.

Могут быть и такие вызовы функций: func()()() и func()()()() - 
и так далее до бесконечности.
Для этого нужно, чтобы внутренняя функция тоже возвращала функцию, 
та - еще одну и так далее. 

Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
*/
function func3() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                }
            }
        }
    }
}

console.log(func3()()()()()); // !


/*
Параметры
В изученные нами вызовы функций можно передавать параметры.
*/

function func4() {
    return function(str) {
        return str;
    }
}
console.log(func4()('!')); // !

//
function func5(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

console.log(func5(2)(3)); // 5


//Task: Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), 
//вернет сумму переданных в параметры чисел.

function func6(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}
console.log(func6(2)(3)(4)); // 9


//Task: Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), 
//вернет массив переданных в параметры чисел.

function func7(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function() {
                    let arr = [];
                    return arr.concat(num1, num2, num3, num4)
                }
            }
        }
    }
}
console.log(func7(2)(3)(4)(5)())