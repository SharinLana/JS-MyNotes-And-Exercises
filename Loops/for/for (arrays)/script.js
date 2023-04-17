/* Loop FOR for Arrays */
/*
//Вывести все элементы массива в консоль с помощью FOR
let arr = [1, 2, 3, 4, 5];
//В этом массиве - 5 элементов с индексами от 0 до 4.
//Запустим цикл for от 0 до 4 и внутри этого цикла 
//будем выводить элементы массива, обращаясь к ним как arr[i]:
for (let i = 0; i <= 4; i++) { 
    console.log(arr[i]);
}

//Недостаток условия в примере выше в том, что мы вручную установили длину цикла (4)
//Если, к примеру, у нас будет массив с неопределенным количеством элементов, длину которого мы не знаем,
//то формулу лучше прописать так:
let arr1 = [1, 2, 3, 4, 5];
for (let j = 0; j <= arr1.length - 1; j++) { //вариант: j < arr1.length. Результат будет тот же самый
    console.log(arr1[j]); 
}

let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let k = 0; k <= arr2.length - 1; k++) {
    console.log(arr2[k]);
}



//Условия if в цикле for

//К примеру, нужно перебрать и вывести в консоль только четные числа из массива
let arr3 = [1, 2, 3, 4, 5];
for (let i2 = 0; i2 < arr3.length; i2++) {
    if (arr[i2] % 2 == 0) {
        console.log(arr[i2]);
    }
}


//Сумма элементов массива через цикл for
let arr4 = [1, 2, 3, 4, 5];
let result = 0;

for (j2 = 0; j2 < arr4.length; j2++) {
    result += arr[j2];
}
console.log(result); // 15

*/

//Задача: С помощью цикла for найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let sum2 = 0;
for (i = 0; i < arr.length; i++) {
    sum2 += arr[i] ** 2;
}
console.log(sum2)


//Задача: С помощью цикла for и оператора if 
//выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr2 = [2, 5, 9, 15, 1, 4];
for (j = 0; j < arr2.length; j++) {
    if (arr2[j] > 3 && arr2[j] < 10) {
        console.log(arr2[j]); // 5, 9, 4
    }
}


//Задача: Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.
let arr3 = [1, 2, -3, -4, 5, 6, -7];
let sum3 = 0;

for (k = 0; k < arr3.length; k++) {
    if (arr3[k] >= 0) {
        sum3 += arr3[k];
    }
}
console.log(sum3); // 14


//Задача: Найдите среднее арифметическое элементов массива (сумму разделить на количество). 
let arr4 = [1, 2, 3, 4, 5];
let sum4 = 0;
let result2 = 0;

for (i3 = 0; i3 < arr4.length; i3++) {
     sum4 += arr4[i3]; //15
     result2 = sum4 / arr4.length;
}
console.log(result2); //5


//Задача: Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arr5 = [10, 20, 30, 50, 235, 3000];
for (i4 = 0; i4 < arr5.length; i4++) {
    if (String(arr5[i4])[0] == 1 || String(arr5[i4])[0] == 2 || String(arr5[i4])[0] == 5) {
        console.log(arr5[i4]); // 10, 20, 50, 235
    }
}


//Задача: Выведите элементы этого массива в обратном порядке.
let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6.reverse();
for (a = 0; a < arr7.length; a++) {
    console.log(arr7[a]);
}


//Задача: С помощью цикла выведите на экран все элементы, 
//значение которых совпадает с их порядковым номером в массиве.
let array = [1, 1, 2, 4, 4, 5];
for (b = 0; b < array.length; b++) {
    if (array[b] == b) {
        console.log(array[b]); //1 , 2, 4, 5
    }
}


//Задача: С помощью цикла for и функции document.write 
//выведите каждый элемент массива с новой строки.
let arrayA = ['a', 'b', 'c', 'd'];
for (c = 0; c < arrayA.length; c++) {
    document.write(`<br> ${arrayA[c]} <br> `);
}


