/* FILLING OBJECTS THROUGH THE LOOP For */

//Без использования цикла, заполнение пустого объекта происходит так:
let obj = {};

obj['a'] = 1;
obj['b'] = 2;
obj['c'] = 3;
obj['d'] = 4;

console.log(obj); // {a: 1, b: 2, c: 3, d: 4}


//Теперь посмотрим, как заполнить пустой объект с помощью двух массивов.
//Элементы первого массива станут ключами объекта, элементы второго - значениями
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let objA = {};

for (let i = 0; i <= 4; i++) {
    let key = keys[i];
    let value = values[i];

    objA[key] = value;
}
console.log(objA); //{a: 1, b: 2, c: 3, d: 4, e: 5}

//Альтернативный метод (без ввода дополниельных переменных):
let keysB = ['a', 'b', 'c', 'd', 'e'];
let valuesB = [1, 2, 3, 4, 5];
let objB = {};

for (let i = 0; i <= 4; i++) {
    objB[keysB[i]] = valuesB[i];
}
console.log(objB); //{a: 1, b: 2, c: 3, d: 4, e: 5}


//Задача: Создайте из  массива следующий объект:
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let arr8 = ['a', 'b', 'c', 'd', 'e'];
let obj8 = {};

for (let i = 0; i <= 4; i++) {
    let key = i + 1;
    let value = arr8[i];

    obj8[key] = value;
    
}
console.log(obj8); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}


//Задача: Создайте из этого массива следующий объект:
//let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr9 = ['a', 'b', 'c', 'd', 'e'];
let obj9 = {};

for (let i = 0; i <= 4; i++) {
    let key = arr9[i];
    let value = i + 1;

    obj9[key] = value;
}
console.log(obj9); //{a: 1, b: 2, c: 3, d: 4, e: 5}


//Задача: Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами.
//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let objC = {};

for (let i = 0; i <= 6; i++) {
    let key = arr1[i];
    let value = arr2[i];

    objC[key] = value;
}
console.log(objC); 


//Задача: Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, 
//а значениями - их названия.
let arr3 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let objD = {};

for (let i = 0; i <= 6; i++) {
    let key = arr4[i];
    let value = arr3[i];

    objD[key] = value;
}
console.log(objD); //{1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс"}


//Задача: Запишите ключи этого объекта в один массив, а значения - в другой.
let objX = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let objKeys = [];
let objVal = [];

for (let keys in objX) {
    let key = keys;
    let value = objX[keys];

    objKeys.push(key);
    objVal.push(value);
}
console.log(objKeys);
console.log(objVal);


//Задача: Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 
let objW = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arrW = [];

for (let key in objW) {
    if (String(objW[key])[0] == 1 || String(objW[key])[0] == 2 ) {
        arrW.push(objW[key]);
    }
}
console.log(arrW); // [125, 225, 128, 145, 281]


//ЗАПОЛНЕНИЕ ОБЪЕКТА ИЗ ДРУГОГО ОБЪЕКТА

//Допустим, нужно перебрать объект циклом for-in и записать в новый объект элементы,
//значения которых являются четными числами:

let objE = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};

for (let key in objE) {
 if (objE[key] % 2 == 0) {
    result[key] = objE[key];
 }
}

console.log(result); // {b: 2, d: 4}


//Задача: Запишите в новый объект те элементы, 
//значения которых расположены в промежутке от 10 до 20.
let objF = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let objG = {};

for (let key in objF) {
    if (objF[key] >= 10 && objF[key] <= 20) {
        objG[key] = objF[key];
    }
}
console.log(objG); // {a: 12, c: 13, e: 17}


//Задача: Запишите в новый объект дни недели, номера которых являются нечетными числами.
let objH = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
let objI = {};

for (let key in objH) {
    if (key % 2 == 0) {
        objI[key] = objH[key];
    }
}
console.log(objI); // {2: "вт", 4: "чт", 6: "сб"}



//ИЗМЕНЕНИЕ ЗНАЧЕНИЙ ЭЛЕМЕНТОВ В ЦИКЛЕ

//К примеру, нам нужно увеличить каждый элемент объекта в 2 раза
let objJ = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

for (let key in objJ) {
    objJ[key] *= 2;
}
console.log(objJ); // {a: 2, b: 4, c: 6, d: 8, e: 10}


//Задача: возведите каждый элемент этого объекта в квадрат.
let objK = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

for (let key in objK) {
    objK[key] = objK[key] ** 2;
}
console.log(objK); 



//ОБМЕН (SWAPING) КЛЮЧЕЙ И ЗНАЧЕНИЙ В ОБЪЕКТЕ С ПОМОЩЬЮ ЦИКЛА

//Пусть в следующем объекте буквы станут значениями, а цифры - ключами
let objL = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objM = {}
 
for (let key in objL) {
    objM[objL[key]] = key;
}
console.log(objM); 


let objN = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let objO = {};

for (let key in objN) {
    objO[objN[key]] = key;
}
console.log(objO); // {пн: "1", вт: "2", ср: "3", чт: "4", пт: "5", …}



//СУММИРОВАНИЕ КЛЮЧЕЙ И ЗНАЧЕНИЙ ОБЪЕКТА

//Задача: Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let valueSum = 0;
let keySum = 0;
let result2 = 0;

for (let key in obj) {
    keySum += Number(key); //переводим в число, т.к. ключи объекта - это строки
    valueSum = obj[key] + valueSum;
    
    result2 = keySum / valueSum;
}
console.log(result2);
