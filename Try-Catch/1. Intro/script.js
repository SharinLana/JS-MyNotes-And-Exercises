// Task 1
// Дан код, который записывает некоторую строку в локальное хранилище
// Оберните этот код в конструкцию try-catch. 
// В блоке catch выведите сообщение о переполнении хранилища. 
// Проверьте работу вашего кода для строки размером менее 5 мб 
// и для строки большего размера.

let str = '';

try {
    for (let i = 0; i <= 10; i++) {
        str += i;
    }
    localStorage.setItem('key', str);
    let res = localStorage.getItem('key');
    console.log(res);

} catch (err) {
    console.log(err);
}


// Task 2
// Дан JSON, внутри которого хранится массив. 
// Если этот JSON корректный, 
// то выведите элементы массива в виде списка ul. 
// Если же JSON не корректный, 
// выведите на экран сообщение о том, что на странице случилась ошибка.
let ul = document.querySelector('ul');
let json = `["january","february","march","april","may","june","july","august","september","october","november","december"]`;

try {
    let array = JSON.parse(json);

    for (let elem of array) {
        let li = document.createElement('li');
        li.textContent = elem;
        ul.append(li);
    }

} catch (error) {
    alert(`An error occured`);
    console.log(error);
}


// Task 3
// Специально создайте исключительную ситуацию, 
// связанную с попыткой разбора некорректного JSON. 
// Выведите в консоль имя и текст этой ошибки

let jsonStr = [1, 2, 3, 4, 5];

try {
    let jsStr = JSON.parse(jsonStr);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// 
let jsonString = [1, 2, 3, 4, 5];

function saveData(str) {
    let jsArr = JSON.parse(str);

    for (let i = 0; i < jsArr.length; i++) {
        localStorage.setItem(i, jsArr[i]);
        console.log(localStorage.getItem(i, jsArr[i]))
    }
}

try {
    saveData(jsonString);

} catch (error) {
    if (error.name === 'SyntaxError') {
        console.log("incorrect JSON")
    }
}
