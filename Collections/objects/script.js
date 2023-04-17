/* OBJECTS */

//Объекты нужны для того, чтобы указывать ключи массивов [0], [1], [2] и т.д. в привычном порядке,
//то есть, не начиная с 0
//В фигурных скобках ЭЛЕМЕНТЫ прописываются в формате КЛЮЧ: ЗНАЧЕНИЕ

//Сравним массив, в котором ключи начинаются с 0:
let arr = ['mon', 'tue', 'wed', 'thur', 'fr', 'sat', 'sun'];
console.log(arr[0]); //'mon'

//с объектом, в котором счет ключей пойдет с привычной единицы
//и к 'mon' теперь можно обратиться с ключом 1, а не 0
let obj = {
    1: 'mon',
    2: 'tue',
    3: 'wed', //etc
}
console.log(obj); //'mon'



/* НЕУПОРЯДОЧЕННОСТЬ ЭЛЕМЕНТОВ */

//В массивах элементы идут в строгом порядке: тот, что находится в начале списка, всегда приобретет 
//ключ [0]
//В объектах - не так. Если в объекте переставить местами элементы, то их ключ не изменится
//Сравним:
//МАССИВ
let array = ['blue', 'red', 'yellow'];
console.log(array[0]); //выведет 'blue'
//теперь поменяем элементы местами
array = ['red', 'blue', 'yellow'];
console.log(array[0]); //выведет 'red'

//ОБЪЕКТ
let object = {
    1: 'blue',
    2: 'red',
    3: 'yellow',
}
console.log(object[1]); //выведет blue
//теперь поменяем элементы местами
let objectTwo = {
    2: 'red',
    3: 'yellow',
    1: 'blue',
}
console.log(object[1]); //выведет blue

//Кроме того, числовые ключи не обязательно должны иметь все значения без дырок, подобно массиву. 
//У нас могут быть произвольные числа и это не будет приводить ни к каким проблемам 
//(подобно разреженности у массивов):
// Данный объект корректный:
let objTwo = {7: 'value1', 50: 'value2', 23: 'value3'};



/* ГДЕ ПОСМОТРЕТЬ ОБЪЕКТ ЦЕЛИКОМ */

//Если целиком, то - в консоли
//При выводе в модальном окне alert отразится [Object object]. 
//Через alert можно получить доступ только к отдельным элементам объекта, но не ко всему объекту целиком



/* СТРОКОВЫЕ КЛЮЧИ */

//В объектах ключи могут быть не только числовыми, но и строковыми. 
//При этом эти ключи-строки в кавычки брать не нужно:
let objThree = {
    key1: 1,
    key2: 3,
    key3: 9,
};
//Но чтобы обратиться к элементу со строковым ключом, 
//в квадратных скобках его уже нужно брать в кавычки:
console.log(objThree['key1']);
//но в данном случае можно обратиться к элементу объекта иначе:
console.log(objThree.key1); 
//но так допустимо обращаться только к тем ключам, которых 
//при создании объекта не обязательно брать в кавычки (см. главу "ОСОБЕННОСТИ НАПИСАНИЯ СТРОКОВЫХ КЛЮЧЕЙ ОБЪЕКТА").


let objFour = {
    a: 1, //пример строкового ключа a
    b: 2, //пример строкового ключа b
    c: 3, //пример строкового ключа c
}
let sum = objFour['a'] + objFour['b'] + objFour['c'];
console.log(sum);



/* ОСОБЕННОСТИ НАПИСАНИЯ СТРОКОВЫХ КЛЮЧЕЙ ОБЪЕКТА */

//Строковые ключи НЕ МОГУТ:
//начинаться с цифры (1key - ОШИБКА!!!)
//иметь внутри себя дефис (key-one = ОШИБКА!!!)
//иметь пробел и т.п.(key one = ОШИБКА!!!)

//Исключения
//Однако всё вышеперечисленное сработает, как нужно, если будет заключено в скобки:
let objFive = {
    '1a': 1,
    '2b': 2,
    'c-c': 3,
}
let result = objFive['1a'] + objFive['2b'] + objFive['c-c'];
console.log(result)
//На самом деле в кавычки можно брать все ключи объекта, 
//но более принято записывать их без кавычек (там, где это можно).


let objSix = {
    key1: 1,
    key2: 2, 
    key3: 3,
}
let sumResult = objSix.key1 + objSix.key2 + objSix.key3;
let sumResultAlt = objSix['key1'] + objSix['key2'] + objSix['key3'];//альтернатива
console.log(sumResult)
console.log(sumResultAlt)


let user = {
    'name': 'Svetlana',
    'patronymic': 'Gennadyevna',
    'surname': 'Sharina',
}
let fullName = user['name'] + " " + user['patronymic'] + " " + user['surname'];
console.log(fullName)


let date  = {
    'year': 2022,
    'month': 03,
    'day': 30,
}
let todaysDate = date['year'] + '-' +  date['month'] + '-' + date['day'];
console.log(todaysDate);



/* ЗАПОЛНЕНИЕ ПУСТОГО ОБЪЕКТА */
//Происходит так же, как и у массива:
let objectThree = {};

objectThree[1] = 'a';
objectThree[2] = 'b';
objectThree[3] = 'c';
console.log(objectThree);

// альтернативное оформление:
let objectFour = {};
objectFour['key1'] = 'a';
objectFour['key2'] = 'b';
objectFour['key3'] = 'c';
console.log(objectFour);

//еще один способ:
let objectFive = {};
objectFive.key1 = 'a';
objectFive.key2 = 'b';
objectFive.key3 = 'c';
console.log(objectFive);


//ДЛИНА ОБЪЕКТА: Object.keys().length
//Длина объекта измеряется иначе, чем длина массива.
//Если в массиве достаточно написать название переменной и добавить length: arr.length,
//то с объектом всё сложнее
let objectSix = {
    a: 1,
    b: 2,
    c: 3,
}
objectLength = Object.keys(objectSix).length;
console.log(objectLength);