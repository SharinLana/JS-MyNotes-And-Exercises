/* a Built-in iterator for arrays */

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem); // 1 // 2 // 3 // 4 // 5
}
console.log(arr[Symbol.iterator]); // ƒ values() { [native code] }  - a built-in iterator



/* How to make a non-iteratable objects be iterable via the for-of loop */

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

function *createIterator(obj) { // asterisk is always needed in genereators, it allows us to use ""yield!!!
    for (let key in obj) {
        yield obj[key];
    }
}
let iterator = createIterator(obj); // we don't use asterisk when invoke the function
for (let elem of iterator) {
    console.log(elem);
}


// Task 1
// Сделайте функцию-генератор, которая будет возвращать итератор. 
// Первый вызов метода next итератора должен вернуть 1, 
// второй вызов - 2, третий вызов - 3.

function * createIterator2() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator2 = createIterator2();
console.log(iterator2.next()); // {value: 1, done: false}
console.log(iterator2.next()); // {value: 2, done: false}
console.log(iterator2.next()); // {value: 3, done: false}
console.log(iterator2.next()); // {value: undefined, done: true}


// Task 2
// Переберите итератор, полученный в предыдущей задаче через цикл for-of.

for (let elem of iterator2) {
    console.log(elem); // 1 // 2 // 3
}


// Task 3
// Дан массив. С помощью функции-генератора создайте итератор, 
// перебирающий элементы массива по одному.
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
let iterator3 = createIterator3(array);

function *createIterator3(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

for (let elem of iterator3 ) {
    console.log(elem); // a //b //c //d //e
}


// Task 4
// Дан массив. С помощью функции-генератора создайте итератор, 
// перебирающий элементы массива с конца.
let iterator4 = createIterator4(array);

function *createIterator4(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
        yield arr[i];
    }
}

for (let elem of iterator4) {
    console.log(elem); //e //d //c //b //a
}


// Task 5
// Дан массив. С помощью функции-генератора создайте итератор, 
// каждый вызов которого будет возвращать по два элемента массива 
// (сначала первые два, потом вторые два и так далее). 
// Элементы должны возвращаться в виде массива из двух элементов.

let iterator5 = createIterator5(array);

function *createIterator5(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield [ arr[i], arr[i + 1] ]
        arr.splice(0, 1);
    }
}
for (let elem of iterator5) {
    console.log(elem); //(2) ['a', 'b'] //(2) ['c', 'd'] //(2) ['e', 'f']
}


// Task 6
// Дан массив с числами. С помощью функции-генератора создайте итератор, 
// каждый вызов которого будет возвращать следующий элемент массива, 
// являющийся четным числом.

let arr6 = [1, 2, 3, 4, 5, 6];
let iterator6 = createIterator6(arr6);

function *createIterator6(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            yield arr[i];
        }
    }
}
for (let elem of iterator6) {
    console.log(elem); //2 //4 //6
}


// Task 7
// Дан массив с числами. С помощью функции-генератора создайте итератор, 
// каждый вызов которого будет возвращать следующее число Фибоначчи.

let iterator7 = createIterator7(arr6);

function *createIterator7(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1]) {
            yield arr[i - 1] + arr[i];
        }
        
    }
}
for (let elem of iterator7) {
    console.log(elem); //3 //5 //7 //9 //11
}