/*
Обратная ссылка по номеру: \N

К группе можно обратиться в шаблоне, используя \N, 
где N – это номер группы.

Мы не можем обратиться к группе, 
которая исключена из запоминания при помощи ?:.

В строке замены для вставки группы мы используем доллар: $1, 
а в шаблоне обратный слеш \1.

Для того, чтобы шаблон искал закрывающую кавычку такую же, 
как и открывающую, 
обернём открывающие кавычки в скобочную группу 
и используем обратную ссылку на неё: (['"])(.*?)\1
*/

let str = `He said: "She's the one!".`;
let regexp = /(['"])(.*?)\1/g;

console.log( str.match(regexp) ); // "She's the one!"

//Движок регулярных выражений находит первую кавычку из шаблона (['"]) 
//и запоминает её содержимое. Это первая скобочная группа.

//Далее в шаблоне \1 означает «найти то же самое, 
//что в первой скобочной группе», 
//а именно – аналогичную кавычку в нашем случае.

//Аналогично, \2 означает содержимое второй скобочной группы, 
//\3 – третьей, и так далее.



/*
Обратная ссылка по имени: \k<имя>

Если в регулярном выражении много скобочных групп, то удобно давать им имена.
Для обращения к именованной группе можно использовать синтаксис \k<имя>.

В примере ниже кавычки обозначены ?<quote>, 
так что обращение будет \k<quote>:
*/

let str2 = `He said: "She's the one!".`;
let regexp2 = /(?<quote>['"])(.*?)\k<quote>/g;

alert( str2.match(regexp2) ); // "She's the one!"