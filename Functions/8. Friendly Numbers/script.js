/*
Friendly Numbers

Числа являются дружественными, 
если сумма собственных делителей (с числом 1, но без самого числа) первого числа 
равна второму числу и, наоборот, сумма делителей второго числа равна первому.

Примером таких чисел может служить пара 220 и 284. 
Собственными делителями числа 220 являются следующие числа: 
1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110.
Сумма этих чисел 284. 
Собственными делителями числа 284, являются числа 1, 2, 4, 71, 142 
и сумма этих чисел равна 220.

*/

//Task: сделаем функцию isFreindly, которая параметром будет принимать два числа 
//и возвращать `friendly`, если числа дружественные друг с другом и `not friendly`, если нет:

let number1 = 284;
let number2 = 220;

function getDivisors(num) {
    let arr = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getDivisorSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

function isFriendly(num1, num2) {
    let sum1 = getDivisorSum(getDivisors(num1));
    let sum2 = getDivisorSum(getDivisors(num2));

    if (sum1 == num2 && sum2 == num1) {
        return `friendly`;
    }
    else {
        return `not friendly`;
    }

}

console.log(isFriendly(number1, number2));



//Task: 
//Совершенное число - целое число, равное сумме всех своих собственных делителей 
//(то есть всех положительных делителей, отличных от самого числа). 
//Check if this number is prefect?

let number = 6;

function findDivisors(num) {
    let arr = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

function getPerfect(num) {
    let sum = getSum(findDivisors(num));
    let initialNum = number;

    if (sum == initialNum) {
        return true
    }
    else {
        return false
    }
    
    
}
let result = getPerfect(getSum(findDivisors(number)));

console.log(result)


//Task: Cделайте функцию findPerfect, которая будет находить совершенные числа в заданном диапазоне. 
//Проверьте работу функции в промежутке от 1 до 1000.

function getPerfect(num1, num2) {
    let perfectNums = [];

    for (let i = num1; i <= num2; i++) {
        if (isPerfect(i)) {
            perfectNums.push(i);
        }
    }

    return perfectNums;
}

function isPerfect(num) {
    let sum = getSum(getDivisors(num));
    return num == sum;
}

function getSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

function getDivisors(num) {
    let divisors = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

console.log(getPerfect(1, 1000))


//Task: Сделайте функцию getFreindly, 
//которая будет находить пары дружественных чисел в заданном промежутке 
//и возвращать их в виде двухмерного массива следующего вида:
//[ [220, 284], [1184, 1210], [2620, 2924] ]

//С помощью созданной функции найдите все пары дружественных чисел 
//на промежутке от 1 до 3000.


function getOwnDivisors(num) {
    let arr = []
    
    for (let i = 1; i < num ; i++) {
//Loop 1: number 1 (i = 1; i < 1; i++). The loop will not start
//Loop 2: number 2 (1 in iteration)
//Loop 3: number 3 (1 and 2 in iteration)
//Loop 4: number 4 (1, 2 and 3 in iteration)
//Loop 5: number 5 (1, 2, 3, 4 in iteration).
//Loop 6: number 6 (1, 2, 3, 4, 5 in iteration)
//etc


        
        if (num % i == 0) {
            arr.push(i)
            //Loop 1, number 1 -> []
            //Loop 2, number 2 (2 % 1 == 0) -> [1]
            //Loop 3, number 3 (3 % 1 == 0; 3 % 2 != 0) -> [1]
            //Loop 4: number 4 (4 % 1 == 0; 4 % 2 == 0; 4 % 3 != 0) -> [1, 2]
            //Loop 5: number 5 (5 % 1 == 0; 5 % 2 != 0; 5 % 3 != 0; 5 % 4 != 0) -> [1]
            //Loop 6: number 6 (6 % 1 == 0; 6 % 2 == 0; 6 % 3 == 0, 6 % 4 != 0; 6 % 5 != 0) -> [1, 2, 3]
            //etc

        }
    }
    return arr
}

    
function getSum(arr) {
    let sum = 0
    
    for (let arrElement of arr) {
        sum += arrElement;
    }

    //Receiving the data from the previous function and calculating 
    //the sum of the elements in each array
    return sum
}

function isFriendly(num1, num2) {
    let sum1 = getSum(getOwnDivisors(num1));
    let sum2 = getSum(getOwnDivisors(num2));
   
//Loop 1: the sum of divisors of number 1 compares to all other numbers in the range and their divisor sums
//Loop 2: the sum of divisors of number 2 compares to all othar numbers in the range and their divisor sums;
//etc.
    
    if (sum1 == num2 && sum2 == num1) { // if this condition matches, the function returns true
        return true
    } 
    else {
        return false
    }
}

function getFriendly(numb1, numb2) { // numb1 and numb 2 == 1 and 300
    let arr = []
    
    for (let i = numb1; i < numb2; i++) {
        //numbers from 1 to 299

        for (let j = i + 1; j < numb2; j++) {
             //during the first loop, console.log (i, j) ==
             //(1, 2) (1, 3) (1, 4), (1, 5) ( 1, 6) etc until 299

             //loop 2: (2, 3) (2, 4) (2, 5) (2, 6) etc until 299
             //loop 3: (3, 4) (3, 5) (3, 6) (3, 7) etc until 299

            if (isFriendly(i, j)) { // if this is true
                arr.push([i,j]) //put the numbers to the array as a subarray
            }
        }
    }
    return arr
}

console.log(getFriendly(1, 300))
