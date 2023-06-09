/* 
Многострочный режим включается флагом m.

Он влияет только на поведение ^ и $.

В многострочном режиме они означают не только начало/конец текста, 
но и начало/конец каждой строки в тексте.
*/

/*
Поиск в начале строки ^.
В примере ниже текст состоит из нескольких строк. 
Шаблон /^\d/gm берёт цифру с начала каждой строки:
*/

let str = `1st place: Busya,
2nd place: Sam,
3rd place: Varya`;
console.log(str.match(/^\d/gm)); // (3) ['1', '2', '3']

//без флага m было бы найдено только первое число:
console.log(str.match(/^\d/g)); // ['1']


/*
Поиск в конце строки $.
Символ доллара $ ведёт себя аналогично.
Регулярное выражение \d$ ищет последнюю цифру в каждой строке:
*/
let str2 = `Varya: 1 
Busya: 2
Sam: 3`; // don't put commas after numbers!!!
console.log(str2.match(/\d$/g) ); // (3) ['1', '2', '3']