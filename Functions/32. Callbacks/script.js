/*

Функции можно передавать параметрами в другие функции. 
Такие функции-параметры называются коллбэками

*/

function each(arr, callback) {
    let newArr = [];

    for (let elem of arr) {
        newArr.push(callback(elem));
    }

    return newArr;
}

/*

Наша функция each - универсальная. 
Это значит, что мы можем передавать в нее различные коллбэки, 
выполняя разные операции над массивами. 
При этом код нашей функции останется неизменным - 
будут меняться только передаваемые коллбэки.

*/

let result = each([1, 2, 3, 4, 5], function(num) {
    return num * num;
});

console.log(result);


/*

Коллбэки не обязательно должны быть анонимными функциями.

*/
function cube(num) {
    return num ** 3;
}

function powerElems(arr, callback) {
    let newArr = [];

    for (let elem of arr) {
        newArr.push(callback(elem));
    }

    return newArr;
}

let done = powerElems([1, 2, 3, 4, 5], cube);

console.log(done);




//Task: Дан массив со строками. 
//С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
function each(arr, callback) {
    newArr = [];

    for (let elem of arr) {
        newArr.push(callback(elem));
    }

    return newArr;
}

let res = each(['string', 'bug', 'couple', 'debug'], function(elem) {
    return elem.split('').reverse().join('');
})
console.log(res);


//Task: Дан массив со строками. 
//С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
function eachElem(arr, callback) {
    let newArr = [];

    for (let elem of arr) {
        newArr.push(callback(elem));
    }

    return newArr;
}

let received = eachElem(['string', 'bug', 'couple', 'debug'], function(elem) {
    let newElem = elem.split('');
    let arr = [];

    for (let i = 0; i < newElem.length; i++) {
        if (i == 0) {
            arr.push(newElem[i].toUpperCase());
        }
        else {
            arr.push(newElem[i]);
        }
    }

    return arr.join('');
});

console.log(received);


