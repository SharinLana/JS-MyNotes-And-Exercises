// Task 1
// Даны абзацы. С помощью функции forEach 
// для каждого абзаца добавьте в конец его текста восклицательный знак

let elems = document.querySelectorAll('.elem');

elems.forEach(elem => {
    elem.textContent = elem.textContent + '!';
})

// Task 2
// Даны абзацы. С помощью функции forEach для каждого абзаца 
// добавьте ему в начало его порядковый номер.
elems.forEach((elem, index) => {
    elem.textContent = index + " - " + elem.textContent;
})


