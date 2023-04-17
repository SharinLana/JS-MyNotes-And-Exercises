/*
Метод Math.random возвращает случайное дробное число от 0 до 1 (не включая 1).

Math.random()
*/

/*
Получение случайного дробного числа между min и max:
function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

Получение случайного целого числа между min и max:
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/

//Задача: Вывести случайное число от 0 до 1
console.log(Math.random()); // 0.9572386709190406


//Задача: вывести  случайное целое число от 10 до 100:
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(10, 100)); // 88


//Задача: вывести случайное дробное число от 10 до 100
function getRandomArbitary(min, max) {
    return Math.random() * (max - min + 1) + min;
} 
console.log(getRandomArbitary(10, 100)); 78.0302208170086


//Задача: Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(getRandomInt(1, 100)); //85


//Задача: С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr = [];

for (let i = 0; i < 10; i++) {
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min+1)) + min;
    }
    arr[i] = getRandomNum(1, 100);
    
}
console.log(arr)
