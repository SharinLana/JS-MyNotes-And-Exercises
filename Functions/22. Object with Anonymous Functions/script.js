let obj = {
	func1: function() {alert(1)},
	func2: function() {alert(2)},
	func3: function() {alert(3)},
};

obj.func1(); // выведет 1


//Task: Сделайте объект с тремя функциями. 
//Пусть первая возвращает через return число 1, 
//вторая - число 2, третья - число 3. 
//С помощью созданных функций выведите на экран сумму возвращаемых чисел.

let object = {
    func1: function() {return (1)},
    func2: function() {return (2)},
    func3: function() {return (3)}
}

let sum = object.func1() + object['func2']() + object.func3();
console.log(sum); // 3

//Task: Переберите созданный объект циклом и выведите результаты работы функций на экран.

for (let func in object) {
    console.log(object[func]());
};



//Task: Сделайте объект с тремя функциями, 
//каждая из которых будет принимать параметром массив с числами. 
//Сделайте так, чтобы первая функция возвращала сумму элементов массива, 
//вторая функция - сумму квадратов, а третья - сумму кубов.
let arr = [1, 2, 3, 4, 5];

let objA = {
    sum: 
        function(arr) {
            let sum = 0; 
            for (let elem of arr) {
                sum += elem;
            }
            return sum;
        },

    sum2: 
        function(arr) {
            let sum2 = 0;
            for (let elem of arr) {
                sum2 = sum2 + elem ** 2;
            }
            return sum2;
        },

    sum3:
        function(arr) {
            let sum3 = 0;
            for (let elem of arr) {
                sum3 = sum3 + elem ** 3;
            }
            return sum3;
        }
};

console.log(objA.sum(arr));
console.log(objA.sum2(arr));
console.log(objA.sum3(arr));