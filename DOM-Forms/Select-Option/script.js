//Task 1
//Пусть у нас дан выпадающий список
//Давайте при изменении селекта выведем на экран 
//текст выбранного пункта списка. 
//Для этого нужно прочитать свойство value нашего селекта
let select = document.querySelector('#select');

select.addEventListener('change', function() {
    console.log(this.value)
});


//Task 2
//Дан селект, абзац и кнопка. 
//По клику на кнопку выведите текст выбранного пункта списка в абзац.
let select2 = document.querySelector('#select2');
let par = document.querySelector('#par');
let btn = document.querySelector('#btn');

btn.addEventListener('click', addToPar);

function addToPar() {
    par.textContent = select2.value;
}


//Task 3
//Сделайте выпадающий список годов от 2020 до 2030. 
//При выборе какого-нибудь пункта списка выведите сообщение о том, 
//високосный этот год или нет
let select3 = document.querySelector('#select3');

select3.addEventListener('change', defineYear);

function defineYear() {
    let year = select3.value;
    if (isLeap(year)) {
        alert(`This is a leap year`);
    }
    else {
        alert(`Regular year`);
    }
}

function isLeap(num) {
    let date = new Date(num, 2, 0);
    
    if (date.getDate() === 29) {
        return true;
    }
    return false;
}


/*
Атрибут value

Как правило, пунктам списка добавляют атрибут value. 
В этом случае свойство value селекта будет содержать не текст option, 
а значение его атрибута value.
*/

//Task 4
//Давайте переделаем наш селект from Task 1.
//Проверим, чему теперь равно выбранное значение
let select4 = document.querySelector('#select4');

select4.addEventListener('change', function() {
    console.log(this.value); // 1 // 2 // 3
});


//Task 5
//Сделайте выпадающий список с названиями дней недели. 
//В качестве атрибутов value пунктов списка добавьте 
//номера дней недели от 1 до 7. 
//По изменению списка выведите на экран сообщение о том, 
//выбран выходной день или рабочий.
let select5 = document.querySelector('#select5');

select5.addEventListener("change", defineDay);

function defineDay() {
    if (select5.value == 6 || select5.value == 7) {
        alert(`Weekend`);
    }
    else {
        alert(`weekday`);
    }
}



/*
Изменение выбранного пункта списка

Task 6: давайте сделаем так, 
чтобы при нажатии на кнопку наш селект сменил выбор
*/
let select6 = document.querySelector('#select6');
let btn6 = document.querySelector('#btn6');

btn6.addEventListener('click', function() {
    select6.value = '1';
});


//Task 7
//Сделайте выпадающий список с названиями месяцев. 
//Сделайте так, чтобы по JavaScript по умолчанию 
//выбирал в этом списке текущий месяц.
let select7 = document.querySelector('#select7');
let date7 = new Date();
select7.value = date7.getMonth();



/*
selectedIndex - номер того пункта списка, который сейчас выбран

Нумерация при этом начинается с нуля. 
При этом данное свойство можно как прочитывать, так и записывать, 
меняя выбранный пункт списка.
*/

//Task 8
//Пусть у нас дан выпадающий список.
//Давайте выведем номер выбранного пункта списка
//А теперь выберем какой-нибудь другой пункт
let select8 = document.querySelector('#select8');
console.log(select8.selectedIndex); 
select8.selectedIndex = 2;
console.log(select8.selectedIndex);



//Task 9
//Дан инпут и селект. В инпут вводится какое-то число. 
//По потери фокуса сделайте выделенным пункт списка, 
//номер которого равен значению из инпута.
let select9 = document.querySelector('#select9');
let inp = document.querySelector('#inp');

inp.addEventListener('change', function() {
    let value = inp.value;
    select9.selectedIndex = Number(value) - 1;
});


//Task 10
//Сделайте выпадающий список с названиями дней недели. 
//Сделайте так, чтобы JavaScript 
//по умолчанию выбирал в этом списке текущий день.
let select10 = document.querySelector('#select10');

let day = new Date();
select10.selectedIndex = day.getDay() - 1;


//Task 11.
//Получение <option>

//1.
let options = document.querySelectorAll('.option');
console.log(options);

//2.
let select11 = document.querySelector('#select11');
let options11 = select.querySelectorAll('option');
console.log(options);

//3.
for (let option of select11) {
    console.log(option);
}

//4. 
console.log(select11[0]);



//Task 12
//Переберите все пункты списка циклом 
//и в конец текста каждого пункта добавьте значение его атрибута value.
let select12 = document.querySelector('#select12');

for (let option of select12) {
    option.text = option.text + ` - ${option.value}`
}



/*
Пусть у нас в переменной есть ссылка на тег option. 
Например, полученная следующим образом:

let select = document.querySelector('#select');
let option = select[0];

В этом случае в свойстве text будет хранится текст оптиона, 
в свойстве value - значение одноименного атрибута, 
а в свойстве selected - значение true или false 
в зависимости от того, выбранный пункт списка или нет:

console.log(option.text);
console.log(option.value);
console.log(option.selected);
*/


//Task 13
//Переберите пункты списка циклом 
//и для выбранного пункта в конец текста добавьте восклицательный знак, 
//а для невыбранных пунктов - вопросительный.
let select13 = document.querySelector('#select13');

for (let option of select13) {
    if (option.selected) {
        option.text = option.text + "!";
    }
    else {
        option.text = option.text + "?";
    }
} 


//Task 14
//Дан выпадающий список и кнопка. 
//По клику на кнопку сделайте отмеченным последний пункт списка.
let select14 = document.querySelector('#select14');
let btn14 = document.querySelector('#btn14');

btn14.addEventListener('click', function() {
    let option = select14[select14.length - 1];
    option.selected = true;
});


//Task 15
//Дан селект и кнопка. По нажатию на кнопку 
//выведите на экран текст отмеченного пункта списка and 
//добавьте в конец текста выбранного пункта восклицательный знак.
let select15 = document.querySelector('#select15');
let btn15 = document.querySelector('#btn15');


btn15.addEventListener('click', function() {
    let option = select15[select15.selectedIndex];
    option.text = option.text + "!";
    alert(option.text)
})