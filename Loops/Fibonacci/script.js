/* Getting Fibonacci Numbers */

//Числа Фибоначчи - ряд чисел, каждое из которых равно сумме ДВУХ предыдущих

let one = 0;
let two = 1;

for (let i = 1; i <= 16; i++) {
	let current = one + two;
	
	one = two;
	two = current;
	
	console.log(current); //выведет 16 чисел Фибоначчи друг за другом.
}


//Задача: вывести все числа Фибоначчи в промежутке от 1 до 100 
//и найти сумму этих чисел

let num1  = 0;
let num2 = 1;
let sum = 0;

for (let i = 1; i <= 100; i++) {
    let current = num1 + num2;
    num1 = num2;
    num2 = current;

    sum += current;

    if (current >= 100) {
        break;
    }

    console.log(current); //выведет все числа Фибоначчи от 1 до 100
}
console.log(sum); // выведет сумму этих чисел (375)



//Задача: Найдите ряд чисел, каждое из которых равно сумме ТРЁХ предыдущих, 
//а первые три числа равны 0, 1 и 2.
let number1 = 0;
let number2 = 1;
let number3 = 2;

for (i = 1; i <= 15; i++) {
    let current = number1 + number2 + number3;
    number1 = number2;
    number2 = number3;
    number3 = current;

    console.log(current); //выведет 15 чисел, каждое из которых равно сумме трех предыдущих
}


//Задача: найдите ряд чисел, каждое из которых равно сумме двух предыдущих, 
//и сложите полученные числа между собой
let numA = 0;
let numB = 1;
let arr = [];
let sum2 = 0;

for (let i = 1; i <= 10; i++) {
    let current = numA + numB;

    numA = numB;
    numB = current; 

    arr.push(current);
}
for (let j = 0; j < arr.length; j++) {
    sum2 = arr[j] + sum2;
}

console.log(arr);
console.log(sum2);



