/* IN OPERATOR */

//С помощью оператора in можно проверять наличие свойства в объекте. 
//Пусть у нас дан вот такой объект:
let obj = {a: 1, b: 2, c: 3};
//Давайте проверим наличие в нашем объекте какого-нибудь свойства:
console.log('b' in obj); // выведет true
//А теперь выполним проверку для несуществующего свойства:
console.log('x' in obj); // выведет false

let objTwo = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log('e' in objTwo); //true
console.log('f' in objTwo); //false