/*
в локальном хранилище есть возможность 
хранить массивы и объекты - 
для этого просто можно использовать формат JSON

*/
/*
let arr = [1, 2, 3, 4, 5];
localStorage.setItem('arr', JSON.stringify(arr));
let JSONres = localStorage.getItem('arr');
let JSres = JSON.parse(JSONres);
console.log(JSONres); // [1,2,3,4,5]
console.log(JSres); // (5) [1, 2, 3, 4, 5]
*/

// Task 1
// Даны инпуты и кнопка. 
// По нажатию на кнопку получите тексты всех инпутов 
// в виде массива и сохраните этот массив 
// в локальное хранилище.
// Сделайте так, чтобы при следующем заходе на страницу 
// в инпутах стояли сохраненные в локальном хранилище значения.
let btn = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let array = [];
let localData = localStorage.getItem("data");

btn.addEventListener('click', function(e){
e.preventDefault();

for(let input of inputs) {
array.push(input.value);
}

let json = JSON.stringify(array);
localStorage.setItem("data", json);

console.log(localStorage.getItem("data")); 
})

if(localData) {
let arr = JSON.parse(localData); 

for(let i = 0, j = 0; i < inputs.length; i++, j++) {
inputs[i].value = arr[j];
} 
}


// Task 2
// Дан массив с юзерами.
// Сохраните его в локальное хранилище. 
// Затем сделайте 3 инпута и кнопку. 
// Пусть в инпуты вводятся фамилия, имя и возраст. 
// По нажатию на кнопку запишите нового юзера 
// в конец сохраненного в хранилище массива.
let elems = document.querySelectorAll('.elem');
let button = document.querySelector('.button');
let users = [
	{
		name: 'surname1',
		lastName: 'name1',
		age: 31,
	},
	{
		name: 'surname2',
		lastName: 'name2',
		age: 32,
	},
	{
		name: 'surname3',
		lastName: 'name3',
		age: 33,
	},
];

let saved = localStorage.setItem('users', JSON.stringify(users)); //saved to the localStorage
let jsonFormat = localStorage.getItem('users', saved); // got saved data
let jsFormat = JSON.parse(jsonFormat); // tranferred the JSON data to JS format

let keys = ['name', 'lastName', 'age']; // set key for the new object

button.addEventListener('click', function(e) {
    e.preventDefault();
    let object = {}; // set an empty object for the new data from inputs

    for (let i = 0; i < elems.length; i++) { //went through the inputs and set their values as values of the 'object'
        object[keys[i]] = elems[i].value;
    }

    jsFormat[jsFormat.length] = object; // added the new data to the existed JS array parsed from JSON localStorage
    
    let result = JSON.stringify(jsFormat); // tranferred the JS array to JSON format

    console.log(result); // [{"name":"surname1","lastName":"name1","age":31},{"name":"surname2","lastName":"name2","age":32},{"name":"surname3","lastName":"name3","age":33},{"name":"lana","lastName":"sharin","age":"40"}]
})



