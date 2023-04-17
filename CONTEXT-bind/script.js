/*
метод bind позволяет навсегда привязать контекст к функции. 
Своим результатом этот метод возвращает новую функцию, 
внутри которой this будет иметь жестко заданное значение.
*/

let elem = document.getElementById('elem');

function func(param1, param2) {
    console.log(this.value + param1 + param2); // text 12
}

let newFunc = func.bind(elem); // newFunc - копия функции func, но this в ней всегда будет равен elem
newFunc('1', '2');


//Task 2

let input = document.querySelector('#inp');

function func2(name, lastName) {
    console.log(this.value + " " + name + " " + lastName );
}

let newFunc2 = func2.bind(input);

newFunc2('John', 'Smith');
newFunc2('Lana', 'Sharin')