/*
Lucky Tickets are the tickets 
in which the sum of the first 3 numbers are equal
to the sum of the last 3 numbers

Let's create a function that finds all the 6-digit lucky numbers 
from the range
*/

// 1. Create a function that checks if the numbers is lucky
function isLucky(num) {
    let str = normalizeNum(num);

    let sum1 = +str[0] + +str[1] + +str[2];
    let sum2 = +str[3] + +str[4] + +str[5];
    
    return sum1 == sum2;
}

//2. Adding zeros in front of the numbers that starts from 0 or 00
//(for example, the length of the number 006123 = 4, and we have to make it = 6 ) 
function normalizeNum(num) {
    let str = String(num)

    if (str.length == 4) {
        str = '00' + str;
    }
    else if (str == 5) {
        str = '0' + str;
    }

    return str;
}


//3. Setting a range for possible lucky numbers
function getLuckyTickets() {
    let arr = [];

    for (let i = 1001; i < 999999; i++) { //sum1 can be == sum2 startring from the number 1001 (1 == 1)
        if (isLucky(i)) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(getLuckyTickets())




//Task: Давайте теперь обобщим наш код так, 
//чтобы в билете было не 6 цифр, а любое заданное количество.

//1. We made a function that normalizes the amount of digits to an even number: 2 or 4, or 6, or 8, etc
function norm(num) {
    let str = String(num);

    if (str.length % 2 !== 0) {
        str = '0' + str;
    }

    return str;
}

//2. Getting sums of the first and last halves of each number
function lucky(num) {
    let str = norm(num);
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < str.length /2; i++) {
        sum1 += +str[i]
    }
    for (let i = str.length / 2; i < str.length; i++) {
        sum2 += +str[i];
    }

    return sum1 == sum2;
}

//3. Finding the lucky numbers in the range
function getLucky() {
    let luckyArr = [];

    for (let i = 1; i <= 999999; i++) {
        if (lucky(i)) {
            luckyArr.push(i);
        }
    }

    return luckyArr;
}

console.log(getLucky())




//Task: Create a function that takes the amount of digits in the tickets and finds 
//all the lucky numbers amongst them.
//For example: find all the lucky numbers amongst the numbers with 4 digits, 
//starting from the lowest 

// 1. Checking if the first half of the string with numbers is equal to the last half.
function isLucky(num) {
    let arr = num.split('');
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length/2; i++) {
        sum1 += +arr[i];
    }
    for (let i = arr.length/2; i < arr.length; i++) {
        sum2 += +arr[i];
    }
    return sum1 == sum2;
}

// 2.  Receiving the number (not string!) and the even amount of digits 
//and increasing the number of the 'num' digits to the 'length' amount 
//by adding zeros in front of the 'num'
function normalizeNum(num, length) {
    let str = String(num);

    while (length > str.length) {
        str = '0' + str;
    }
    return str;
}

// 3. We transfer the desirable number of digits for each ticket as a parameter.
//Then we sorting through the numbers in a range (the first and las numbers of the range will be calculated later)
//and checking if the number in the range is Lucky or not
function getLuckyTickets(digitsAmount) {
    let result = [];

    for (let i = Number(getFirst(getLast(digitsAmount))); i <= getLast(digitsAmount); i++) {

        if (isLucky(normalizeNum(i, digitsAmount))) {
            result.push(i);
        }
    }
    return result;
}
    

// 4. Getting the last number of the range 
//(it'll always be 9s, the question is - how many 9s will be needed for the length of each ticket)
function getLast(num) {
    let result = '';
   
    while(result.length < num) {
        result += 9;
    }
    return result;
}

// 5. Getting the starting point of the range.
//The lastHalf is the number of digits in the last half of the getLast(num).
//For example, for the 999999 the last half length will be 3 (999)
//And we need to form the starting number in accordance to the following formula:
//length 4: starting number is 101
//length 6: starting number is 1001;
//length 8: starting number is 10001; etc
function getFirst(num) {
    let lastHalf = String(num).length;
    let zeros = '';

    while ((lastHalf / 2) - 1 > zeros.length) {
        zeros += '0'
    }

    return 1 + zeros + 1; 
}

console.log(getLuckyTickets(4))