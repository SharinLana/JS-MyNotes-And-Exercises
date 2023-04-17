/*
можно выполнить сравнение дат в текстовом формате и узнать, какая из этих дат больше:
*/
let date1 = '2020-12-01';
let date2 = '2019-12-01';
console.log(date1 > date2); //true

/*
Важно также, чтобы даты были в одном формате. 
В нашем случае разделителями частей дат являются дефисы. 
Это, конечно же, не обязательно. Например, можно поставить точки
*/

let date3 = '2020.12.01';
let date4 = '2019.12.01';

/* Или вообще убрать разделители: */

let date5 = '20201201';
let date6 = '20191201';

/*
Главное, размещение должно быть следующим: сначала год, потом месяц, потом день.
*/

//Task: Напишите код, который сравнит две приведенные ниже даты 
//и выведет сообщение о том, какая из них больше:
let date7 = '2020-11-31';
let date8 = '2020-12-01';

if (date7 > date8) {
    console.log(`${date7} is greater then ${date8}`)
}
else {
    console.log(`${date7} is lower then ${date8}`)
}


/* Дата без года 
Необязательно сравнивать года. Дата может состоять просто из месяца и дня:
*/

let date9 = '09-21';
let date10 = '09-23';

if (date9 > date10) {
    console.log(`${date9} is greater than ${date10}`);
}
else {
    console.log(`${date9} is lower than ${date10}`)
}


/* Попадание даты в промежуток 
Давайте определим, в какой промежуток попадает эта дата:
*/
let date = '08-20';

if (date >= '01-01' && date <= '03-08') {
	console.log('1 промежуток');
}

if (date >= '03-09' && date <= '06-17') {
	console.log('2 промежуток');
}

if (date >= '06-18' && date <= '12-31') {
	console.log('3 промежуток');
}


/* Сравнение объектов с датами в JavaScript */
let now = new Date();
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

if (now > noon) {
    console.log(`It's afternoon`);
}
else if (now == noon) {
    console.log(`It's a noon`);
}
else {
    console.log(`It's still morning`)
};

//Task: Получите объект с датой, содержащий текущий момент времени. 
//Получите объект с датой, содержащий 15 число текущего месяца. 
//Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
let current = new Date();
let date15 = new Date(current.getFullYear(), current.getMonth(), 15);

if (current > date15) {
    console.log(`it's the second part of the month`);
}
else if (now == date15) {
    console.log(`It's exactly half of the month`);
}
else {
    console.log(`It's the first part of the month`);
}