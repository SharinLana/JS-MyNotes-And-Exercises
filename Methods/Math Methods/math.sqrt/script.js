/* 
Метод Math.sqrt возвращает квадратный корень числа.

Math.sqrt(положительное число)
*/

console.log(Math.sqrt(4)); // 2

console.log(Math.sqrt(15)); // 3.872983346207417

console.log(Math.sqrt(-100)); // NaN (because of the negative number)

console.log(Math.sqrt(245)); // 15.652475842498529


//Задача: Дан массив. Найдите квадратный корень из суммы кубов его элементов. 
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum3 = 0;
let result = 0;

for (let elem of arr) {
    sum3 += Math.pow(elem, 3);
    result = Math.sqrt(sum3);
}
console.log(result); //101.25709851659784

 