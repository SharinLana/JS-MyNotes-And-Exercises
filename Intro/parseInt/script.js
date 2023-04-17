/* parseInt() и parseFloat() */

//Иногда строки в JS идут вперемешку с цифрами, и нужно отделить одних от других
//Это делается с помощью функции parseInt():
let num = '12px';
let numOnly = parseInt(num);
console.log(numOnly); // 12

//Если число дробное, что parseInt() выводит только его целую часть
let num2 = '12.5px';
let number = parseInt(num2);
console.log(number); // 12

//В этом случае используется функция parseFloat():
let num3 = '12.5px';
let number2 = parseFloat(num3);
console.log(number2); // 12.5

//parseFloat() можно использовать и для того, чтобы отделить число от букв:
let num4 = '12px';
let numOnly2 = parseFloat(num4);
console.log(numOnly2); // 12


let first = '5px';
let second = '6px';
let sum = parseFloat(first) + parseFloat(second);
console.log(sum); //11

let one = '5.5px';
let two = '6.25px';
let result = parseFloat(one) + parseFloat(two) + 'px';
console.log(result); // 11.75