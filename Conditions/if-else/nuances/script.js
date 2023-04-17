
//В переменной arr содержится некоторый массив с числами. 
//Напишите условие, которое проверит, что в массиве 3 элемента. 
//Если это так, выведите на экран сумму элементов массива.
let arr = [1, 2, 3];
if (arr.length == 3) {
    alert(`There are 3 elements in the array.
    Their sum = ${arr[0] + arr[1] + arr[2]}`);
}


//ПРОВЕРКА СИМВОЛА ЧИСЛА
//можно обращаться к символам строки, но нельзя - к цифрам числа:
let num = 12345;
console.log(num[0]); // выведет undefined

//Для решения проблемы преобразуем наше число в строку:
let num1 = 12345;
let str = String(num1);
if (str[0] == 1) {
	console.log('true'); // выведет 'true'
} else {
	console.log('false');
}

//Не обязательно вводить новую переменную,
// можно применить [0] непосредственно к результату функции String 
//(но лучше использовать первый вариант, т.к. с ним строки кода получаются короче):
let num2 = 12345;
if (String(num2)[0] == 1) {
	console.log('true'); // выведет 'true'
} else {
	console.log('false');
}


//Задача: Дано целое число. Напишите условие, которое проверит, 
//равна ли последняя цифра этого числа нулю.
let num3 = 20;
let str1 = String(num3);
if (str1[str1.length - 1] == 0) {
    alert(`The last digit is 0`);
}



//Задача: Пусть в переменной num хранится число. Определите, четное число или нет. 
let num4 = 56;
if (num4%2 == 0) {
    alert(`It's an even number`);
}
else {
    alert(`Odd number`);
}



//Задача: Еесли число делится с остатком, вывести этот остаток на экран:
let a = 15;
let b = 2;
let rest = a % b;
if (rest == 0) {
    alert(`Number is fully divisible`);
}
else {
    alert(`Remainder of a number = ${rest}`);
}

//Задача: Проверить, делится ли число на 3:
let number = 16;
let rest1 = number % 3;
if (rest1 == 0) {
    alert(`The number is a multiple of three`);
}
else {
    alert(`This number is not a multiple of three`);
}


//Задача. В переменной month лежит какое-то число из интервала от 1 до 12. 
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 17;
if (month == 12 || month <= 2) {
    alert (`It's a winter month`);
}
else if (month > 2 && month <= 5) {
    alert (`It's a spring month`);
}
else if (month > 5 && month <= 8) {
    alert (`It's a summer month`);
}
else if (month > 8 && month < 12) {
    alert (`It's a fall month`);
}
else {
    alert (`There's no month with such a number`);
}


//Задача: Дана строка, состоящая из символов, например, 'abcde'. 
//Проверьте, что первым символом этой строки является буква 'a'. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.
let string1 = 'abcde';
let firstSymbol = string1[0];
if (firstSymbol == 'a') {
    alert (`Yes`);
}
else {
    alert (`No`);
}


//Задача: Дано число, например, 12345. 
// Проверьте, что первым символом этого числа является цифра 1, 2 или 3. 
//Если это так - выведите 'да', в противном случае выведите 'нет'. 
let number4 = 12345;
let string2 = String(number4);
if (string2[0] == 1 || string2[0] == 2 || string2[0] == 3) {
    alert (`Yes`);
}
else {
    alert (`No`);
}


//Задача: Дано трехзначное число. Найдите сумму цифр этого числа.
let num6 = 234;
let string3 = String(num6);
let digitSum = Number(string3[0]) + Number(string3[1]) + Number(string3[string3.length - 1]);
console.log(digitSum);


//Задача: Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.
let  num7 = 123132;
let string7 = String(num7);
let fristThree = Number(string7[0]) + Number(string7[1]) + Number(string7[2]);
let secondThree = Number(string7[3]) + Number(string7[4]) + Number(string7[string7.length - 1]);
if (fristThree == secondThree) {
    alert (`The sums are equal`);
}
else {
    alert (`Not equal`);
}
