/*
С помощью объекта Date можно также получить номер текущего дня недели. 
Делается это с помощью метода getDay. 
Этот метод возвращает числа от 0 до 6-ти, 
причем неделя начинается с воскресенья и этот день имеет номер 0. 
Понедельник - это день номер 1, вторник - номер 2 и так далее.
*/

let date = new Date();
console.log(date.getDay()); // 3 (Wednesday)


//Task: Определите, является ли текущий день недели выходным или рабочим днем.
let currentDate = new Date();
let currentDay = currentDate.getDay();

if (currentDay == 0 || currentDay == 6) {
    console.log(`Weekend`);
}
else {
    console.log(`Weekday`);
};


//Task: Определите сколько дней осталось до ближайшего воскресенья.
let newDate = new Date();
let newDay = newDate.getDay();

if (newDay == 0) {
    console.log(`It's Sunday`);
}
else {
    console.log(`${6 - newDay} days left to Sunday`);
}