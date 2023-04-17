/*
Самым простым решением будет составить массив, 
ключами которого будут номера месяцев, 
а значениями - соответствующее количество дней
*/

function getLastDay(month, year) {
    let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month != 1) { // if index is not 1 (meaning it's not February)
        return lastDay[month];
    }
    else {
        let date = new Date(year, 2, 0) // 2 = March. Here we have got access to the last day of a prevoius month (February)
        return date.getDate(); // got a last day in February
    }
}

console.log(getLastDay(1, 2020)); // 29 days in February 2020



