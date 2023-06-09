
/* Количество {n} */

//Точное количество: \d{5} эквивалентен \d\d\d\d\d.
//Диапазон: \d{3,5}
//\d{3,} найдёт последовательность чисел длиной 3 и более цифр
let str = "+7(903)-123-45-67";
let numbers = str.match(/\d{1,}/g);
console.log(numbers); // 7,903,123,45,67



/* Короткие обозначения */

// +
//Означает «один или более». То же самое, что и {1,}.
//Например, \d+ находит числа (из одной или более цифр):
let str2 = "+7(903)-123-45-67";
console.log(str2.match(/\d+/g)); // (5) ['7', '903', '123', '45', '67']


// ?
// Означает «ноль или один». То же самое, что и {0,1}. По сути, делает символ необязательным.
// Например, шаблон ou?r найдёт o после которого, возможно, 
//следует u, а затем r.
//Поэтому шаблон colou?r найдёт два варианта: color и colour
let str3 = "Следует писать color или colour?";
console.log( str3.match(/colou?r/g) ); // color, colour


// *
//Означает «ноль или более». То же самое, что и {0,}.
//То есть символ может повторяться много раз 
//или вообще отсутствовать.
//Например, шаблон \d0* находит цифру и все нули за ней 
//(их может быть много или ни одного)
console.log( "100 10 1".match(/\d0*/g) ); // 100, 10, 1
console.log( "100 10 1".match(/\d0+/g) ); // 100, 10


//Example:
//Регулярное выражение для десятичных дробей 
//(чисел с плавающей точкой): \d+\.\d+
console.log( "0 1 12.345 7890".match(/\d+\.\d+/g) ); // 12.345


//Example
//Регулярное выражение для «открывающего HTML-тега без атрибутов», 
//например, <span> или <p>.
//Самое простое: /<[a-z]+>/i
//Улучшенное: /<[a-z][a-z0-9]*>/i
console.log( "<h1>Привет!</h1>".match(/<[a-z][a-z0-9]*>/gi) ); // <h1>


//Example:
//Регулярное выражение для «открывающего 
//или закрывающего HTML-тега без атрибутов»: 
///<\/?[a-z][a-z0-9]*>/i

//В начало предыдущего шаблона 
//мы добавили необязательный слеш /?. 
//Этот символ понадобилось заэкранировать, 
//чтобы JavaScript не принял его за конец шаблона.
console.log( "<h1>Привет!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) ); // <h1>, </h1>


//Task: Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
let regexp = /\.{3,}/g;
console.log( `Hey... How Are you?.....`.match(regexp)); // (2) ['...', '.....']


//Task: Напишите регулярное выражение, которое ищет HTML-цвета 
//в формате #ABCDEF: 
//первым идёт символ #, и потом – 6 шестнадцатеричных символов.
let regexp2 = /\#[a-z0-9]{6}\b/gi; //with \b (break)
let regexp3 = /\#[a-z0-9]{6}/gi; //without \b
let str4 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
console.log(str4.match(regexp2)); // (2) ['#121212', '#AA00ef']
console.log(str4.match(regexp3)); // ['#121212', '#AA00ef', '#123456'] (finds also a part of the #12345678 element)


/*
Ленивый режим

«Ленивый» режим противоположен «жадному». 
Он означает: «повторять квантификатор наименьшее количество раз».

Мы можем включить его, вставив знак вопроса '?' 
после квантификатора, то есть будет *? или +? или даже ?? для '?'.

Проясним: обычно знак вопроса ? сам по себе является квантификатором (ноль или один), 
но, если он добавлен после другого квантификатора 
(или даже после самого себя), он получает другое значение – 
он меняет режим совпадения с жадного на ленивый.
*/

//Task: У нас есть текст, в котором нужно find all words with "..." 

let regexp5 = /".+?"/g; //lazy 
let regexp6 = /".+"/g; //greedy 
let regexp7 = /<.+?>/g;
let str5 = 'a "witch" and her "broom" is one';
console.log( str5.match(regexp5) ); // ['"witch"', '"broom"'] (it'll take the first and second " in the text)
console.log( str5.match(regexp6) ); // ['"witch" and her "broom"'] (it'll take the very first and the very last " sign in the string)


/*
Альтернативный подход - «хорошо настроенный» жадный поиск

В нашем случаем мы можем найти кавычки без использования ленивого режима 
с помощью регулярного выражения "[^"]+"
*/

let regexp8 = /"[^"]+"/g;
let str8 = 'a "witch" and her "broom" is one';
console.log( str8.match(regexp8) ); //  ['"witch"', '"broom"']


//Task:
let regexp9 = /<!--.*?-->/gs;

let str9 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log( str9.match(regexp9) ); // '<!-- My -- comment \n test -->', 


//Task:
let regexp10 = /<[^>]*?>/g;
let str10 = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str10.match(regexp10) ); // '<a href="/">', '<input type="radio" checked>', '<b>'