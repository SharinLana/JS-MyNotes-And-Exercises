//Task 1:
//Дан инпут. В него вводится ФИО через пробел. 
//ФИО вводится с маленькой буквы. 
//Сделайте так, чтобы по потери фокуса инпутом, 
//введенные фамилия, имя и отчество автоматически 
//стали записанными с большой буквы (в этом же инпуте).

let input = document.querySelector('#input');

input.addEventListener('blur', makeRecord);

function makeRecord() {
    let value = input.value;
    let arr = value.split(' ');
    let newArr = [];
    
    for (let elem of arr) {
        value = changedElem(elem);
        newArr.push(value);
    }
    input.value = newArr.join(' ');
}

function changedElem(str) {
    let arr = str.split('');
    let firstLetter = arr.shift().toUpperCase();
    arr.unshift(firstLetter);
    return arr.join('');
}



//Task2:
// Дан инпут. В него вводится текст. 
//По потери фокуса узнайте количество слов в этом тексте.

let input2 = document.querySelector('#input2');

input2.addEventListener('blur', countWords);

function countWords() {
    let arr = (input2.value).split(' ');
    console.log(arr.length)
}


//Task 3:
//Дан инпут. В него вводится дата в формате 31.12.2016. 
//По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

let input3 = document.querySelector('#input3');

input3.addEventListener('blur', function() {
    input3.value = (input3.value).split('.').reverse().join('-');
});


//Task 4:
//Дан инпут. В него вводится слово. 
//По нажатию на кнопку проверьте то, 
//что это слово читается с начала и с конца одинаково (например, мадам).

let input4 = document.querySelector('#input4');
let btn = document.querySelector('#btn');

btn.addEventListener('click', checkWord);

function checkWord() {
    let newValue = input4.value.split('').reverse().join('');
    
    if (input4.value === newValue) {
        console.log(`true`)
    }
    else {
        console.log(`false`)
    }
}


//Task 5:
// Дан инпут. В него вводится число. 
//Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

let input5 = document.querySelector('#input5');

input5.addEventListener('blur', function() {
    let num = input5.value;
    let arr = String(num).split('');
    let flag = false;
    
    for (let elem of arr) {
        if (elem == 3) {
            flag = true;
            break;
        }
    }

    if (flag === true) {
        console.log(`This number contains a digit '3'`)
    }
    else {
        console.log(`There's no digit '3' in this number`)
    }
    
})


//Task 6:
// Даны несколько абзацев и кнопка. 
//По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
let button = document.querySelector('#button');
let pars = document.querySelectorAll('.par');

button.addEventListener('click', writeNumber);

function writeNumber() {
    for (let i = 0; i < pars.length; i++) {
        pars[i].textContent = pars[i].textContent + ` - ${i + 1}`
    }
}


//Task 7:
// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
let links = document.querySelectorAll('.link');

for (let link of links) {
    link.textContent = link.textContent + ` - ${link.href}`
}


//Task 8:
// Даны ссылки. 
//Если ссылка начинается с http://, 
//то добавьте ей в конец стрелку →.

for (let link of links) {
    if (link.href === 'http:') {
        link.textContent = link.textContent + `=>`
    }
}


//Task 9:
//Даны несколько абзацев с числами. 
//По нажатию на любой абзац запишите в него квадрат числа, 
//которое в нем находится.
let pars2 = document.querySelectorAll('.par2');

for (let par of pars2) {
    par.addEventListener('click', addNewNum);
}

function addNewNum() {
    this.textContent = Number(this.textContent) ** 2;
}


//Task 10:
//Дан инпут. В него вводится дата в формате 12.31.2016. 
//По потери фокуса узнайте день недели (словом), 
//который приходится на эту дату.
let inp = document.querySelector('.input');

inp.addEventListener('blur', getWeekday);

function getWeekday() {
    let date = inp.value;
    let newDate = new Date(date);
    let weekday = newDate.getDay();
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let result;

    for (let i = 0; i < days.length; i++) {
        if (i == weekday) {
            result = days[i];
        }
    }
    inp.value = result;
}


//Task 11:
//Дан инпут. Реализуйте кнопки +1, -1, 
//которые будут увеличивать или уменьшать на 1 значение инпута. 
//Сделайте так, чтобы это значение не могло стать меньше нуля.
let input6 = document.querySelector('#input6');
let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');

increment.addEventListener('click', function() {
    input6.value = Number(input6.value) + 1;
});

decrement.addEventListener('click', function() {
    if (input6.value <= 0) {
        return;
    }
    else {
        input6.value = Number(input6.value) - 1;
    }
});


//Task 12:
// Дан инпут. Даны абзацы. 
//Пусть в этот инпут записывается 
//суммарное количество нажатий по этим абзацам.
let input7 = document.querySelector('#input7');
let pars7 = document.querySelectorAll('.par7');
let number = Number(input7.value);

for (let par of pars7) {
    par.addEventListener('click', function() {
        input7.value = '0';
        number++;
        input7.value = number;
    })
}


