//Task 1
//Пусть в инпуте в атрибуте value 
//изначально записано число 10. 
//Запустите таймер, который каждую секунду 
//будет уменьшать это число на единицу.
//как только содержимое инпута станет равно нулю, 
//пусть таймер прекратит свою работу.

let inp1 = document.querySelector('#inp1');

let timerId = setInterval(function() {
    inp1.value = Number(inp1.value) - 1;

    if (inp1.value === '0') {
        clearInterval(timerId)
    }
}, 1000);


//Task 2
//чтобы по нажатию на кнопку, 
//значение этой кнопки каждую секунду уменьшалось на 1

let inp2 = document.querySelector('#inp2');
let timer;

inp2.addEventListener('click', function() {
    timer = setInterval(function(self) {
        self.value = Number(self.value) - 1;

        if (self.value === '0') {
            clearInterval(timer)
        }
    }, 1000, this)
});


//Task 3
//Дана кнопка. 
//Дан абзац, текстом которого является число. 
//По нажатию на кнопку запустите таймер, 
//который каждую секунду будет увеличивать текст абзаца на 1.
let btn = document.querySelector('#btn');
let par = document.querySelector('#par');

btn.addEventListener('click', increaseNum);

function increaseNum() {
    let num = Number(par.textContent);
    
    setInterval(function() {
        num++;
        par.textContent = num;
    }, 1000)
}


//Task 4
//Дана кнопка. 
//Дан абзац, текстом которого является число, например, 10. 
//По нажатию на кнопку запустите таймер, 
//который каждую секунду будет уменьшать текст абзаца на 1. 
//Как только значение абзаца станет равно нулю - остановите таймер.

let btn2 = document.querySelector('#btn2');
let par2 = document.querySelector('#par2');
let timerID;

btn2.addEventListener('click', decreaseNum);

function decreaseNum() {
    let num = Number(par2.textContent);
    
    timerID = setInterval(function() {
        num--;
        par2.textContent = num;
        if (num <= 0) {
            clearInterval(timerID);
        }
    }, 1000)

}


//Task 5
//Дан инпут с числом. 
//Сделайте так, чтобы каждую секунду 
//в нем появлялся квадрат того числа, которое в нем записано.

let input = document.querySelector('#input');

input.addEventListener('click', function() {
    let num = Number(this.value);
    
    setInterval(function() {
        num = num ** 2;
        input.value = num;

    }, 1000);

});


//Task 6
//Дан инпут. В него вводится число. 
//По потери фокуса сделайте так, 
//чтобы в абзаце ниже начал тикать обратный отсчет, 
//начиная с введенного числа. 
//Когда отсчет дойдет до нуля - он должен закончится.

let input2 = document.querySelector('#input2');
let par3 = document.querySelector('#par3');
let timerid;

input2.addEventListener('blur', countdown);

function countdown() {
    let num = Number(this.value);

    timerid = setInterval(function() {
        par3.textContent = num;
        num--;

        if (num < 0) {
            clearInterval(timerid);
        }
    }, 1000)
}


//Task 7
//Дан инпут, кнопка и абзац. 
//В инпут вводится какое-то число. 
//По нажатию на кнопку запишите введенное число в текст абзаца 
//и запустите обратный отсчет в абзаце: 
//пусть каждую секунду число в абзаце уменьшается на единицу, 
//пока не дойдет до нуля.

let input7 = document.querySelector('#input7');
let par7 = document.querySelector('#par7');
let btn7 = document.querySelector('#btn7');
let timerID7;

btn7.addEventListener('click', function() {
    let num = Number(input7.value);

    timerID7 = setInterval(function() {
        par7.textContent = num;
        num--;

        if (num < 0) {
            clearInterval(timerID7);
        }
    }, 1000)
});


//Task 8
//Дан абзац и две кнопки. 
//Сделайте так, чтобы по нажатию на первую кнопку 
//в абзаце начал тикать таймер от 1 до бесконечности, 
//а по нажатию на вторую таймер останавливался.

let par8 = document.querySelector('#par8');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let timerId8;

startBtn.addEventListener('click', startCounting);

function startCounting() {
    let num = 1;
    
    timerId8 = setInterval(function() {
        par8.textContent = num;
        num++;
    }, 1000)

    stopBtn.addEventListener('click', function() {
        clearInterval(timerId8);
        startBtn.addEventListener('click', startCounting);
    });

    startBtn.removeEventListener('click', startCounting);
}


//Task 9
//Дан абзац. 
//Сделайте так, чтобы каждую секунду он менял свой цвет 
//с красного на зеленый и наоборот.

let par9 = document.querySelector('#par9');
let state = false;

setInterval(function() {
    state = !state;

    let color = state ? par9.style.color = 'red' : par9.style.color = 'green'

}, 1000);


//Task 10
//Если выводить на экран каждую секунду 
//текущий момент времени, 
//то можно сделать тикающие часы. Реализуйте clocks and 
//Сделайте так, чтобы каждую секунду они меняли свой цвет

let clock = document.querySelector('#clock');
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    let arr = ['#6E45E1', '#03C8A8', '#E61D8C', '#C8C85E'];
    let color = arr[getRandomNum(0, arr.length - 1)];

    return color;
}

setInterval( function() {
    seconds = new Date().getSeconds();
    minutes = new Date().getMinutes();
    hours = new Date().getHours();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    clock.textContent = `${hours} : ${minutes} : ${seconds}`;
    clock.style.color = getRandomColor();

}, 1000)