/*
“This” keyword refers to an object that is executing the current piece of code. 
It references the object that is executing the current function.


this очень удобна - мы создаем всего одну функцию 
и привязываем ее к любому количеству инпутов. 

Если бы this не указывал на тот элемент, 
в котором произошло событие, 
то у нас бы такое не получилось - 
пришлось бы для каждого инпута 
создавать свою функцию с тем же кодом!
*/

//Task 1
//There are 2 inputs. 
//On focus removal, get the value of each input

let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

inp1.addEventListener('blur', func);
inp2.addEventListener('blur', func);

function func() {
    console.log(this.value);
}


/*
Давайте посмотрим, что будет, 
если в функции указать this, 
но не привязать ее ни к какому элементу.

В этом случае результат зависит от того, 
строгий у нас режим или нет. 

Если режим нестрогий, то в this будет хранится ссылка на window.
А если строгий, то в this будет хранится undefined.
*/

function func1() {
    console.log(this); //window
}
func1();



/*
Потеря контекста

Пусть у нас есть функция в функции.
если задать какую-либо переменную во внешней функции - 
она будет доступна во внутренней.

Есть, однако, нюанс: 
внутренняя функция имеет доступ ко всем переменным внешней, 
но не имеет доступа this. 

То есть: если внешняя функция привязана к какому-то DOM элементу, 
то this в ней будет указывать на этот элемент, 
но this внутренней функции - не будет!

На что же тогда будет указывать this внутренней функции? 
Ответ: он будет равен undefined (в строгом режиме) and window in the non-strict mode, 
так как функция ни к чему не привязана.

Такая ситуация, когда this указывает не на то, что нам нужно, 
называется потеря контекста.

 */


//Task 2
// Пусть у нас дан инпут
// Привяжем к этому инпуту функцию parent, 
//которая будет вызываться по потери фокуса инпутом.
//Давайте выведем содержимое this в консоль в двух местах: 
//внутри функции parent и внутри функции child
let input = document.querySelector('#input');

input.addEventListener('blur', parent);

function parent() {
    console.log(this); // <input type="text" id="input">

    function child() {
        console.log(this); // window
    }

    child();
}

parent();


//Task 3
// Пусть у нас дан инпут.
// Пусть теперь в одной и во второй функции мы будем выводить value инпута. 
let input2 = document.querySelector('#input2');

input2.addEventListener('blur', check);

function check() {
    console.log(this.value); //text

    function innerFunc() {
        console.log(this.value); //undefined
    }
    innerFunc();
}
check();



/*
Решение проблемы с контекстом

во внешней функции запишем this в любую переменную 
и эта переменная будет доступна во внутренней функции, 
как и все переменные (обычно эту переменную называют self). 
Таким образом мы передадим this из внешней функции во внутреннюю:
*/

//Task 4
let input3 = document.querySelector('#input3');

input3.addEventListener('blur', resolve);

function resolve() {
    console.log(this.value); // text
    let self = this.value;

    function innerFunc() {
        console.log(self); // text
    }

    innerFunc();
}



/*
Второе решение проблемы

Сделаем так, чтобы nested function принимала параметр,
А при вызове этой функции будем передавать в нее this
*/

//Task 5
let input4 = document.querySelector('#input4');

input4.addEventListener('blur', func2);

function func2() {
    function innerFunc(param) {
        console.log(param.value); //text
    }

    innerFunc(this); // transferred the argument as a patameter
}



/*
Третье решение проблемы

Третье решение проблемы заключается в использовании стрелочных функций, 
которые не так давно появились в JavaScript. 

Такие функции, помимо всего прочего, не имеют своего контекста, 
а сохраняют контекст родителя. 
*/

let input5 = document.querySelector('#input5');

input5.addEventListener('blur', solvation);

function solvation() {
    console.log(this.value); //text

    let innerFunc = () => {
        console.log(this.value); //text
    }

    innerFunc();
}


