/*

метод match позволяет получить ту часть строки, 
которая попала под регулярное выражение.

Этот метод работает по-разному в зависимости от того, 
есть модификатор g или нет. 

Если он есть - метод возвращает массив подстрок, 
которые попали под регулярное выражение. 
Если же совпадений нет, то возвращает null.

*/

// Task 1
// Давайте получим массив подстрок, 
// состоящих из букв 'a':
let str = 'a aa aaa aaaa';
let res = str.match(/a+/g);
console.log(res); //  ['a', 'aa', 'aaa', 'aaaa']


// Task 2
// Давайте получим массив чисел:
let str2 = '1 23 456 789';
let res2 = str2.match(/\d+/g)
console.log(res2); // ['1', '23', '456', '789']


// Task 3
// Давайте получим массив всех цифр(digits):
let str3 = '1 23 456 789';
let res3 = str3.match(/\d/g)
console.log(res3); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']


// Task 4
// Дана строка
// Получите массив доменных имен из этой строки.
let str4 = 'site.ru sss site.com zzz site.net';
let res4 = str4.match(/[a-z]+\.[a-z]{2,3}/g)
console.log(res4); // ['site.ru', 'site.com', 'site.net']


// Task 5
// Дана строка
// Найдите сумму всех чисел этой строки
let str5 = 'a1b c34d x567z';
let arr = str5.match(/\d/g);
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}
console.log(sum); // 26



/*

Карманы в методе match

Если вызвать метод match без модификатора g, 
то он найдет только первое совпадение с регуляркой. 

Однако, вернет он все равно массив 
состоящий из найденного совпадения, с дополнительными свойствами: 
index - позиция, на которой оно обнаружено 
и input - строка, в которой был поиск. 
А найденная подстрока будет лежать в нулевом элементе возвращенного массива.

найденное попадает в нулевой элемент массива.
остальные элементы этого массива попадают карманы.
Карманы - собой способ разбить найденное на отдельные части. 
Для их использования нужно заключить часть регулярки в круглые скобки. 
В этом случае в массиве кроме найденной строки также появится и то, 
что попало в круглые скобки.

*/

// Task 6
let str6 = 'zzz xaaax xaaaax xaaaaax';
let res6 = str6.match(/xa+x/);
console.log(res6); // ['xaaax', index: 4, input: 'zzz xaaax xaaaax xaaaaax', groups: undefined]
console.log(res6[0]); // xaaax
console.log(res6.index); // 4
console.log(res6.input); // zzz xaaax xaaaax xaaaaax


// Task 7
// ищем строки по шаблону:
//  буквы 'x', а между ними - от одной и более букв 'a'. 
// При этом найденные буквы 'a' попадут в карман
let str7 = 'sss xaaax zzz';
let res7 = str7.match(/x(a+)x/);
console.log(res7); // (2) ['xaaax', 'aaa', index: 4, input: 'sss xaaax zzz', groups: undefined]
console.log(res7[0]); // xaaax
console.log(res7[1]); // aaa


// Task 8
let str8 = 'sss xaaa-bbbx zzz';
let res8 = str8.match(/x(a+)-(b+)x/);
console.log(res8); // (3) ['xaaa-bbbx', 'aaa', 'bbb', index: 4, input: 'sss xaaa-bbbx zzz', groups: undefined]


// Task 9
// Дана строка, содержащая домен.
// Найдите этот домен 
// и положите его имя в первый карман, а зону - во второй.
let str9 = 'sss domain.ru zzz';
let res9 = str9.match(/([a-z]+)\.([a-z]{2})/);
console.log(res9); // ['domain.ru', 'domain', 'ru', index: 4, input: 'sss domain.ru zzz', groups: undefined]


// Task 10
// Дана строка, содержащая дату.
// Положите день в первый карман, 
// месяц - во второй, а год - в третий.
let str10 = '31.12.2025';
let res10 = str10.match(/(\d{2})\.(\d{2})\.(\d{4})/);
console.log(res10); // (4) ['31.12.2025', '31', '12', '2025', index: 0, input: '31.12.2025', groups: undefined]