//Задача: С помощью цикла for и функции document.write 
//выведите каждый элемент массива в отдельном абзаце.
let arrayB = ['a', 'b', 'c', 'd'];
for (d = 0; d < arrayB.length; d++) {
    document.write(`<p> ${arrayB[d]} </p>`)
}


//Задача: Составьте массив дней недели. 
//С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (e = 0; e < week.length; e++) {
    if (week[e] === 'Sunday' || week[e] === 'Saturday') {
        document.write(` <b>${week[e]}</b>, `);
    }
    else {
        document.write(` ${week[e]}, `)
    }
}


//Задача: С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
//Номер текущего дня должен храниться в переменной day.
let week2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay;

for (f = 0; f < week2.length; f++) {
    if (week2[f] === 'Sunday') {
        document.write(`<p><i>${week2[f]}</i>,</p> `);
    }
    else {
        document.write(`<p>${week2[f]},</p> `);
    }
}


//ЗАПОЛНЕНИЕ МАССИВОВ ЧЕРЕЗ ЦИКЛ

//Раньше мы заполняли пустой массив так:
let arrayC = [];
arrayC[0] = 1;
arrayC[1] = 2;
arrayC[2] = 3;
arrayC[3] = 4;
arrayC[4] = 5;

//Но можно доверить эту задачу циклу for
let arrayD = [];
for (let i = 0; i <= 4; i++) {
    arrayD[i] = i + 1;
}
console.log(arrayC); 

//Еще пример
let arrayE = [];
for (let i = 0; i <= 100; i++) {
    arrayE[i] = i + 1;
}
console.log(arrayE); 


//ЗАПОЛНЕНИЕ МАССИВА МЕТОДОМ Push()

//Элементы добавляются в конец "очереди" по порядку (пример без использования цикла)

let arrayL = [1, 2];

arrayL.push(3);
arrayL.push(6);
arrayL.push(8);
arrayL.push(9);
arrayL.push(12);

console.log(arrayL); // [1, 2, 3, 6, 8, 9, 12]

//Push в цикле:
let arrayM = [1, 2];
for (let i = 0; i <= 8; i++) {
    arrayM.push(i);
}
console.log(arrayM); // [1, 2, 0, 1, 2, 3, 4, 5, 6, 7, …]


//Задача: Используя цикл и метод push заполните массив числами от 1 до 10.
let arrayN = [];
for (let i = 1; i <= 10; i++) {
    arrayN.push(i);
}
console.log(arrayN); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 


//Задача: Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arrayO = [];
for (let i = 1; i <= 10; i++) {
   arrayO.push('x');
}
console.log(arrayO);



//ЗАПОЛНЕНИЕ МАССИВА ИЗ ДРУГОГО МАССИВА

//Давайте переберем элементы массива arrayP циклом
// и запишем в новый массив только элементы с четными числами:

let arrayP = [1, 2, 3, 4, 5, 6];
let arrP = [];

for (let elem of arrayP) {
    if (elem % 2 == 0) {
        arrP.push(elem);
    }
}
console.log(arrP); // [2, 4, 6]


//Задача: Дан массив с числами. 
//Переберите его циклом и запишите в новый массив только положительные из чисел.

let arrayQ = [1, 2, 3, -4, 5, -6, -7];
let arrQ = [];

for (let elem of arrayQ) {
    if (elem > 0) {
        arrQ.push(elem);
    }
}
console.log(arrQ); // [1, 2, 3, 5]



//СОЗДАНИЕ РАЗРЕЖЕННОГО МАССИВА (с пропущенными элементами)

//К примеру, мы хотим записать в массив все четные числа в промежутке от 2 до 100.
//Для того, чтобы цикл перебирал четные числа, нам придется в каждой итерации увеличивать 
//счетчик цикла на 2. Из-за этого массив получится с пропусками (undefined),
//и длина массива с учетом undefined elements будет 101:

