/* Function Decraration 
доступны, даже если обратится к ним до того, как они были объявлены.

При объявлении функции как Function Declaration после closing фигурной скобки
 } точка с запятой не ставится:
*/
func();

function func() {
	console.log('!');
}

/* Function Expression 
создаются в момент выполнения кода и недоступны выше. 
Поэтому такой код выдаст ошибку.

после } ставится точка с запятой:
*/
func1();

let func1 = function() {
    console.log('!'); //Reference Error
};


//
checkStatus();

function checkStatus() {
    console.log(`Available`);
}

//
check();

let check = function() {
    console.log(`Not available`); // Reference Error
};

