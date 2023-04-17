/*
В случае, когда нужно пройтись по массиву 
и, например, суммировать все значения, 
найти среднее или произвести какие-либо промежуточные действия, 
лучше использовать метод reduce.

Метод принимает два аргумента:
callback-функцию, выполняемую для запуска каждого элемента в массиве,
начальное значение initialValue.

Callback также принимает два аргумента: 
accumulator, который возвращает функция callback 
после посещения очередного элемента, 
и текущий элемент в цикле currentValue.

!!! => Функция reduce на пустом массиве 
И без переданного начального значения бросает TypeError <= !!!

Если initialValue передано, 
то на первой итерации функция будет вызвана 
с этим значением и значением первого элемента массива. 

Если же, initialValue не передано, 
то функция будет вызвана со значениями первого и второго элементов массива. 
Отсюда также следует, что если начальное значение не передано, 
то функция вызывается на один раз меньше, 
иначе ровно столько раз, сколько элементов в массиве.

Если массив пустой, и передано начальное значение, 
то оно является результатом работы функции, 
а результат f* игнорируется. 
Если же массив пуст, а начальное значение не передано, 
то выбрасывается TypeError.
*/


// Task 1
// Summarize all the numbers in the array
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, num) => total + num); 
console.log(sum) // 118.11

/*

Как использовать:
В этом примере reduce() принимает два параметра, total и число с которым сейчас идёт работа.
Метод проходится по каждому числу в массиве, как бы это было с циклом for.
Когда цикл только начинается, total имеет значение первого числа с начала массива (29.76), а числом в обработке становится следующее по этому же массиву число (41.85).
Конкретно в этом примере, нам надо прибавить настоящее число к total.
Такое вычисление повторяется для каждого числа в массиве и каждый раз настоящее число меняется на следующее число в массиве справа.
Когда уже нет чисел в массиве, метод отдаёт значение total.

*/

//Task 2
// Находим среднее число с JavaScript методом reduce
const arrayOfNums = [29.76, 41.85, 46.5];
const average = arrayOfNums.reduce((total, num, index, array) => {
  total += num;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average) // 39.37


// Task 3
// давайте сократим массив в другой массив, 
// в котом каждое число будет увеличено вдвое. 
// Для этого нам надо выставить изначальное значение для аккумулятора 
// на пустой, уже изначальный массив.

const array2 = [2, 3, 4, 5];
const doubled = array2.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
}, []);

console.log(doubled); // (4) [4, 6, 8, 10]


// Task 4
// Мы могли бы также отфильтровать числа, которые нам не нужны, 
// просто добавив if внутри функции.
const array3 = [45, 67, 112, 123, 3, 35];
const above50 = array3.reduce((total, amount) => {
    if (amount >= 50) {
        total.push(amount)
    }
    return total;
}, []);

console.log(above50); // (3) [67, 112, 123]


// Task 5
// Преимущество метода reduce становится очевидным, когда вам надо сделать map и filter вместе, и при этом у вас довольно большие объемы данных для обработки.
//При создании цепочки с map и filter, 
// получается то, что вы делаете одну и ту же работу дважды. 
// Вы отфильтровываете каждое значение 
// и затем вы пробегаетесь с указанными параметрами функции 
// по каждому оставшемуся из них. 
// А с reduce вы можете отфильтровать 
// и пробежаться по всему массиву за один подход.

// у вас есть коллекция данных и вам надо узнать то, 
// сколько типов каждого элемента находится в этой коллекции.
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const result = fruitBasket.reduce((type, amount) => {
    //amount - all the elements of the array, one by one (banana, cherry, orange, etc)
    //type - an empty object
    //type[amount] - names of the new keys in the new object
    //type[amount] = 1; - each element of the new object will have a unique key and a value = 1: {banana: 1, cherry: 1, orange: 1, apple: 1, fig: 1}
    
    if(!type[amount]) { // if it's undefined 
        type[amount] = 1; // give it a value = 1
    } else {
        type[amount] = type[amount] + 1; // otherwise, add 1 to the existing value
    }
    return type;
}, {})
console.log(result); // {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}


// Task 6
// Сливаем массив воедино с помощью reduce
// Мы выставляем изначальное значение на пустой массив 
// и далее конкатенируем данное значение с total.
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
    return total.concat(amount)
}, []);
console.log(flat); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Task 7
// надо получить уникальные цвета в переменной data, находящейся ниже.
const data2 = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data2.reduce((total, amount) => {
    amount.c.forEach(color => total.indexOf(color) === -1 ? total.push(color) : total);
    return total;
}, []);
console.log(colors); // (5) ['blue', 'green', 'black', 'orange', 'red']


/*
Pipeline с reduce()

вы можете можете работать с функциями, как с числами и строками.
*/

function increment(input) { return input + 1;}
function double(input) { return input * 2; }
function decrement(input) { return input - 1; }

let pipeline = [increment, double, decrement];

const res2 = pipeline.reduce((total, func) => {
    // total initially = 2 (we set this value ourselves)
    // func(total) - we passed 1 as an argument to each functon in the pipeline array
    //so for the 'increment', it will return 3
    //then for the 'double' it will retirn 3 * 2 = 6
    // then - for the 'decrement' - 6 - 1 = 5
    return func(total)
}, 2);
  console.log(res2 )// 5 

/* 
Так как пайплайн у нас является массивом,
 то он может быть легко модифицирован. 
 Если мы хотим что-нибудь увеличить на 1 три раза подряд,
  потом вдвое увеличить, вычесть 1 и разделить на два, 
  то нам будет достаточно просто изменить пайплайн.

  var pipeline = [
    increment,
    increment,
    increment,
    double,
    decrement,
    halve
  ];
*/


// Task 7
// reduce также способен возвращать массивы и объекты. 
// Причём передача будет происходить из итерации в итерацию 
// благодаря аккумулятору. 
// Это позволяет строить на reduce функции любой сложности.

// Для примера, давайте построим map

function mapViaReduce(arr, func) {
    return arr.reduce((total, item, index, arr) => {
        return total.concat( [func(item, index, arr)])
    }, [])
}
console.log(mapViaReduce([2, 3, 4, 6], function(item, index, arr) {
    arr[index] = item + index;
    return arr;
})); // 0: (4) [2, 4, 6, 9]
    // 1: (4) [2, 4, 6, 9]
    // 2: (4) [2, 4, 6, 9]
    // 3: (4) [2, 4, 6, 9]


// Task 8
// Выбор уникальных элементов массива
const someArray = [1, 2, 1, 2, -1, 10, 11];
const uniqueElems = someArray.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
console.log(uniqueElems); // (5) [1, 2, -1, 10, 11]


// Task 9
// Определение количества одинаковых элементов массива
// Чтобы получить количество каждого элемента в массиве, 
// дополнительно используем Map — это коллекция ключ-значение, как и Object.
const array5 = [1, 2, 1, 2, -1, 0, 0, 10, 10, 6];

const countSameElems = (arr) => {
    return arr.reduce((acc, item) => (acc.set(item, (acc.get(item) + 1 || 1))), new Map())
}
console.log(countSameElems(array5)); //0: {1 => 2}
                                    // 1: {2 => 2}
                                    // 2: {-1 => 1}
                                    // 3: {0 => 2}
                                    // 4: {10 => 2}
                                    // 5: {6 => 1}

