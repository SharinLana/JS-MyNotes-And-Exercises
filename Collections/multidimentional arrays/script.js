/* Multidimentional Arrays */

//Элементы массива могут быть не только строками и числами, но и массивами. 
//В этом случае у нас получится массив массивов или многомерный массив.
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];

//Приведенный выше массив является двухмерным, 
//так как внутри одного массива расположены другие подмассивы 
//и уже в этих подмассивах нет других массивов.

//Чтобы вывести какой-либо элемент из двухмерного массива 
//следует писать уже не одну пару квадратных скобок, а две:
let arrA = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];

console.log(arrA[0][1]); // выведет 'b'
console.log(arrA[1][2]); // выведет 'f'


let arrB = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arrB[3][2]); //l
console.log(arrB[1][1]); //e
console.log(arrB[2][0]); //g
console.log(arrB[0][0]); //a


//Задача: Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arrC = [[1, 2], [3, 4], [5, 6]];
let sumC = arrC[0][0] + arrC[0][1] + arrC[1][0] + arrC[1][1] + arrC[2][0] + arrC[2][1];
console.log(sumC); //



//THREE-DIMENTIONAL ARRAY

//Для вывода элементов из такого массива 
//уже необходимо написать три квадратные скобки:
let arrD = [
	[
		['a', 'b'],
		['c', 'd'],
	],
	[
		['e', 'f'],
		['g', 'h'],
	],
	[
		['i', 'j'],
		['k', 'l'],
	],
];

console.log(arrD[0][0][0]); //a
console.log(arrD[2][1][0]); //k


//Задача: обращаясь к каждому элементу массива найдите сумму всех его элементов
let arrE = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sumE = arrE[0][0][0] + arrE[0][0][1] + arrE[0][1][0] + arrE[0][1][1] + arrE[1][0][0] + arrE[1][0][1] + arrE[1][1][0] + arrE[1][1][1];
console.log(sumE); //36


//ARBITRARY ARRAYS (произвольные массивы)
//Вручную, без цикла, найдите сумму элементов этого массива.
let arrF = [
	[1, 2, 3, 
		[4, 5, 
			[6, 7]
		]
	], 
	[8, 
		[9, 10]
	]
];
let sumF = arrF[0][0] + arrF[0][1] + arrF[0][2] +
arrF[0][3][0] + arrF[0][3][1] + arrF[0][3][2][0] +
arrF[0][3][2][1] + arrF[1][0] + arrF[1][1][0] + arrF[1][1][1];
console.log(sumF); // 55

//Alternate way (using a loop):
let arr1 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]]; 
let sum = 0;

for (let elem of arr1) {
    for (let subElem of elem) {
        if (typeof subElem !== 'object') {
            sum += subElem;
        }
        else {
            for (let el of subElem) {
                if (typeof el !== 'object') {
                    sum += el;
                }
                else {
                    for (let item of el) {
                        sum += item
                    }
                }
            }
        }
    }
}

console.log(sum)



//ПЕРЕБОР МНОГОМЕРНЫХ МАССИВОВ

//Выведем все элементы двухмерного массива в консоль
let arrG = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let subArr of arrG) {
	for (let elem of subArr) {
		console.log(elem);
	}
}

//задача: с помощью вложенных циклов найдите сумму элементов массива
let arrH = [[1, 2, 3], [4, 5], [6]];
let sumH = 0;

for (let subArr of arrH) {
	for (let elem of subArr) {
		sumH += elem;
	}
}

console.log(sumH); // 21

//Alternative Way (classic for nested loop)
let arrJ = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let i = 0; i < arrJ.length; i++) {
	for (let j = 0; j < arrJ[i].length; j++) {
		console.log(arrJ[i][j]);
	}
}

//Задача: С помощью классического цикла for найдите сумму элементов массива.
let arrK = [[1, 2, 3], [4, 5], [6]];
let sumK = 0;

for (let i = 0; i < arrK.length; i++) {
	for (let j = 0; j < arrK[i].length; j++) {
		sumK += arrK[i][j];
	}
}
console.log(sumK); // 21