let arrayF = [];
for (let i = 2; i <= 100; i += 2) {
    arrayF[i] = i;
}
console.log(arrayF); //[2: 2, 4: 4, 6: 6, 8: 8, 10: 10, 12: 12, 14: 14, 16: 16, 18: 18, 20: 20, …] (101)


//Для решения проблемы можно просто ввести два счетчика: 
//счетчик i пусть отсчитывает четные числа, 
//а счетчик j - итерации цикла (всего их будет 50).
//В конце процесса мы присвоим каждой итерации (j) четное число (i):

let arrayG = [];
for (let i = 2, j = 0; i <= 100; i += 2, j++) { //i - выбирает четные числа ; j - считает количество проходов (итераций) этого цикла
    arrayG[j] = j; //каждой итерации присвоили четное число
}
console.log(arrayG); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, …] (50)



//Задача: С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arrayH = [];
for (let i = 1, j = 0; i <= 99; i += 2, j++) {
    arrayH[j] = i;
}
console.log(arrayH); 



//ИЗМЕНЕНИЕ МАССИВА В ЦИКЛЕ

let arrayI = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayI.length; i++) {
    arrayI[i] *= 2;
}
console.log(arrayI); //[2, 4, 6, 8, 10]


//Задача: Дан массив с числами. 
//Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.

let arrayJ = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayJ.length; i++) {
    arrayJ[i] = arrayJ[i] ** 2;
}
console.log(arrayJ); //[1, 4, 9, 16, 25]


//Задача: Уменьшить каждый элемент массива на 1 сокращенным способом

let arrayK = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayK.length; i++) {
    arrayK[i]--;
}
console.log(arrayK); // [2, 3, 4, 5, 6]



//ПЕРЕВОРОТ МАССИВА ЗАДОМ-НАПЕРЕД (БЕЗ метода reverse())

let arrA = [1, 2, 3, 4, 5];
let result = [];

for (let i = arrA.length - 1; i >= 0; i--) {
	result.push(arrA[i]); //используем arrA[i], а не просто i, потому что n только i выведет индекс элемента, 
                        // но не сам элемент.
}

console.log(result); // выведет [5, 4, 3, 2, 1]


//Задача: Перевернуть следующий массив:
let arrB = ['a', 'b', 'c', 'd', 'e'];
let arrReversed = [];

for (let i = arrB.length - 1; i >= 0; i--) {
    arrReversed.push(arrB[i]); //используем arrA[i], а не просто i, потому что n только i выведет индекс элемента, 
                                // но не сам элемент.
}

console.log(arrReversed); // ["e", "d", "c", "b", "a"]



//ПОДСЧЕТ КОЛИЧЕСТВА ОДИНАКОВЫХ ЭЛЕМЕНТОВ В МАССИВЕ С ПОМОЩЬЮ ЦИКЛА

//Давайте подсчитаем количество элементов 'a' в этом массиве.
// Для этого будем перебирать массив циклом и каждый раз, когда нам будет встречаться
// элемент с нужным значением, будем увеличивать какой-нибудь счетчик на единицу:
let arrC = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for (let elem of arrC) {
    if (elem === 'a') {
        counter++;
    }
}
console.log(counter); // 3


//Задача: Подсчитайте количество цифр 3 и 2 в этом массиве.
let arrD = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
let counter2 = 0;

for (let elem of arrD) {
    if (elem == 3) {
        counter3++;
    }
    else if (elem == 2) {
        counter2++;
    }
}
console.log(counter2); // 3
console.log(counter3); // 4



//Задача: Подсчитайте количество каждой буквы в массиве и выведите результат в виде объекта
let arrE = ['a', 'b', 'c', 'a', 'a', 'b'];
let objE = {};

for (let elem of arrE) {
    if (objE[elem] === undefined) {
        objE[elem] = 1;
    }
    else {
        objE[elem]++;
    }
}
console.log(objE); // {a: 3, b: 2, c: 1}


//Можно решить предыдущую задачу иным способом
let arrF = ['a', 'b', 'c', 'a', 'a', 'b'];
let objF = {a: 0, b: 0, c: 0};

