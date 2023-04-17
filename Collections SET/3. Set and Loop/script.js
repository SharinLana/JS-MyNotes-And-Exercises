/*
Мы можем перебрать содержимое объекта set 
как с помощью метода for..of, так и используя forEach:
*/
let newSet = new Set(["апельсин", "яблоко", "банан"]);

for (let value of newSet) alert(value);

// то же самое с forEach:
newSet.forEach((value, valueAgain, set) => {
  alert(value);
});



// Task 1
// Создайте коллекцию Set с какими-нибудь числами. 
// Переберите эту коллекцию циклом 
// и найдите сумму ее элементов

let set = new Set([1, 2, 3, 4, 5]);
let sum = 0;

for (let elem of set) {
    sum += elem;
}
console.log(sum); // 15
