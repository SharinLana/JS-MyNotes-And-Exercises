//Зачастую нам нужен не номер дня недели, а его текстовое название.

let date = new Date();
let day = date.getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//We always start array with Sunday, as it has a 0 index in getDay() 

console.log(days[day]);


//Task: Выведите с помощью этого массива название текущего месяца.
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let newDate = new Date();
let month = newDate.getMonth();
let monthName = months[month];
console.log(monthName);