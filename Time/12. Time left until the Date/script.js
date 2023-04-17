/*
Давайте определим, сколько дней осталось до какого-нибудь праздника, 
например, до ближайшего Женского дня. 
Проблема здесь в том, что в этом году 8-е марта могло уже быть, а могло еще и не быть.
Если праздника еще не было, то все просто: 
нужно взять текущую дату, взять дату 8-е марта за текущий год, 
и найти разность между ними.

Если же праздник уже был, то в следующий раз он будет только в следующем году. 
В таком случае нам нужно брать 8-е марта следующего года, 
прибавив к текущему году единицу

Для того, чтобы совместить оба варианта, 
необходимо выполнить проверку разницы текущий даты и 8-го марта текущего года. 
Если эта разница больше нуля, то праздник еще будет в текущем году, 
если равна нулю - праздник сегодня, а если меньше нуля, 
то праздник уже был и будет в следующем году
*/

let now = new Date();
let date8 = new Date(now.getFullYear(), 2, 8);
let diff = date8 - now;

if (diff > 0) {
    let daysleft = diff / (1000 * 60 * 60 * 24);
    console.log(daysleft);
}
else if (diff == 0) {
    console.log(`Happy Woman's Day!`);
}
else {
    date8 = new Date(now.getFullYear() + 1, 2, 8); // will be next year
    let daysleft = (date8 - now) / (1000 * 60 * 60 * 24); //date8 changed (see the previous line), so we aren't able to use 'diff' here
    console.log(daysleft);
};



//Task: Пусть ваш День Рождения - первое марта. 
//Определите, сколько дней осталось до вашего ближайшего дня рождения.
let current = new Date();
let birthday = new Date(current.getFullYear(), 2, 9);
let difference = birthday - now;

if (difference > 0) {
    let daysLeft = difference / (1000 * 60 * 60 * 24);
    console.log(daysLeft);
}
else if (difference == 0) {
    console.log(`Happy Birthday!`);
}
else {
    let nextBirthday = new Date(current.getFullYear() + 1, 2, 9);
    let daysLeft = (nextBirthday - now) / (1000 * 60 * 60 * 24);
    console.log(daysLeft);
}



//Task: Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day. 
//Определите, сколько дней осталось до заданного этой датой праздника. 
//Учтите при решении, что есть счастливчики, которые родились 29 февраля. 
//Не забудьте их учесть в вашем решении.
let month = 8;
let day = 24;

function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() == 29;
}

function getDaysToTheNextBd(month, day) {
    let now = new Date();
    let date = new Date(now.getFullYear(), month, day);
    let diff = date - now;

    if (diff > 0 && month == 1 && day == 29 && !isLeap(now.getFullYear())
    || diff < 0 && month == 1 && day == 29 && !isLeap(now.getFullYear())) {
        //find the next leap year and then find the diff between the new leap year and the current date
        for (let year = date.getFullYear(); year < date.getFullYear() + 4; year++) {
            if (isLeap(year)) {
                let date2 = new Date(year, month, day);
                diff = date2 - now;
                let nextBd = diff / (1000 * 60 * 60 * 24);
                console.log(nextBd.toFixed(1))
            }
        }
    }
    else if (diff == 0) {
        console.log(`Happy Birthday!`);
    }
    else if (diff > 0) {
        let nextBd = diff / (1000 * 60 * 60 * 24);
        console.log(nextBd.toFixed(1))
    }
    else {
        let nextBirthday = new Date(now.getFullYear() + 1, month, day);
        let daysLeft = (nextBirthday - now) / (1000 * 60 * 60 * 24);
        console.log(daysLeft.toFixed(1));
    }
    
}
getDaysToTheNextBd(month, day)