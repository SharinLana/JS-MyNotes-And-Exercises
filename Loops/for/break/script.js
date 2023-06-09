/* Break in Cycles For, While and Other */

//Инструкция break досрочно завершает работу цикла.
//Давайте завершим цикл, как только нам встретится число 3:
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break; // выйдем из цикла
	}
}


let array = [3, 5, 7, 3, 0, 4, 8, 15];
for (let elem of array) {
    if (elem == 0) {
        console.log(`Found!`);
        break;
    }
}


//Задача: Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr2 = [3, 6, 13, 27, -6, 3, 67];
let sum = 0;
for (let elem of arr2) {
    if (elem >= 0) {
        sum += elem;
    }
    else {
        break;
    }
}
console.log(sum); //49


//Задача: Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let arr3 = [5, 18, 2, 7, 9, 3, 9];
for (i = 0; i <= arr3.length; i++) {
    if (arr3[i]== 3) {
        console.log(i); // 5 (индекс)
        break;
    }
}


//Задача: Определите, сколько целых чисел, начиная с числа 1, нужно сложить, 
//чтобы сумма получилась больше 100.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum2 = 0;

for (i = 1; i <= arr4.length; i++) {
    sum2 += i;
    if (sum2 > 100) {
        console.log(arr4[i]); //15 целых чисел надо сложить
        break;
    }
}
console.log(sum2); //чтобы их сумма получилась > 100

