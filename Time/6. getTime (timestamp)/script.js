/*
При работе с датой существует специальный формат timestamp, 
который в JavaScript показывает количество миллисекунд, 
прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.

Существует специальный метод getTime, 
с помощью которого можно получить время в формате timestamp. 
*/

let date = new Date();
console.log(date.getTime()); // 1655332311680 (miliseconds passed since January 1 1970);

//Task: Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
let newDate = new Date(2025, 0, 1);
let timestamp = newDate.getTime();
console.log(timestamp); // 1735718400000


//Task: Давайте получим разницу в миллисекундах между текущим и заданным моментом времени:
let current = new Date();
let set = new Date(1982, 2, 9);
let diff = current.getTime() - set.getTime();
console.log(diff); // 1270823793839 (my age in miliseconds)
console.log(diff / 1000); // 1270823915.128 (my age in seconds)
console.log(diff / 1000 / 60); // 21180399.2005 (my age in minutes)
console.log(diff / 1000 / 60 / 60); // 353006.6818527778 (my age in hours)
console.log(diff / 1000 / 60 / 60 / 24); // 14708.612587268517 (my age in days)
console.log(diff / 1000 / 60 / 60 / 24 / 31); // 474.47150190001486 (my age in months)
console.log(diff / 1000 / 60 / 60 / 24 / 365); // 40.297570138635216 (my age in years)



//Task: Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
let date1 = new Date(2000, 0, 10);
let date2 = new Date(1988, 2, 1);

let timestamp2 = date1.getTime() - date2.getTime();
let daysPassed = timestamp2 / (1000 * 60 * 60 * 24);
console.log(daysPassed);



/* Timestamp в JavaScript - это не обязательно: 
даты, представленные в виде объекта Date, можно вычитать друг из друга, 
и результат их вычитания - разница в миллисекундах. */

let date3 = new Date();
let date4 = new Date (1983, 4, 9, 12, 45, 4);
let difference = date3 - date4;
console.log(difference); // 1234051313123


// Task: Выведите на экран количество миллисекунд, 
//прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

let date5 = new Date(2000, 8, 1);
let date6 = new Date(2010, 1, 15);
let getDiff = date6 - date5;
console.log(getDiff); // 298429200000


//Task: Модифицируйте предыдущую задачу так, 
//чтобы на экран выводилась разница в днях.
let getDiffIndays = getDiff / (1000 * 60 * 60 * 24);
console.log(getDiffIndays); // 3454.0416666666665


//Task: Модифицируйте предыдущую задачу так, 
//чтобы на экран выводилась разница в месяцах.
let getDiffInMonths = getDiffIndays / 30;
console.log(getDiffInMonths.toFixed()); // 115


//Task: Модифицируйте предыдущую задачу так, 
//чтобы на экран выводилась разница в годах.
let getDiffInYears = getDiffInMonths / 12;
console.log(getDiffInYears.toFixed(2)); // 9.59