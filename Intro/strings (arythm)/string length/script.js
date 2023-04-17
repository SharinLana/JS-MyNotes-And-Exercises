/* String Length */

let str = 'abcde';
console.log(str.length); // 5

//Свойство length можно применять непосредственно к строке:
console.log('abcde'.length); // 5

//Пробел также является символом:
console.log('ab cd'.length); // 5

/* Чтобы узнать длину NUMBER, нужно перевести number в STRING: */
let num = 1234;
let string = String(num);
console.log(string.length); //5

//или
let num2 = 12345;
let symbol = String(num2).length; 
console.log(symbol); //5