//Задача: С помощью вложенных классических циклов for
// найдите сумму элементов этого массива.
let arrL = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumL = 0;

for (let i = 0; i < arrL.length; i++) {
	for (let j = 0; j < arrL[i].length; j++) {
		for (let k = 0; k < arrL[i][j].length; k++) {
			sumL += arrL[i][j][k];
		}
	}
}

console.log(sumL); // 36


//ЗАПОЛНЕНИЕ МНОГОМЕРНЫХ МАССИВОВ С ПОМОЩЬЮ ЦИКЛОВ

//Пусть теперь мы хотим в цикле создать какой-нибудь многомерный массив с числами.
//Например, вот такой двухмерный массив: [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
//Применим два вложенных цикла. 
//Внешний цикл будет создавать подмассивы, а внутренний - заполнять эти подмассивы числами:

let arrM = [];

for (let i = 0; i < 3; i++) {
	arrM[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arrM[i][j] = j + 1; // заполняем подмассив числами
	}
}

console.log(arrM);

//Вместо обращения arr[i][j] можно использовать метод push:
let arrN = [];

for (let i = 0; i < 3; i++) {
	arrN[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arrN[i].push(j + 1);
	}
}

console.log(arrN);


//Задача: Сформируйте с помощью двух вложенных циклов следующий массив:
//[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arrO = [];

for (let i = 0; i < 3; i++) {
	arrO[i] = [];
	for (let j = 0; j < 5; j++) {
		arrO[i].push(j + 1);
	}
}
console.log(arrO); 


//Задача: Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']] 
let arrP = [];

for (let i = 0; i < 3; i++) {
	arrP[i] = [];
	for (let j = 0; j < 5; j++) {
		arrP[i].push('x');
	}
}
console.log(arrP); 


//Задача: сформируйте с помощью трех вложенных циклов следующий массив:
/*
[
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
]
*/

let arrQ = [];

for (let i = 0; i < 3; i++) {
	arrQ[i] = [];

	for (let j = 0; j < 2; j++) {
		arrQ[i][j] = [];

		for (let k = 0; k < 5; k++) {
			arrQ[i][j].push(k + 1);
		}
	}

}

console.log(arrQ); 



//ЗАПОЛНЕНИЕ МАССИВА ЧИСЛАМИ ПО ПОРЯДКУ
//Вот так: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//Для этого нужно сделать специальную переменную-счетчик, 
//которая будет увеличивать свое значение на 1 при каждой итерации внутреннего цикла.
// Значение этого счетчика мы и будем записывать в массив.

let arrR = [];
let k = 1; // счетчик

for (let i = 0; i < 3; i++) {
	arrR[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arrR[i][j] = k; // записываем счетчик
		k++; // увеличиваем счетчик
	}
}

console.log(arrR);

//Альтернативный вариант 
let arrS = [];

for (let i = 0, k = 1; i < 3; i++) {
	arrS[i] = [];
	
	for (let j = 0; j < 3; j++, k++) {
		arrS[i][j] = k;
	}
}

console.log(arrS);


//Задача: Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]
let arrT = [];
let k1 = 1;

for (let i = 0; i < 4; i++) {
	arrT[i] = [];

	for (let j = 0; j < 2; j++) {
		arrT[i][j] = k1;
		k1++; 
	}
}
console.log(arrT); 


//Задача: Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let arrU = [];
let k2 = 2;

for (let i = 0; i < 4; i++) {
	arrU[i] = [];

	for (let j = 0; j < 3; j++) {
		arrU[i][j] = k2;
		k2 += 2;
	}
}
console.log(arrU); 


//Задача: Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let arrV = [];
let k3 = 1;

for (let i = 0; i < 2; i++) {
	arrV[i] = [];

	for (let j = 0; j < 2; j++) {
		arrV[i][j] = [];

		for (let k = 0; k < 2; k++) {
			arrV[i][j][k] = k3++;
		}
	}
}
console.log(arrV);


let arrW = [];

for (let i = 0, k = 1; i < 3; i++) {
	arrW[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arrW[i][j] = k++;
	}
}


console.log(arrW);