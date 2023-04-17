/* True / False to String */

//При преобразовании к строке true и false превращаются в строкуЖ
alert(String(true));  // выведет true (значение true преобразуется в строку 'true')
alert(String(false)); // выведет false (значение false - в строку 'false')

//При сложении строки и логического значения, это логическое значение преобразуется в строку 
//и произойдет конкатенация:
console.log('a' + true); // atrue
console.log('1' + true); //1true
alert( String(true) + 1 ); //true1
alert( String(true) + Number(true) ); //true1