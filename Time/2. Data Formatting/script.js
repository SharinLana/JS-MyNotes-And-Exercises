//Давайте теперь научимся выводить дату в определенном формате.
// Пусть, к примеру, мы хотим вывести на экран текущие день, месяц и год 
//в формате день-месяц-год.

let date = new Date();
console.log(addZero(date.getDate()) + '-' + addZero(date.getMonth() + 1) + '-' + date.getFullYear());

function addZero(num) {
    if (num >=0 && num <= 9) {
        return '0' + num;
    }
    else {
        return num;
    }
}


//Task: Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
let myDate = new Date();
console.log(`${normalizeNum(myDate.getHours())}:${normalizeNum(myDate.getMinutes())}:${normalizeNum(myDate.getSeconds())} 
${normalizeNum(myDate.getDate())}.${normalizeNum(myDate.getMonth() + 1)}.${myDate.getFullYear()}`);

function normalizeNum(num) {
    let str = String(num);

    if (str.length == 1) {
        return '0' + num;
    }
    else {
        return num
    }
}


//Task: Пусть, к примеру, у нас есть строка с датой в формате год-месяц-день. 
//Давайте поменяем формат этой даты на другой, к примеру, на такой: день/месяц/год.
let str = '2025-12-31';
let result = str.split('-').reverse().join('/');
console.log(result); // 31/12/2025

//OR
let arr = str.split('-');
let res = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(res); // 31/12/2025



//Task: Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let d = '2022-06-15';
let r = d.split('-').reverse().join('.');
console.log(r); // 15.06.2022

//OR
let array = d.split('-');
let result2 = `${array[2]}.${array[1]}.${array[0]}`;
console.log(result2); // 15.06.2022