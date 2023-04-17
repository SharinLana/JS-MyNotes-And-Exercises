//Давайте найдем разность между двумя моментами времени
let date1 = new Date();
let date2 = new Date(2015, 4, 25, 12, 59, 59);

console.log(date1 - date2); // разность в миллисекундах


//Task: Определите, сколько дней между 1 января и 10 сентября текущего года.
let now = new Date();
let jan1 = new Date(now.getFullYear(), 0, 1);
let sept10 = new Date(now.getFullYear(), 8, 10);
let diff = sept10 - jan1;
let days = diff / (1000 * 60 * 60 * 24);
console.log(days.toFixed()); // 252


//Task: Определите, сколько дней между 20 числом текущего месяца 
//и 10 числом следующего.
let now2 = new Date();
let nextMonth = new Date(now2.getFullYear(), now2.getMonth() + 1, 10);
let currentMonth = new Date(now2.getFullYear(), now2.getMonth(), 20);
let diff2 = nextMonth - currentMonth;
let daysBetween = diff2 / (1000 * 60 * 60 * 24);
console.log(daysBetween); // 20


/* Момент времени дня */
//Давайте получим объект с датой, содержащий полдень сегодняшнего дня
let now3 = new Date();
let afternoon = new Date(now3.getFullYear(), now3.getMonth(), now3.getDate(), 12);
console.log(afternoon);

//А теперь полдень завтрашнего дня:
let tmrAfternoon = new Date(now3.getFullYear(), now3.getMonth(), now3.getDate() + 1, 12);
console.log(tmrAfternoon); 

//Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let now4 = new Date();
let yesterday = new Date(now4.getFullYear(), now4.getMonth(), now4.getDate() - 1, 12);
let diff4 = now4 - yesterday;
let hours = diff4 / (1000 * 60 * 60);
console.log(hours.toFixed()); // 27


/* Начало дня */
//Давайте получим объект с датой, содержащий начало текущего дня:
let now5  = new Date();
let date = new Date(now5.getFullYear(), now5.getMonth(), now.getDate(), 0, 0, 0); 
console.log(date);

//Task: Определите, сколько часов прошло между началом дня и текущим моментом времени.
let now6 = new Date();
let dayStart = new Date(now6.getFullYear(), now6.getMonth(), now6.getDate(), 0, 0, 0);
let diff6 = now6 - dayStart;
let hoursPassed = diff6 / (1000 * 60 * 60);
console.log(hoursPassed.toFixed()); // 15


/* Конец дня */
//Давайте получим объект с датой, содержащий конец текущего дня:
let now7  = new Date();
let date7 = new Date(now7.getFullYear(), now7.getMonth(), now7.getDate(), 23, 59, 59);
//or let date7 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);  


//Task: Определите, сколько часов осталось до конца дня.
let now8 = new Date();
let midnight = new Date(now8.getFullYear(), now8.getMonth(), now8.getDate(), 23, 59, 59);
let diff8 = midnight - now8;
let hoursLeft = diff8 / (1000 * 60 * 60);
console.log(hoursLeft.toFixed()); // 8


//Task: найдем все первые числа месяцев текущего года, которые являются воскресеньем
let now9 = new Date();
let year = now9.getFullYear();

for (let month = 0; month <= 11; month++) {
    let date = new Date(year, month, 1);

    if (date.getDay() == 0) {
        console.log(date);
    }
}


//Task: Рассмотрите промежуток от 2000 года до текущего года. 
//Определите, сколько раз 1 января в этом промежутке попадало на выходной день, 
//то есть на субботу или на воскресенье.
let now10 = new Date();

for (let year = 2000; year <= now10.getFullYear(); year++) {
    let date = new Date(year, 0, 1);

    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log(date);
    }
}


//Task: how many days, hours, minutes and seconds left until the New Year?
let now11 = new Date();
let newYear = new Date(now11.getFullYear() + 1, 0, 1);
let diff11 = newYear - now11;

let msInSec = 1000;
let msInMin = msInSec * 60;
let msInHour = msInMin * 60;
let msInDay = msInHour * 24;

let daysLeft = Math.floor(diff11 / msInDay);
let hours11 = Math.floor((diff11 % msInDay) / msInHour);
let minutes = Math.floor((diff11 % msInHour) / msInMin);
let seconds = Math.floor((diff11 % msInMin) / msInSec);
console.log(`${daysLeft} days ${hours} hours ${minutes} minutes ${seconds} seconds to the New Year`)