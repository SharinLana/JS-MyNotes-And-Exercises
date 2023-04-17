

let obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

let lang = 'ru';
let day = 1; // получаем доступ к индексу

console.log(obj[lang][day]);

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2019';
let month = 12;
let days = 30;

console.log(affairs[year][month][days][0]); // дело 321

let objA = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(objA[key1]['key4']);


//Задача: Выведите на экран сумму зарплат первого и второго работников.
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

console.log(employees[0].salary); // 300
console.log(employees[1].salary); // 400


//Задача: Выведите на экран элемент 'Вася' и элемент 'Лена'.
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};

console.log(students.boys[1]); // Вася
console.log(students.girls[2]); // Лена




//ПЕРЕБОР МНОГОМЕРНЫХ СТРУКТУР С ПОМОЩЬЮ ЦИКЛА


//МАССИВ -> ОБЪЕКТ: [ {} ]

//Задача: Выведите на экран данные каждого работника в формате имя - зарплата.
let workers = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let worker of workers) {
    console.log(worker.name + ' ' + worker.salary);
}

//Задача: Выведите на экран сумму зарплат всех работников.
let employeesA = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let sum = 0;

for (let employee of employeesA) {
    sum += employee.salary;
}
console.log(sum); // 1200


//Задача: Выведите на экран сумму зарплат тех работников, 
//возраст которых равен или более 30 лет.
let employeesB = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let sumB = 0;

for (let employee of employeesB) {
    if (employee.age >= 30) {
        sumB += employee.salary;
    }
}
console.log(sumB); // 1800


//Задача: Выведите на экран имена и зарплаты неуволенных работников.
let employeesC = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];

for (let employee of employeesC) {
    if (employee.dismissed === false) {
        console.log(employee.name + " " + employee.salary);
    }
}


//ОБЪЕКТ -> МАССИВ: { [] }

let pupils = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};

//Как вы видите, у нас объект с массивами. 
//Это значит, что первый цикл должен быть по объекту, а второй - по массивам. 
//То есть первый цикл будет for-in, а второй - for-of, вот так:

for (let group in pupils) {
    for (let student of pupils[group]){
        console.log(student);
    }
}


//Задача: С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

for (let number in data) {
    for (let dataNumber of data[number]) {
        console.log(dataNumber);
    }
}


//Задача: С помощью вложенных циклов выведите на экран все строки с данными.
let dataA = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];

for (let object of dataA) {
    for (let number in object) {
        console.log(object[number]);
    }
}


//Задача: С помощью вложенных циклов выведите на экран все строки с данными.
let dataB = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (let object of dataB) {
    for (let number in object) {
        for (let data of object[number]) {
            console.log(data)
        }
    }
}
