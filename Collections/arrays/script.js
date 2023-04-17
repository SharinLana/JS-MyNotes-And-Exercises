/* Arrays */

let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            //array content calls ELEMENTS

let arrTwo = [1, 2, 3, 4, 5, 6, 7] //numbers in the arrays go without brackets

//В МАССИВЕ МОЖНО ХРАНИТЬ:
//строки,
//числа,
//все допустимые типы данных JavaScript (true, false, null)
//смешивать все вышеупомянутые элементы между собой

let arrThree = [1, 2, 'a', 'b', null, true, false];



/* ВЫВОДИМ ОТДЕЛЬНЫЙ ЭЛЕМЕНТ МАССИВА */
let arrFour = ['one', 'two', 'three', 'four'];
console.log(arrFour[0]); //выведет one; знак в квадратных скобках называется КЛЮЧ
console.log(arrFour[1]);//выведет two



/* АРИФМЕТИКА С ЭЛЕМЕНТАМИ МАССИВА */
let arrFive = ['a', 'b', 'c', 'd'];
console.log(`${arrFive[0]} + ${arrFive[1]} + ${arrFive[2]} + ${arrFive[3]}`);

let arrSix = [1, 2, 3];
console.log(arrSix[0] + arrSix[1] + arrSix[2]);

let arrSeven = [2, 5, 3, 9];
let result = (arrSeven[0] * arrSeven[1]) + (arrSeven[2] * arrSeven[3]);
console.log(result)



/* ДЛИНА МАССИВА */
let arrEight = [1, 2, 3];
console.log(arrEight.length) // выведет 3

//Чтобы проверить значение последнего символа в массиве, не зная его индекс,/
//используем формулу arr[arr.length - 1]:
let str = '12345';
let last = str[str.length - 1];
if (last == 5) {
	console.log('!');
}



/* ИЗМЕНЕНИЕ МАССИВА */
let arrNine = ['a', 'b', 'c'];
arrNine[0] = '!';
console.log(arrNine); // выведет ['!', 'b', 'c']


let arrTen = ['a', 'b', 'c'];
arrTen = [1, 2, 3];
console.log(arrTen); //выведет [1, 2, 3]



/* ПЕРЕЗАПИСЬ ЭЛЕМЕНТОВ */
 let arrEleven = ['a', 'b', 'c'];
 arrEleven[0] += '!';
 arrEleven[1] += '!';
 console.log(arrEleven) //выведет ['a!', 'b!', c]


 let arrTwelve = [1, 2, 3];
 arrTwelve[0] += 3;
 arrTwelve[1] += 3;
 arrTwelve[2] += 3;
 console.log(arrTwelve); //выведет [4, 5, 6]



 /* ИНКРЕМЕНТ И ДЕКРЕМЕНТ */
 let arrThirteen = [1, 2, 3, 4];
 arrThirteen[0]++;
 ++arrThirteen[1];
 arrThirteen[2]--;
 --arrThirteen[3];
 console.log(arrThirteen); //[2, 3, 2, 3]


 let arrFourteen = [1, 2, 3];
 arrFourteen[0]++;
 ++arrFourteen[1];
 arrFourteen[2]++;
 console.log(arrFourteen); //[2, 3, 4]



 /* ЗАПОЛНЕНИЕ ПУСТОГО МАССИВА */
 let arrFifteen = []; // создаем пустой массив
 arrFifteen[0] = 'a'; // в ключ 0 добавим элемент 'a'
 arrFifteen[1] = 'b'; // в ключ 1 добавим элемент 'b'
 arrFifteen[2] = 'c'; // в ключ 2 добавим элемент 'c'
console.log(arrFifteen); // выведет ['a', 'b', 'c']

let array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
console.log(array);

//Массив не обязательно должен быть изначально пустым - там уже что-то может быть, 
//но мы все равно можем добавлять новые элементы:

let arrSixteen = ['a', 'b', 'c']; // объявляем массив с элементами
arrSixteen[3] = 'd'; // добавляем еще один элемент
console.log(arrSixteen); // выведет ['a', 'b', 'c', 'd']

let arrayTwo = [1, 2, 3];
arrayTwo[3] = 4;
arrayTwo[4] = 5;
console.log(arrayTwo); //[1, 2, 3, 4, 5]



/* НЕСУЩЕСТВУЮЩИЕ ЭЛЕМЕНТЫ */
//Обращение к несуществующему элементу массива вернет undefined. Никакой ошибки при этом не будет. 
let arrSeventeen = ['a', 'b', 'c'];
console.log(arrSeventeen[10]); // выведет undefined



/* РАЗРЕЖЕННЫЙ МАССИВ */
let arrEighteen = [1, 2, 3];
arrEighteen[5] = '!';
console.log(arrEighteen); // выведет [1, 2, 3, undefined, undefined, '!']
//длина массива при этом также увеличится
console.log(arrEighteen.length); //6


