/*
Метод Math.round выполняет округление до ближайшего целого числа

Math.round(число)
*/

console.log(Math.round(6.4)); // 6
console.log(Math.round(6.6)); // 7
console.log(Math.round(6.5)); //7
console.log(Math.round(6.49999)); // 6


//Задача: Найдите квадратный корень из 587. 
//Округлите результат в большую и меньшую стороны, 
//запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let numB = 587;
let obj = {'floor': 0, 'ceil': 0, 'round': 0};

let toBiggerNum = Math.ceil(Math.sqrt(numB));
let toSmallerNum = Math.floor(Math.sqrt(numB));
let toClosestNum = Math.round(Math.sqrt(numB));

obj.floor = toSmallerNum;
obj.ceil = toBiggerNum;
obj.round = toClosestNum;

console.log(obj)