/* TERNARY OPERATOR */
//Тернарный оператор следует использовать только в самых простых случаях, 
//так как его использование затрудняет понимание кода.

//Для задач, когда в условии происходит запись только одной переменной, 
//существует решение не через if-else, а через тернарный оператор.
let variable = condition ? value1 : value2;

//Например, если мы хотим проверить, есть ли человеку 17 лет,
//то можно использовать if-else:
let age = 16;
let result;
if (age >= 18) {
    result = true;
}
else {
    result = false;
}
console.log(result); //false

//А можно - ternary operator:
let age1 = 19;
let result1 = age1 >= 18 ? true : false;
console.log(result1)


//Можно не записывать результат в переменную, а сразу вывести в консоль:
let age3 = 17;
console.log( age3 >= 18 ? true: false );



//Задача: Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. 
//Запишите в переменную result число 1, если переменная num больше или равна нулю, 
//и число -1, если переменная num меньше нуля.

let num = 7;
let result2 = num >= 0 ? 1 : -1;
console.log(result2)