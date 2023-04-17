/* Exponentiation */

//Use the ** operator for this purpose
console.log(10 ** 3); // 1000

let a = 10;
console.log(a ** 3); // 1000

let b = 10;
let c = 3;
console.log(b ** c); // 1000

let d = 2;
let dExp = d ** 10;
console.log(dExp)


/* Exponentiation takes precedence (приоритет) over multiplication and division. */
console.log(2 * 2 ** 3); // 2 * 8 = 16

let e = 3 * 2 ** 3;
console.log(e); //24

let f = (3 * 2) ** 3;
console.log(f); // 6 ** 3 = 216

let g = 3 * 2 ** (3 + 1);
console.log(g); //3 * 2 ** 4 = 3 * 16 = 48

let h = 2 ** 3 * 3;
console.log(h); //24

let i = 3 * 2 ** 3 * 3;
console.log(i); //3 * 8 * 3 = 24 * 3 = 72