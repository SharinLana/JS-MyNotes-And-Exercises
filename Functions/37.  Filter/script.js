/*
этот метод в параметре получает функцию-коллбэк (с такими же параметрами, как и методы map и forEach), 
которая выполнится для каждого элемента массива.

Своим результатом filter возвращает новый массив, в который войдут только те элементы, 
для которых коллбэк вернет true.
*/

//Task: отфильтруем массив, оставив в нем только четные числа:
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(elem => {
    return elem % 2 == 0;
});
console.log(result);


//упростим код, используя стрелочные функции:
let array = [1, 2, 3, 4, 5, 6];

let result2 = array.filter(elem => elem % 2 == 0);
console.log(result2);


//Task: Дан массив с числами. Оставьте в нем только положительные числа.
let array3 = [1, 2, 3, -4, 5, -6];

let result3 = array3.filter(elem => elem > 0);
console.log(result3);


//Task: Дан массив с числами. Оставьте в нем только числа, 
//которые больше нуля, но меньше 10.

let array4 = [2, 12, 3, 45, 8, 10];

let result4 = array4.filter(elem => elem > 0 && elem < 10);
console.log(result4);


//Task: Дан массив со строками. 
//Оставьте в нем только те строки, длина которых больше 5-ти символов.
let array5 = ['I', 'am', 'studying', 'JavaScript'];

let result5 = array5.filter(elem => elem.length > 5);
console.log(result5);


//Task: Дан массив с числами. Оставьте в нем только те числа, 
//произведение которых на их порядковый номер меньше 30.
let array6 = [12, 23, 3, 8, 11];

let result6 = array6.filter((elem, index) => elem * index < 30);
console.log(result6);


//Task: Дан массив, в нем могут быть обычные элементы и подмассивы, 
//например [1, 2, [3, 4], 5, [6, 7]]. 
//Оставьте в нем только обычные элементы.
let array7 = [1, 2, [3, 4], 5, [6, 7]];

let result7 = array7.filter(elem => typeof elem !== 'object');
console.log(result7);


//Task: Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let array8 = [1, 2, -3, 4, -5, -6, 7, 8];

let filtered = array8.filter(elem => elem < 0).length;
console.log(filtered);