/* Multidimentional Objects */

let obj = {
	a: {
		key1: 'a1',
		key2: 'a2',
		key3: 'a3',
	},
	b: {
		key1: 'b1',
		key2: 'b2',
		key3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj['a']['key1']); // выведет 'a1'
console.log(obj['c'][1]); // выведет 'c1'

//Можно также обращаться к элементам как к свойствам, то есть через точку
console.log(obj.a.key1); // выведет 'a1'

//Можно комбинировать оба способа:
console.log(obj['a'].key1); // выведет 'a1'
console.log(obj.a['key1']); // выведет 'a1'

//А вот если ключ представляет собой число, то его нельзя использовать как свойство:
// console.log(obj.c.1); // будет ошибка

//А вот так будет работать:
console.log(obj.c[1]); // выведет 'c1'


//Задача: Найдите сумму элементов объекта.
let objA = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let sumA = objA.key1.key1 + objA.key1.key2 + objA.key1.key3 + objA.key2.key1 +
objA.key2.key2 + objA.key2.key3 + objA.key3.key1 + objA.key3.key2 + objA.key3.key3;

console.log(sumA); // 45


//Задача: Выведите на экран элемент 'b2' и элемент 'c1'.
let objB = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(objB[2][2]); // b2
console.log(objB[3][1]); // c1


//Задача: Найдите сумму всех элементов-чисел.
let objC = {
	key1: {
		a: 1, b: 2, 
        c: {
			d: 3,
			e: 4,
		}, 
        f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}

let sumC = objC.key1.a + objC.key1.b + objC.key1.c.d + objC.key1.c.e + objC.key1.f +
objC.key2.g + objC.key2.h;

console.log(sumC);



//ПЕРЕБОР МНОГОМЕРНЫХ ОБЪЕКТОВ 

let objD = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

//Давайте выведем все его элементы на экран. 
//Для этого нам необходимо запустить два вложенных друг в друга цикла for-in:
for (let key in objD) {
	let subObj = objD[key];
	
	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
}


//Задача: Используя циклы, найдите сумму элементов этого объекта.
let objE = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sumE = 0;

for (let key in objE) {
    let subObj = objE[key];

    for (let subKey in subObj) {
        sumE += subObj[subKey];
    }
}
console.log(sumE); // 177
