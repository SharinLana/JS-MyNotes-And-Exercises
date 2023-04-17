/*
прочитывать и записывать текст тега <textarea></textarea>
следует не через свойство innerHTML, а через value
*/

//Task 1:
//Даны текстареа и абзац. По потери фокуса в текстареа 
//запишите его текст в абзац.
let textarea = document.querySelector('#textarea');
let par = document.querySelector('#par');

textarea.addEventListener('blur', function() {
    par.textContent = textarea.value;
});


//Task 2:
//Дан текстареа. 
//On click, запишите в текстареа текст.
let txt = document.querySelector('#txt');

txt.addEventListener('click', function() {
    txt.value = `Success!`
})

