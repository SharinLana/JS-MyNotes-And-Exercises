let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц (начинается с нуля - январь нулевой, февраль первый... So we need to make +1 to get current month)
console.log(date.getDate());     // data
console.log(date.getDay());      // a day of the week (0 - 6; 0 = Sunday, 1 - Monday, etc.)

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды
console.log(date.getTime());     // timestamp - количество миллисекунд, прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.

//Task: Выведите на экран текущий день.
let currentDay = date.getDate(); //
document.write(currentDay + '<br>');


//Task: Выведите на экран текущий месяц.
let currentMonth = date.getMonth() + 1;
document.write(currentMonth + '<br>');


//Task: Выведите на экран текущий год.
let currentYear = date.getFullYear();
document.write(currentYear + '<br>');