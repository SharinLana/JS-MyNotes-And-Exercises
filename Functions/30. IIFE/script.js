/*
Immediately Invoked Function Expression (IIFE) -
прием, который позволяет вызвать функцию прямо на месте ее объявления.

+function() {
	alert('!'); // выведет '!'
}();

Наличие плюса в данном случае является обязательным условием, 
так как без него функция станет Function Declaration, 
а их на месте (да еще без имени) вызывать нельзя. 
Конечно же, вместо плюса может быть все, что угодно (exclamation point, round brackets, etc), - 
главное, чтобы наша функция была функциональным выражением.

*/

!function() {
	alert('!');
}(); // !

// function() {
// 	alert('!');
// }(); - will not invoke the function because it's a function declaration, not an  expression

let result = function() {
	return '!';
};
		
alert(result());


//
let result2 = function() {return 1;}() + function() 
	{return 2;}(); 
alert(result2);


/*
Часто функцию, вызывающуюся на месте, в таком случае берут в круглые скобки, 
хотя в этом и нет нужды.
Это делается для того, чтобы сразу было видно, что функция вызывается на месте:
*/

//Option 1:
(function() {
	alert('!');
}());

//Option 2:
(function() {
    alert('!');
})();


let result3 = (function() {
	return '!';
});

console.log(result3());



/* Параметры */

(function(str) {
    console.log(str);
})(`You see me`);

//
(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2); // 3


/* Nested Functions and Immediate Invoke */

(function() {
    return function() {
        console.log(`nested`);
    }
}) ()();

(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    }
})(1)(2); // 3


/* перед вызовом функции на месте всегда необходимо ставить точку с запятой, вот так: */
let num = 1

;(function() {
	console.log(num); // выведет 1
})();

//if you don't obey this rule, the you can see an uncaught type error as a result
let str = 'str'

(function() {
	console.log(1); //type error
})();