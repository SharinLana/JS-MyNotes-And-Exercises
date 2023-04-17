/* INCREMENT | DECREMENT */

//PREFIX (++a) & POSTFIX (a++)
//При POSTFIX (a++) переменная сначала выведется, а потом увеличится на единицу,
//В случае PREFIX (++a) сначала произойдет увеличение переменной на 1, а затем - вывод значения

let num = 0;
alert(num++); // выведет 0 (исходное значение переменной), но сразу после добавит в нее 1
alert(num);   // выведет 1

let numTwo = 0;
alert(++numTwo); // выведет 1 - переменная увеличилась сразу



let num1 = 3;
let num2 = num1++;
alert(num1); //4
alert(num2); //3


let num3 = 3;
let num4 = --num3;
alert(num3); //2
alert(num4); //2


let num5 = 3;
let num6 = num5--;
alert(num5); //2
alert(num6); //3


let num7 = 3;
num7++; //4
let num8 = num7--; //4
alert(num7++); //3
alert(--num8); //3