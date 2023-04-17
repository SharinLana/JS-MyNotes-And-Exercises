/* Null, undefined, NaN, infinity, 0, -0, -1, etc. to True or False */

//Значения, которые при приведению к логическому типу дают false:
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(+0));         // false
console.log(Boolean(null));       // false
console.log(Boolean(false));      // false
console.log(Boolean(NaN));        // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false

//Все остальные значения в JavaScript (в других языках бывает не так) дают true. 
console.log(Boolean(-1));          // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true
console.log(Boolean(true));        // true
console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true


let test = Boolean(3 * 'abc');
alert(test); //false (NaN)

let test2 = Boolean(Infinity);
alert(test2);

let test3 = Boolean(1 / 0);
alert(test3); //true (infinity)