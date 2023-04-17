/*
можно сделать массив, состоящий из функций.
It will be filled with function expressions
*/

let arr = [
	function() {alert('1')},
	function() {alert('2')},
	function() {alert('3')},
];

alert(arr[0]); // увидим исходный код первой функции
alert(arr[0]()); // this way we'll make the function work

//Можно также перебрать наш массив с функциями циклом и в этом цикле вызвать каждую из функций:
for (let func of arr) {
    func();
}


//Task: Сделайте массив arr с тремя функциями. 
//Пусть первая возвращает через return число 1, 
//вторая - число 2, третья - число 3.

let array = [
    function() {return (1)},
    function() {return (2)},
    function() {return (3)}
];

//выведите на экран число 3, вызвав соответствующую функцию.
console.log(array[2]()); // 3

//Используя созданный вами массив array найдите сумму результатов функций (без цикла).
let sum = array[0]() + array[1]() + array[2]();
console.log(sum); // 6

//Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.
for (let func of array) {
    console.log(func());
}