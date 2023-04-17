/*

метод test проверяет, есть ли в строке 
хотя бы одно совпадение с регуляркой. 
Если есть - возвращается true, а если нет - false. 

Метод параметром принимает строку, 
а применяется к регулярке, вот так: 
регулярка.test(где искать).

*/

/a+/.test('eee aaa bbb'); // вернет true

/*

Часто данный метод используется для проверки 
на соответствие регулярному выражению целой строки. 
В этом случае в начале регулярки ставят шляпку, а в конце - доллар:

*/
/^a+$/.test('aaaaaaaaa'); // вернет true


// Task 1
// Определите, начинается ли переданная строка с 'http://'
console.log(/^ht{2}p:\/\//.test('showmeshow.org')); // false


// Task 2
// Определите, начинается ли переданная строка с 'http://' или с 'https://'.
let test2 = /^(ht{2}p:\/\/)|(ht{2}ps:\/\/)/.test('https://www.code.mu/ru/javascript/book/supreme/regular/method-test/');
console.log(test2); // true


//Task 3
// Определите, заканчивается ли переданная строка расширением 'txt', 'html' или 'php'.
let test3 = /(txt$)|(html$)|(php$)/.test('file:///Users/sharinasvetlana/Desktop/Quiz%20JS/RegExp/TREPACHEV/Method%20Test/index.html');
console.log(test3); // true


// Task 4
// Определите, заканчивается ли переданная строка расширением 'jpg' или 'jpeg'
let test4 = /jpe*g$/.test('body.jpeg');
console.log(test4); // true


// Task 5
// Определите, заканчивается ли переданная строка расширением 'jpg', 'jpeg' или 'png'
let test5 = /jpe*g$|png$/.test('body.php');
console.log(test5); // false


// Task 6
// Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.
let test6 = /^\d{1,12}$/.test('1234567891011122');
console.log(test6); // false


// Task 7
// Определите, является ли переданная строка датой в формате год-месяц-день.
let test7 = /^\d{4}-\d{2}-\d{2}$/.test('2022-05-03');
console.log(test7); // true


// Task 8
// Определите, является ли переданная строка датой в формате день.месяц.год.
let test8 = /^\d{2}\.\d{2}\.\d{4}$/.test('31-12-2022');
console.log(test8); // false


// Task 9
// Определите, является ли переданная строка временем в формате часы:минуты:секунды
let test9 = /^\d{2}:\d{2}:\d{2}$/.test('03:34:16');
console.log(test9); // true


// Task 10
// Определите, является ли переданная строка корректным емэйлом.
let test10 = /^[a-zA-Z0-9_\-\.]+@[a-z]{3,}\.[a-z]{2,3}$/.test('lana.sharin.webdev@gmail.com');
console.log(test10); // true


// Task 11
// Определите, является ли переданная строка доменным именем.
let test11 = /\.[a-z]{2,3}$/.test('showmeshow.com');
console.log(test11); // true