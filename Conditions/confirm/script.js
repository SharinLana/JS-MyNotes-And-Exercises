/* Function CONFIRM() */
//Эта функция вызывает окошко с вопросом, на который нужно ответить пользователю, 
//и двумя кнопками для ответа: с кнопкой 'ОК' и с кнопкой 'Отмена'.
//Если пользователь нажмет 'ОК' - то функция вернет и запишет в переменную true, 
//а если 'Отмена' - то вернет и запишет в переменную false.

let ok = confirm('Have you slept last night?');
if (ok) {
	alert('You answered Yes');
} else {
	alert('You answered No');
}

let age = confirm('Are you 18 or older?');
if (age) {
    alert(`Welcome to the website!`);
}
else {
    alert(`You are too young to enter this website`);
}