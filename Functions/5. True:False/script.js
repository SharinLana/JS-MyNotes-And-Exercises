/*
конструкции if, возвращающие булевы значения, 
можно переписывать в сокращенной форме.
*/

//Пусть у нас есть функция с if:
function func(a, b) {
	if (a > b) {
		return true;
	} else {
		return false;
	}
}
//Перепишем ее в сокращенной форме, убрав if/else
function f(a, b) {
    return a > b;
}
let res = f(5, 4);
console.log(res);


//
function equal(a, b) {
    return a == b;
}
console.log(equal(4, 4));


//
function notEqual(a, b) {
    return a != b;
}
console.log(notEqual(5, 9));


//
function sum(a, b) {
    return a + b >= 10;
}
console.log(sum(5, 4));


//
function compare(num) {
    return num >= 0;
}
let number = -15;
console.log(compare(number));