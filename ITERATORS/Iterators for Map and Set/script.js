/* ITERATOR VALUES() */

// Iteartor values() for Arrays
//SET BY DEFAULT
let arr = [1, 2, 3, 4, 5];

for (let elem of arr.values()) {
    console.log(elem); //1 //2 //3 //4 //5
}


// Iterator values() for Map()
let map = new Map();
map.set('a', 1);
map.set('b', 2);

for (let elem of map.values()) {
    console.log(elem); //1 // 2
}


// Iterator values() for Set()
//DEFAULT ITERATOR
let set = new Set();
set.add('a');
set.add('b');
set.add('c');

for (let elem of set.values()) {
    console.log(elem); //a //b //c
}


/* ITERATOR KEYS() */

// Iterator keys() for Arrays
let arr2 = [1, 2, 3, 4, 5];

for (let key of arr2.keys()) {
    console.log(key); //0 //1 //2 //3 //4
}


// Iterator keys() for Map()
let map2 = new Map();
map2.set('day1', 'Sunday');
map2.set('day2', 'Monday');
map2.set('day3', 'Tuesday');

for (let key of map2.keys()) {
    console.log(key); //day1 //day2 //day3
}



/* ITERATOR ENTRIES() */

// Iterator entries() for Arrays
let arr3 = [1, 2, 3, 4];
for (let elem of arr3.entries()) {
    console.log(elem); //(2) [0, 1]  //(2) [1, 2]  //(2) [2, 3]  //(2) [3, 4]
}

//OR

for (let [key, value] of arr3.entries()) {
    console.log(key, value); //0 1  //1 2  //2 3  //3 4
}


// Iterator entries() for Map()
//SET BY DEFAULT
let map3 = new Map();
map3.set('day1', 'Sunday');
map3.set('day2', 'Monday');
map3.set('day3', 'Tuesday');

for (let elems of map3.entries()) {
    console.log(elems); //(2) ['day1', 'Sunday']  //(2) ['day2', 'Monday']  //(2) ['day3', 'Tuesday']
}


// Iterator entries() for Set()
let set3 = new Set([8, 9, 10]);

for (let elem of set3.entries()) {
    console.log(elem); //(2) [8, 8]  //(2) [9, 9]  //(2) [10, 10]
    //Set doesn't have keys that's why we can see this weird result
}



