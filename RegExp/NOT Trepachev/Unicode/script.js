/*
В JavaScript для строк используется кодировка Юникод. 
Обычно символы кодируются с помощью 2 байтов, 
что позволяет закодировать максимум 65536 символов.

Этого диапазона не хватает для того, чтобы закодировать все символы. 
Поэтому некоторые редкие символы кодируются с помощью 4 байтов, 
например 𝒳 (математический X) или 😄 (смайлик), некоторые иероглифы, и т.п.

Когда-то давно, на момент создания языка JavaScript, 
кодировка Юникод была проще: символов в 4 байта не существовало. 
И, хотя это время давно прошло, многие строковые функции 
всё ещё могут работать некорректно.

Например, свойство length считает, что здесь два символа:

alert('😄'.length); // 2
alert('𝒳'.length); // 2

В отличие от строк, у регулярных выражений есть специальный флаг u, 
который исправляет эту проблему. 
При его наличии регулярное выражение 
работает с 4-байтными символами правильно.
*/

/*
Юникодные свойства \p{…}
Каждому символу в кодировке Юникод соответствует множество свойств. 
Например, \p{Letter} обозначает букву в любом языке. 
Также можно использовать запись \p{L}

В примере ниже будут найдены английская, грузинская и корейская буквы:
*/
let str = "A ბ ㄱ";

alert( str.match(/\p{L}/gu) ); // A,ბ,ㄱ
alert( str.match(/\p{L}/g) ); // null (ничего не нашло, так как нет флага "u")

/*
Вот основные категории символов и их подкатегории:

Буквы L:
    в нижнем регистре Ll,
    модификаторы Lm,
    заглавные буквы Lt,
    в верхнем регистре Lu,
    прочие Lo.
Числа N:
    десятичная цифра Nd,
    цифры обозначаемые буквами (римские) Nl,
    прочие No.
Знаки пунктуации P:
    соединители Pc,
    тире Pd,
    открывающие кавычки Pi,
    закрывающие кавычки Pf,
    открывающие скобки Ps,
    закрывающие скобки Pe,
    прочее Po.
Отметки M (например, акценты):
    двоеточия Mc,
    вложения Me,
    апострофы Mn.
Символы S:
    валюты Sc, 
    модификаторы Sk, 
    математические Sm, 
    прочие So.
Разделители Z:
    линия Zl,
    параграф Zp,
    пробел Zs.
Прочие C:
    контрольные Cc,
    форматирование Cf,
    не назначенные Cn,
    для приватного использования Co,
    суррогаты Cs.
Alphabetic (Alpha), включающая в себя:
    буквы L, 
    «буквенные цифры» Nl (например Ⅻ – символ для римской записи числа 12), 
    и некоторые другие символы Other_Alphabetic (OAlpha).
Hex_Digit включает:
    символы для шестнадцатеричных чисел: 0-9, a-f.
*/

/*Пример: китайские иероглифы
В Юникоде есть свойство Script (система написания), 
которое может иметь значения Cyrillic (Кириллическая), 
Greek (Греческая), Arabic (Арабская), Han (Китайская) и так далее.

Для поиска символов в нужной системе 
мы должны установить Script=<значение>, 
например для поиска кириллических букв: \p{sc=Cyrillic}, 
для китайских иероглифов: \p{sc=Han}, и так далее:
*/
let regexp = /\p{sc=Han}/gu; // вернёт китайские иероглифы
let str2 = `Hello Привет 你好 123_456`;
alert( str2.match(regexp) ); // 你,好

//Пример: валюта
let regexp3 = /\p{Sc}\d/gu;
let  str3 = `Цены: $2, €1, ¥9`;
alert( str3.match(regexp3) ); // $2,€1,¥9