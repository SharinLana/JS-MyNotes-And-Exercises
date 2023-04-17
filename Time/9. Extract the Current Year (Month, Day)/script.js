/* Давайте получим объект с датой, содержащий 8-е марта текущего года. 
Под словами текущий год имеется ввиду то, 
что скрипт должен работать в любом году, 
всегда получая тот год, который сейчас на планете. */

let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
console.log(date);

/* День текущего месяца */
//Task: Определите, какой день недели будет 31 декабря текущего года.
let current = new Date();
let date2 = new Date(current.getFullYear(), 11, 31);
let array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday = array[date2.getDay()];
console.log(weekday);


//Task: Давайте получим объект с датой, 
//содержащий 25-е число текущего месяца текущего года
let new3 = new Date();
let date3 = new Date(new3.getFullYear(), new3.getMonth(), 25);
console.log(date3); // Sat Jun 25 2022 00:00:00 


//Task: Определите, какой день недели будет 1 числа текущего месяца.
let new4 = new Date();
let date4 = new Date(new4.getFullYear(), new4.getMonth(), 1);
let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday4 = arr[date4.getDay()];
console.log(weekday4); // Wednesday (in June 2022)



/* День следующего или предыдущего года */
//Task: Давайте получим объект с датой, содержащий 21 января следующего года. 
//Для этого прибавим к текущему году единицу
let now5 = new Date();
let date5 = new Date(now5.getFullYear() + 1, 0, 21);
console.log(date5); // Sat Jan 21 2023 00:00:00 


//Task: Определите, какой день недели будет 31 декабря следующего года.
let now6 = new Date();
let date6 = new Date(now6.getFullYear() + 1, 11, 31);
let arr6 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday6 = arr6[date6.getDay()];
console.log(weekday6); // Sunday


//Task: Определите, какой день недели будет через год в такую же дату, как сегодня.
let now7 = new Date();
let date7 = new Date(now7.getFullYear() + 1, 5, 17);
let arr7 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday7 = arr7[date7.getDay()];
console.log(weekday7); // Saturday


//Task: Определите, какой день недели был год назад в такую же дату, как сегодня.
let now8 = new Date();
let date8 = new Date(now8.getFullYear() - 1, 5, 17);
let arr8 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday8 = arr8[date8.getDay()];
console.log(weekday8); // Thursday


/* День следующего или предыдущего месяца */
let now9 = new Date();
let date9 = new Date(now9.getFullYear(), now9.getMonth() - 1, 1);
console.log(date9.getDay()); // 0 (Sunday)


//Task: не будет ли проблемы, если текущий месяц январь? 
//Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.
//the answer is no, it won't be a problem
let now10 = new Date();
let date10 = new Date(now9.getFullYear(), 0 - 1, 1);
console.log(date10); // Wed Dec 01 2021 00:00:00 
console.log(date10.getDay()); // 3 (Wednesday)


//Task : Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
let now11 = new Date();
let date11 = new Date(now9.getFullYear(), now11.getMonth() - 1, now11.getDate());
let arr11 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday11 = arr11[date11.getDay()]; 
console.log(weekday11); // Tuesday


//Task: Напишите код, который будет находить следующий високосный год.
let now12 = new Date();

for (let year = now12.getFullYear(); year <= 2040; year++) {
    let date = new Date(year, 2, 0);

    if (date.getDate() == 29) {
        console.log(`${date.getFullYear()} is a leap year`);
    }
}


