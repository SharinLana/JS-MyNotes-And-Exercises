let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;


//
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let { color, width, height } = options;
console.log(color); //red


//
//Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:
let object = {
	year:  2025,
	month: 12,
	day:   31,
};

let { year: y, month: m, day: d } = object;
console.log(d); // 31


//
let options2 = {
	color: 'red',
	width:  400,
	height: 500,
};

let { color: c, width: w, height: h } = options2;
console.log(c); // red


/* Значения по умолчанию 
в отличии от деструктуризации массивов, 
необязательной может быть любая переменная - не обязательно с конца массива.
*/
let obj2 = {
	month2: 12,
	day2:   31,
};

let {year2 = 2025, month2, day2} = obj2;

console.log(year2);  // выведет 2025
console.log(month2); // выведет 1
console.log(day2);   // выведет 31


//
let options3 = {
	width3:  400,
	height3: 500,
};

let { color3 = 'black', width3, height3 } = options3;


//
let obj4 = {
	month4: 12,
	day4:   31,
};

let {year4:y4 = 2025, month4, day4} = obj4;

console.log(y4);     // выведет 2025
console.log(month4); // выведет 1
console.log(day4);   // выведет 31


//
let options5 = {
	width5:  400,
	height5: 500,
};

let { color5: c5 = 'black', width5: w5, height5: h5 } = options5;
console.log(c5, w5, h5);


/* В качестве значений по умолчанию может выступать результат выполнения функции: */
function func() {
    return (new Date).getFullYear();
}

let object6 = {
    month6: 12,
    day6: 7
}

let { year6 = func(), month6, day6 } = object6;
console.log(year6);


/* Объект для деструктуризации не обязательно должен хранится в переменной. 
Он также может быть результатом работы функции: */
function data() {
    let obj = {
        year7: 2022,
        month7: 6,
        day7: 7
    }
    return obj;
}

let { year7, month7, day7 } = data();
console.log(day7); // 7


/* Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее: */
let obj8 = {
	year8:  2025,
	month8: 12,
	day8:   31,
};

let year8, month8, day8; // объявим переменные заранее 
console.log(year8); // undefined

//команду на деструктуризацию объекта нужно брать в круглые скобки:
({year8, month8, day8} = obj8);
console.log(year8); //