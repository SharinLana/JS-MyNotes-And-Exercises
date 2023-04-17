/*
С помощью коллекций Set легко можно удалять дубли из массивов. 
Для этого массив нужно преобразовать в коллекцию Set. 
Так как эта коллекция не может содержать дубли элементов, 
то при преобразовании они исчезнут. 
Если затем преобразовать коллекцию обратно в массив, 
то мы получим массив без дублей.
*/

// Task 1
let arr = [1, 2, 3, 1, 3, 4];
let set = new Set(arr);

let arrWithoutDuplicates = [...set];
let arrNoDuplicates = Array.from(set); 
console.log(arrWithoutDuplicates); // (4) [1, 2, 3, 4]
console.log(arrNoDuplicates); // (4) [1, 2, 3, 4]


/* Получение дом элементов без дублей */

// Task 2
// Пусть у нас есть абзацы и кнопка
// Пусть пользователь кликает на эти абзацы в произвольном порядке. 
// Давайте сделаем так, чтобы по нажатию на кнопку 
// в конец каждого абзаца, на который был совершен клик, 
// был добавлен восклицательный знак. 
// Решим задачу через Set

let pars = document.querySelectorAll('p');
let btn = document.querySelector('button');

let newSet = new Set;

for (let par of pars) {
    par.addEventListener('click', function() {
        newSet.add(this);
    })
}

btn.addEventListener('click', function() {
    for (let elem of newSet) {
        elem.textContent = elem.textContent + "!";
    }
})