/*
.sort((a,b) => a-b) for ascending numbers
and 
.sort((a,b) => b - a) for descending
*/

let array = [3, 8, -10, 23, 19, -4, -14, 27];
let ascendingNums = array.sort((a, b) => a - b);
console.log(ascendingNums);

let descendingNums = array.sort((a, b) => b - a);
console.log(descendingNums);


//Task
//Find the smallest word in the sentence

function func(str) {
    //First,  we need to get each word as an element (not each letter but each word).

    let words = str.split(" "); //don't forget to use space between ' ' to get a word.
    console.log(words); // output: ['The', 'smallest', 'word', 'in', 'the', 'sentence']

    let result = words.sort(function(a, b) {
        return a.length - b.length;
    }); // element length difference 
    console.log(result); // output: ['in', 'The', 'the', 'word', 'smallest', 'sentence']
    
    return result[0];
}

console.log(func('The smallest word in the sentence')); //output: in


//Arrow function alternative
const result = string => string.split(' ').sort((a, b) => a.length - b.length)[0];
console.log( result('The smallest word'))