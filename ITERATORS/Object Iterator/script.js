// Task 1
// Дан объект. С помощью функции-генератора создайте его итератор, 
// переберите элементы этого объекта с помощью цикла for-of.

let obj = {a: 1, b: 2, c: 3, d: 4};
let obj2 = {1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday"};

let iterator1 = createIterator1(obj);
let iterator2 = createIterator1(obj2);

function *createIterator1(obj) {
    for (let key in obj) {
        yield obj[key];
        // yield {key: key, value: obj[key]};  
    }
}

for (let elem of iterator1) {
    console.log(elem); //1 //2 //3 //4
}

for (let elem of createIterator1(obj2)) {
    console.log(elem); //Sunday //Monday //Tuesday //Wednesday
}


/* One more way to create an iterator for  an object */
let object = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function *() {
        for (let key in this) {
            yield this[key]
        }
    }
};

for (let elem of object) {
    console.log(elem); //1 //2 //3
}


let string = 'abcde';

let arr = (str) => {
    
    return [...str]
}

console.log(arr(string));




// Task 2
// Дан объект. Сделайте так, 
// чтобы к нему можно было применить оператор spread 
// и при этом возвращались значения объекта

let obj3 = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    [Symbol.iterator]: function *() {
        for (let key in this) {
            yield this[key]
        }
    }
};

let values = [...obj3];
console.log(values);


// Task 3
// Дан объект. Сделайте так, 
// чтобы к нему можно было применить оператор spread 
// и при этом возвращались ключи объекта.

let obj4 = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    [Symbol.iterator]: function *() {
        for (let key in this) {
            yield key;
        }
    }
};

let arr4 = [...obj4];
console.log(arr4); //(4) ['a', 'b', 'c', 'd']


// Task 4
// Сделайте функцию, которая параметром будет принимать строку, 
// а возвращать массив ее символов.

let str = 'abcde';
let array = [...str];
console.log(array); // (5) ['a', 'b', 'c', 'd', 'e']


// Task 5
// Сделайте функцию, которая параметром будет принимать строку 
// и выполнять переворот этой строки так, 
// чтобы символы шли в обратном порядке.
let str5 = 'abcde';
let array5 = (str) => {
    let arr = [...str];
    return arr.reverse().join('');
};
console.log(array(str5)); // edcba


// Task 6
// Дано число. Найдите сумму цифр этого числа.
let num = 12345;
let sum = 0;

for (let elem of [...String(num)]) {
    sum += +elem;
}

console.log(sum); // 15