/* Special Values */

//Вот они: undefined, null, true, false, NaN, Infinity, -Infinity.

/* UNDEFINED */
//Такое значение будет у переменной, если мы объявили ее, но не записали в нее значение:
let a;
console.log(a); // undefined

let b = undefined;
console.log(b); // undefined


/* NULL (nothing) */
//В переменной ничего не лежит

let c = null;
console.log(c); // null


/* TRUE & FALSE */
//Правда и Ложь = 1 и 0
//Они используются для таких вещей, которые предполагают два варианта ответа - да или нет.
let d = true;
console.log(d); // true

let e = false;
console.log(e); // false


/* NaN (not a number) */
//Такое значение получается тогда, когда вы пытаетесь делать 
//математические операции не с числами, а с чем-то другим. 
//К примеру, такое значение даст попытка умножить строку на число:
console.log('abc' * 3); //  NaN
console.log(NaN + 1); //NaN

let str1 = 'abc';
let str2 = 'def';
let result = str1 * str2;
console.log(result); //NaN


/* Infinity & -Infinity (бесконечность и минус бесконечность) */
// Такие значения получаются, если какое-то число поделить на ноль - 
//в этом случает JavaScript не выдает ошибку, как в других языках программирования, 
//а возвращает эти значения:

console.log(10 / 0); //infinity
console.log(-10 / 0); // -infinity