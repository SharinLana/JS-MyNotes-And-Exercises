//Если мы хотим СЛОЖИТЬ СТРОКИ как ЧИСЛА, то нужно сначала преобразовать их в числа:
let a = '2';
let b = '3';
let result = Number(a) + Number(b);
console.log(result); // 5

//Этот же код можно оформить иначеЖ
let c = Number('2');
let d = Number('3');
let result2 = c + d;
console.log(result2); // 5


let e = '10';
let f = '20';
console.log(Number(e) + Number(f)); // 30


//Еще примеры:
console.log( Number('2') + Number('3') ); //5
console.log( 2 + Number('3') ); //5
console.log( '2' + Number('3') ); // 23


//Часто для сокращения кода вместо Number перед строкой ставят знак +. 
let g = +'2'; // в переменную запишется число 2
let h = +'3'; // в переменную запишется число 3
console.log(g + h); // выведет 5

let i = '2';
let j = +i; // в b запишется число 2

let k = '2';
let l = '3';
console.log(+k + +l); // выведет 5

let m = +'2';
let n = +'3';
console.log( m + n); // 5


//При попытке преобразовать строку, содержащую не только цифры, но и буквы, к числу,
//функция вернет NaN:
let o = '2s';
let p = '45';
console.log(Number(o) + Number(p)); //NaN
console.log(+o + +p); //NaN
