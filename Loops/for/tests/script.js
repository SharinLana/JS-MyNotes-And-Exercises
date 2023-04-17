
//Задача 1: вывести все элементы массива в порядке очереди в консоль
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//Задача 2: вывести элементы массива в консоль друг за другом задом наперед
let arrA = ['a', 'b', 'c', 'd'];
for (let i = arrA.length - 1; i >= 0; i--) {
    console.log(arrA[i]);
}


//Задача 3: создать второй массив, в котором элементы первого массива будут расположены задом наперед
let arrayB = [1, 2, 3, 4, 5];
let arrB = [];

for (let i = arrayB.length - 1; i >= 0; i--) {
    arrB.push(arrayB[i]);
}

console.log(arrB);


//Задача 4: вывести в пустой массив четные числа первого массива
let arrayC = [1, 2, 3, 4, 5, 6];
let arrC = [];

for (let i = 0; i < arrayC.length; i++) {
    if (arrayC[i] % 2 == 0) {
        arrC.push(arrayC[i]);
    }
}
console.log(arrC);


//Задача 5: заполнить пустой массив 6-ю буквами 's'
let arrD = [];

for (let i = 0; i <= 5; i++) { 
    arrD.push('s');
}
console.log(arrD);


//Задача 6: создать следующий массив [44 45 46 54 55 56 64 65 66] двумя способами
//Способ 1:
let arrE = [];

for (let i = 4; i <= 6; i++) {
    for (let j = 4; j <= 6; j++) {
        let result = String(i) + String(j);
        arrE.push(result);
    }
}
console.log(arrE);

//Способ 2:
let arrF = [];

for (let i = 44; i <= 66; i += 10) {
    for (let j = 0; j <= 2; j++) {
        let result = i + j;
        arrF.push(result);
    }
}
console.log(arrF);


//Задача 7: изменить массив так, чтобы все буквы 'a' в нем стали 'A'
let arrG = ['a', 'b', 'a', 'c', 'a', 'd'];

for (let i = 0; i < arrG.length; i++) {
    if (arrG[i] === 'a') {
        arrG[i]= 'A';
    }
}
console.log(arrG);


//Задача 8: изменить массив так, чтобы четные числа в нем умножились на 4
let arrH = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arrH.length; i++) {
    if (arrH[i] % 2 == 0) {
      arrH[i] *= 4;
    }
}
console.log(arrH);


//Задача 9: заполнить пустой массив только нечетными числами на отрезке от 1 до 50. Длина получившегося массива должна быть без пробелов
let arrI = [];

for (let i = 1, j = 0; i <= 50; i += 2, j++) {
    arrI[j] = i;
}
console.log(arrI);


//Задача: Возьмите из  массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let arrJ = [10, 20, 30, 40, 21, 32, 51];
let sumJ = 0;

for (elem of arrJ) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2) {
        sumJ += elem;
    }
}
console.log(sumJ); // 51


//Задача: Перебрать числа в массиве и найти такие, в которых первая цифра на один больше второй
//Найти сумму этих чисел и вывести их в отдельную переменную
let arrK = ['21', '32', '34', '43', '45', '54', '55'];
let sumK = 0;

for (let elem of arrK) {
    if (elem[0] - elem[1] == 1) { //поскольку в масиве у нас - строки, то в условии мы не делаем перевод чисел в строку, чтобы получить доступ к индексу
        sumK += +elem;
    }
}
console.log(sumK); //150

//Задача: если первая цифра числа в объекте = 1 или 2, то суммируй эти объекты
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
		sum += obj[elem];
	}
}

console.log(sum);