// Хорошей практикой считается не зашивать какие-то значения в модуль, 
// а передавать их параметром самого модуля 
// (то есть параметром вызывающейся на месте функции)

// Task 1

; (function(selector1, selector2) {
    let div = document.querySelector(selector1);
    let btn = document.querySelector(selector2);

    btn.addEventListener('click', function() {
        div.textContent = func(div.textContent);
    });

    function func(num) {
        return num * 3;
    }

})('#div', '#btn');


// Task 2
// Дана кнопка и три инпута, в которые вводятся числа. 
// По нажатию на кнопку выведите в консоль сумму введенных чисел. 
// Реализуйте задачу с помощью модуля.

; (function(selector1, selector2) {
    let inputs = document.querySelectorAll(selector1);
    let btn = document.querySelector(selector2);

    btn.addEventListener('click', function() {
        let sum = 0;

        for (let input of inputs) {
            sum += +input.value;
        }

        console.log(sum);
    })

})('.inp', '.btn');



// Task 3
// Передача родительского элемента в модуль через замыкания:
// передают в модуль общего родителя всех элементов, 
// с которыми работает наш модуль, 
// а уже внутри модуля получают из этого родителя различные элементы.

; (function(selector) {
    let parent = document.querySelector(selector);
    let divs = parent.querySelectorAll('.div');
    let btn = document.querySelector('#button');
    let res = document.querySelector('#res');

    btn.addEventListener('click', function() {
        let sum = 0;
        for (let div of divs) {
            sum += +div.textContent;
        }

        res.textContent = sum;
        res.style.color = 'green';
    });

})('#parent');


// Task 4
// Передача настроек модуля через замыкания

let config = {
    parent: '#container',
    type: 'p',
    amount: 5
};

; (function(config, selector) {
    let parent = document.querySelector(config.parent);
    let btn = document.querySelector(selector);

    btn.addEventListener('click', function() {
        for (let i = config.amount; i >= 1; i--) {
            let par = document.createElement(config.type);
            par.textContent = i;
    
            parent.insertAdjacentElement('afterbegin', par);
        }
    });

})(config, '#click');


// Task 5
// Параметры по умолчанию
// Пусть мы хотим разрешить при использовании модуля не указывать все настройки. 
// Если какая-то из настроек не будет указана, то она примет значение по умолчанию

let data = {
    parent: '#container2',
    amount: 5
};

; (function( { parent, type = 'input', amount }, selector) {
    let div = document.querySelector(parent);
    let btn = document.querySelector(selector);

    btn.addEventListener('click', function() {
        for (let i = 1; i <= amount; i++) {
            let input = document.createElement(type);
            div.appendChild(input);
        }
    })
})(data, '#click2')
