/* TYPE OF */
//В JavaScript шесть примитивных типов данных: string, number, boolean, null, undefined, symbol. 
//Objects - это сложные типы данных

//Оператор typeof  для объекта выводит 'object'
console.log(typeof {}); // выведет 'object'
console.log( typeof {a: 1, b: 2, c: 3} );

//Если проверить через typeof массив, то результатом также будет 'object', а не 'array'
console.log(typeof []); // тоже выведет 'object'
console.log( typeof [1, 2, 3] );

//Дело в том, что на самом деле в JavaScript нет отдельного типа данных для массивов - 
//каждый массив представляет собой частный случай объекта.


//КАК ЖЕ ОПРЕДЕЛИТЬ МАССИВ ЛИ ОБЪЕКТ?
//На помощь придет функция Array.isArray() с ответами true (да, это array) or false (нет, это не array);
console.log( Array.isArray([]) ); // выведет true (квадратные скобки/ square brackets)
console.log( Array.isArray([1, 2, 3]) ); //true

console.log( Array.isArray({}) ); // выведет false (фигурные скобки / braces)
console.log( Array.isArray({a: 1, b: 2, c: 3}) ); //false