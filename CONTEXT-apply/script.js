/*
apply() работает практически так же, как и метод call. 
Разница заключается в том, что в apply 
параметры передаются в виде массива, 
а не перечисляются через запятую. 

Вот пример передачи параметров в метод apply:
func.apply(elem, [param1, param2]);
*/

let elem = document.querySelector('#elem');

function func(lastName, name) {
    console.log(this.value + " " + name + " " + lastName);
}

func.apply(elem, ['Smith', 'John'])