for (let elem of arrF) {
    objF[elem]++;
}
console.log(objF); // {a: 3, b: 2, c: 1}



//ПОЛУЧЕНИЕ СОСЕДНИХ ЭЛЕМЕНТОВ В МАССИВЕ С ПОМОЩЬЮ ЦИКЛА

//В этом случае, цикл должен сделать на одну итерацию меньше,
//чтобы остановиться на первом элементе (перед первым элементом нет соседа, 
//поэтому при стандартном цикле с отсчетом от 0, программа выведет undefined) 
//Поэтому просто начнем цикл с 1, а не с 0.

let arrG = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < arrG.length; i++) {
    console.log(arrG[i - 1]); //dsводим именно ЭЛЕМЕНТЫ, не индексы!
}

//Задача: найти сумму предыдущего и текущего элементов массива:
let arrI = [1, 2, 3, 4, 5, 6];
let sumI = 0;
for (let i = 1; i < arrI.length; i++) {
    sumI = arrI[i - 1] + arrI[i]; 
    console.log(sumI);
}
console.log(sumI); // 11 (выводит сумму двух последних элементов)


//Задача: в каждой итерации цикла выведите СЛЕДУЮЩИЙ (не предыдущий) элемент массива.
let arrJ = [1, 2, 3, 4, 5];
for (let i = 0; i < arrJ.length - 1; i++) {
    console.log(arrJ[i + 1]);
}

//Задача: в каждой итерации цикла выведите СЛЕДУЮЩИЙ (не предыдущий) элемент массива
//и суммируйте его с текущим
let arrK = [1, 2, 3, 4, 5];
let sumK = 0;
for (let i = 0; i < arrK.length - 1; i++) {
    sum = arrK[i] + arrK[i + 1];
    console.log(sum);
}


//Задача: в каждой итерации цикла вывести два предыдущих элемента массива
let arrL = [1, 2, 3, 4, 5];
for (let i = 2; i < arrL.length; i++) {
    console.log(String(arrL[i - 1]) + String(arrL[i - 2]));
}


//Задача: в каждой итерации цикла выводилась 
//сумма двух предыдущих элементов и текущего элемента массива.
let arrM = [1, 2, 3, 4, 5];


for (let i = 2; i < arrM.length; i++) {
    let sumFinal = 0;
    let sumOf2 = arrM[i - 1] + arrM[i - 2];
    sumFinal = sumOf2 + arrM[i];
    console.log(sumFinal); // 6, 9, 12
}


//Задача: в каждой итерации цикла выведите 
//сумму предыдущего, текущего и следующего элементов массива.
let arrN = [1, 2, 3, 4, 5];

for (let i = 1; i < arrN.length - 1; i++) {
    let sum = arrN[i] + arrN[i - 1] + arrN[i + 1];
    console.log(sum); // 6, 9, 12
}



//ЗАПОЛНЕНИЕ МАССИВОВ С НАКОПЛЕНИЕМ СТРОКИ

//Давайте заполним массив следующим образом: 
//в первый элемент запишем 'x', во второй 'xx', в третий 'xxx' и так далее.
let arr8 = [];
let str8 = '';

for (let i = 0; i < 5; i++) {
    str8 += 'x';
    arr8.push(str8);
}
console.log(arr8);


let arr9 = [];
let str9 = '';

for (let i = 0; i < 5; i++) {
    str9 += 'xx';
    arr9.push(str9);
}
console.log(arr9);


//Задача: массив следующим образом: 
//в первый элемент запишем '1', во второй '22', в третий '333' и так далее.
let arr10 = [];

for (let i = 1; i < 5; i++) {
    let str = '';
    for (let j = 0; j < i; j++ ) {
        str += i;
    }
    arr10.push(str);
}
console.log(arr10);


//Задача: С помощью цикла сформируйте следующий массив:
//['11111', '22222', '33333', '44444', '55555']
let arr11 = [];

for (let i = 1; i < 6; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str += i;
    }
    arr11.push(str);
}
console.log(arr11);