//Task 13:
//На странице есть дивы. В них есть текст. 
//Обойдите все дивы и обрежьте тот текст, который в них стоит,
// так, чтобы он стал длиной 10 символов. 
//И добавьте троеточие в конец обрезанного текста
let divs = document.querySelectorAll('.div');

for (let div of divs) {
    div.innerHTML = div.innerHTML.substring(0, 10) + "..."
}


//Task 14:
//Дан инпут. В него вводится число. 
//По потери фокуса проверьте, что в нем лежит число от 1 до 100. 
//Если это так - покрасьте инпут в зеленый цвет, 
//а если не так - в красный.

let input8 = document.querySelector('#input8');

input8.addEventListener('blur', changeColor);

function changeColor() {
    if (input8.value >= 1 && input8.value <= 100) {
        input8.style.backgroundColor = 'green';
    }
    else {
        input8.style.backgroundColor = 'red';
    }
}


//Task 15:
//Дан инпут и кнопка. По нажатию на кнопку 
//сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
let input9 = document.querySelector('#input9');
let btn9 = document.querySelector('#btn9');

btn9.addEventListener('click', recordRandomString);

function recordRandomString() {
    let string = 'abcdefghigklmnopqrstuvwxyz';
    let arr = string.split('');
    let newArr = [];

    for (let i = 0; i < 8; i++) {
        newArr.push(arr[getRandomNum(0, arr.length - 1)])
    }

    input9.value = newArr.join('');
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Task 16:
//Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
//По нажатию на кнопку перемешайте введенные символы случайным образом 
//и запишите ее обратно в инпут.
let input10 = document.querySelector('#input10');
let btn10 = document.querySelector('#btn10');

btn10.addEventListener('click', shuffleString);

function shuffleString() {
    let str = input10.value;
    let arr = str.split('');
    let newArr = [];

    while (arr.length > 0) {
        let random = getRandom(0, arr.length - 1);
        let elem = arr.splice(random, 1);
        elem = elem[0];

        newArr.push(elem);
    }

    str = newArr.join('');
    input10.value = str;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Task 17: 
//Дан инпут, кнопка и абзац. 
//В инпут вводится температура в градусах Фаренгейта. 
//По клику на кнопку выведите в абзац температуру в градусах Цельсия.
let input11 = document.querySelector('#input11');
let btn11 = document.querySelector('#btn11');
let par11 = document.querySelector('#par11');

btn11.addEventListener('click', getCelcius);

function getCelcius() {
    let tF = input11.value;
    let tC = (+tF - 32) * 5 / 9;

    par11.textContent = `${tC} C`
}


//Task 18:
// Дан инпут, кнопка и абзац. В инпут вводится число. 
//По нажатию на кнопку выведите в абзац факториал этого числа.
let input12 = document.querySelector('#input12');
let btn12 = document.querySelector('#btn12');
let par12 = document.querySelector('#par12');

btn12.addEventListener('click', getFactorial);

function getFactorial() {
    let num = input12.value;
    let product = 1;

    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    
    par12.textContent = product;
}


//Task 19:
//Даны 3 инпута, кнопка и абзац. 
//В инпуты вводятся коэффициенты квадратного уравнения ax2 + bx + c = 0.
//где a — первый или старший коэффициент, не равный нулю, 
//b — второй коэффициент, c — свободный член.

//По нажатию на кнопку найдите корни 
//этого уравнения и выведите их в абзац.

//Как определить, сколько корней имеет уравнение? 
//Для этого существует дискриминант.
//Пусть дано квадратное уравнение ax2 + bx + c = 0. 
//Тогда дискриминант — это число D = b2 − 4ac.

//по знаку дискриминанта можно определить, сколько корней имеет квадратное уравнение. А именно:
//Если D < 0, корней нет;
//Если D = 0, есть ровно один корень;
//Если D > 0, корней будет два.

let coeff1 = document.querySelector('#coeff1');
let coeff2 = document.querySelector('#coeff2');
let coeff3 = document.querySelector('#coeff3');
let btn13 = document.querySelector('#btn13');
let par13 = document.querySelector('#par13');

btn13.addEventListener('click', getRoots);

function getRoots() {
    let num1 = coeff1.value;
    let num2 = coeff2.value;
    let num3 = coeff3.value;

    let discriminant = num2 ** 2 - 4 * num1 * num3;
    
    if (discriminant < 0) {
        par13.textContent = `The equation has no roots`
        console.log(`discriminant < 0`)
    }
    else if (discriminant = 0) {
        let root = (-num2 + Math.sqrt(discriminant)) / 2 * num1;
        par13.textContent = root;
        console.log(`discriminant = 0`)
    }
    else {
        let root1 = (-num2 + Math.sqrt(discriminant)) / 2 * num1;
        let root2 = (-num2 - Math.sqrt(discriminant)) / 2 * num1;
        par13.textContent = `${root1} and ${root2}`;
        console.log(`discriminant > 0`)
    }
}
