/*
метод some проверяет элементы массива и возвращает true, 
если хотя бы для одного элемента коллбэк вернул true, 
в противном случае метод возвращает false.

It acts like the || operator
*/

//Task: Проверим, что в массиве есть хотя бы одно четное число:
let arr = [2, 4, 6, 8];

let result = arr.some(elem => elem % 2 == 0);
console.log(result); // true


//Task: Дан массив с числами. 
//Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let array = [-1, -2, -3, 4, 5, 6];

let result2 = array.some(elem => elem > 0);
console.log(result2); // true


//Task: Дан массив с числами. 
//Проверьте то, что хотя бы для одного элемента произведение его значения 
//на порядковый номер больше 30.
let array3 = [2, 4, 6, 8];

let result3 = array3.some((elem, index) => elem * index > 30);
console.log(result3); // false