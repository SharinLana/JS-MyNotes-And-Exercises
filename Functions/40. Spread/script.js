/*
Когда оператор spread стоит перед массивом, 
он разделяет этот массив на отдельные значения, 
превращая массив в набор параметров, необходимых для вызова функции.
*/
/*
//Spread is an alternative of the following way to transfer 
//the elements of an array as parameters.
//Without Spread we would do it like this:
let arr = [1, 2, 3];
func(arr[0], arr[1], arr[2]);

//With spread:
let arr2 = [1, 2, 3];
func(...arr2);
//or
func(...[1, 2, 3]);
*/

//Task: Найдите с помощью spread сумму элементов массива.
let arr3 = [1, 2, 3, 4, 5];

function getSum(n1, n2, n3, n4, n5) {
    return n1 + n2 + n3 + n4 + n5;
}
console.log(getSum(...arr3)); // 15


// You can also transfer arguments as a parameters this way:
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 
		+ n8); 
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], 
	...[7, 8]) ); // 260;



//Spread is very helpful in such cases as Math.max usage:
let arr4 = [1, 2, 3, 4, 5]
let max = Math.max(...arr4); // instead of Math.max.apply(null. arr) or Math.max(arr[0], arr[1], arr[2], etc)


//task: Дан массив с числами. 
//Используя Math.min и spread выведите на экран 
//минимальное значение массива.
let arr5 = [34, 5, 7, 12, 3];
let min = Math.min(...arr5);

console.log(min); // 3;


/* Оператор spread и слияние массивов */
let arr6 = ['a', 'b', 'c'];
let arr7 = [1, 2, 3];

function combine(arr6, arr7) {
    let arr = arr7.splice(1, 0, ...arr6);
    return arr7;
}
console.log(combine(arr6, arr7)); //(6) [1, 'a', 'b', 'c', 2, 3]

//OR
let arr8 = ['a', 'b', 'c'];
let arr9 = [1, ...arr8, 2, 3];
console.log(arr9); // (6) [1, 'a', 'b', 'c', 2, 3]


//
let arr10 = [1, 2, 3];
let arr11 = [4, 5, 6];

let arr12  = ['a', ...arr10, 'b', 'c', ...arr11];
console.log(arr12); //['a', 1, 2, 3, 'b', 'c', 4, 5, 6]



/* Оператор spread, примененный к строке, разбивает эту строку посимвольно 
...'abcde'; // разобьет строку в символы через запятую: 'a','b','c','d','e' 
*/
let array = [...'abcde']; // получим массив ['a', 'b', 'c', 'd', 'e'] 

//
let array2 = [...'12345'];
console.log(array2); // ['1', '2', '3', '4', '5']

//
let array3 = ['a', ...'12345'];
console.log(array3); // ['a', '1', '2', '3', '4', '5']



/* Оператор spread не применим к числам:
let arr = [...12345]; // будет ошибка

Для решения проблемы следует преобразовывать число в строку, вот так:
*/
let array4 = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5'] 