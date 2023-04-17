/* Quote Types (' ', " ", ` `) */

//Разницы между кавычками ' ' и " " не существует
//Но есть особый тип кавычек - косые (oblique quotes). в них можно выполнять вставку переменных
//с помощью конструкции ${ }:
let str = 'xxx';
let txt = `aaa ${str} bbb`; // альтернатива "aaa " + str + " bbb"


let str1 = 'xxx';
let str2 = 'yyy';
let txt2  = `aaa ${str1} bbb ${str2} ccc`;
console.log(txt2); //aaa xxx bbb yyy ccc


//Косые кавычки специально предназначены для создания многострочных строк:
let text = `Hello
world
!`;
alert(text);