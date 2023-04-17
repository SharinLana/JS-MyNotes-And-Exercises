/*
localStorage - специальныи объект, позволяющии хранить данные 
между заходами пользователя на ваш сайт (5-10 мегабайт информации). 
Данные хранятся в специальном месте браузера под названием локальное хранилище.

Доступ к данным производится по ключу: 
вы сохраняете данные с каким-то ключом, 
а затем можете получить их по этому ключу или удалить. 

При этом разрешено сохранять только строки.

*/

// Task 1
// Напишите скрипт, который сохранит в локальном хранилище
// три числа под тремя разными ключами.
// Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит
// ваши три числа из локального хранилища и найдет их сумму.
// Запустите второй скрипт и убедитесь в его работоспособности.

localStorage.setItem("key1", 1);
localStorage.setItem("key2", 2);
localStorage.setItem("key3", 3);

let str1 = localStorage.getItem("key1");
let str2 = localStorage.getItem("key2");
let str3 = localStorage.getItem("key3");

let sum = +str1 + +str2 + +str3;
console.log(sum); // 6

// Task 2
// Однократное сохранение

// Если попытаться прочитать ключ,
//  для которого не были записаны данные,
// то результатом будет null.
// Это можно использовать для того,
// чтобы выполнить однократное сохранение данных.
// К примеру, давайте запишем в локальное хранилище
// момент первого захода пользователя на сайт.
// А если пользователь зайдет не первый раз,
// то ничего делать не будем:

let time = localStorage.getItem("time");

if (time === null) {
  let now = new Date().getTime();
  localStorage.setItem("time", now);
}
console.log(time); // first load = null, // after reloading = a timestamp 1662410969826

// Task 3
// По заходу пользователя на сайт
// запишите в локальное хранилище текущий момент времени.
// Затем по повторному заходу выведите,
// сколько прошло времени с предыдущего захода пользователя на сайт.
let firstVisit = localStorage.getItem("firstVisit");
let secondVisit = localStorage.getItem("secondVisit");

if (!firstVisit) {
  let initialTime = new Date().getTime();
  localStorage.setItem("firstVisit", initialTime);
} else {
  let secondTime = new Date().getTime();
  localStorage.setItem("secondVisit", secondTime);
}

let diff = Math.round((secondVisit - firstVisit) / 1000);

console.log(`Last visited: ${diff} seconds ago`);

// Task 4
// По заходу пользователя на сайт спросите у него дату рождения.
// При следующем заходе пользователя на сайт,
// если у него в этот день будет День Рождения -
// поздравьте его с этим праздником.

let birthday = localStorage.getItem("birthday");

if (!birthday) {
  let birthdayReceived = prompt(`Enter your date of birth in a format mm/dd`);
  localStorage.setItem("birthday", birthdayReceived);
} else {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  if (String(month).length == 1) {
    month = "0" + month;
  }
  if (String(day).length == 1) {
    day = "0" + day;
  }
  let fullDate = `${month}/${day}`;

  if (fullDate === birthday) {
    console.log("Happy birthday!");
  }
}

// Task
// Дан инпут. По потери фокуса в этом инпуте
// сохраните его значение в локальное хранилище.
// При следующем заходе пользователя на страницу
// установите в инпуте сохраненный ранее текст.
let input = document.querySelector("input");
let prevVisit = localStorage.getItem("prevVisit");

input.addEventListener("blur", function () {
  let value = input.value;
  localStorage.setItem("prevVisit", value);
});

input.value = prevVisit;

// Перезапись данных & Удаление данных

// Task 5
// Пользователь заходит на сайт,
// затем обновляет страницу, затем еще раз обновляет и так далее.
// Сделайте счетчик обновления страницы.
// Каждый раз при обновлении выводите значение счетчика на экран.
// Сделайте так, чтобы счетчик обнулялся после того, как дойдет до 100.

let init = localStorage.getItem("init");

if (!init) {
  let counter = 0;
  localStorage.setItem("init", counter);
} else if (init === "10") {
  localStorage.setItem("init", 0);
} else {
  counter = +init + 1;
  localStorage.setItem("init", counter);
  console.log(init);
}

// Удаление всех данных - localStorage.clear()

// Task 6
// Очистите хранилище. Проверьте, что все ранее установленные вами ключи пропали.
localStorage.clear();
