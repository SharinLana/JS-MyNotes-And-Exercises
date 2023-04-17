let num = 12345;
let str = String(num).split('');
console.log(str)
let product = 1;

for (let elem of str) {
    product *= +elem;
}
console.log(product)



