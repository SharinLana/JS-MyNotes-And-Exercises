/*
В проекте могут быть другие ситуации, 
которые для вас являются исключительными, 
а для JavaScript - нет. 

В таком случае мы можете создавать 
и выбрасывать свои, пользовательские исключения.

*/

// Для начала исключение нужно создать с помощью команды new Error,
new Error("divide-by-zero error");

//Пусть у нас есть функция, которая делит одно число на другое:
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("divide-by-zero-error");
  }
}

try {
  divide(10, 0);
} catch (error) {
  console.log(error);
}

// Task 1
// В JavaScript попытка извлечь корень из отрицательного числа
// не приводит к выбрасыванию исключения
// Напишите свою функцию, которая будет извлекать корень из числа
// и при этом выбрасывать исключение,
// если корень извлекается из отрицательного числа.

function getSquareRoot(num) {
  if (num >= 0) {
    return Math.sqrt(num);
  } else {
    throw {
      name: "SquareRootError",
      message: "attempt to take the square root of a negative number",
    };
  }
}

try {
  getSquareRoot(-8);
} catch (error) {
  console.log(error.name); // SquareRootError
  console.log(error.message); // attempt to take the square root of a negative number
}

// Task 2
// Пусть при загрузке страницы сервер создает HTML код,
// в котором хранится название, цена и количество купленного продукта
// Пусть функция getCost выбрасывает два типа исключений:
// если отсутствует цена и если отсутствует количество.
// Хорошо подумайте над названиями этих исключений.
// В блоке catch выведите разные сообщения об ошибке
// для исключений разных типов.
let product = document.querySelector("#product");

function getCost(item) {
  if (item.dataset.price && item.dataset.amount) {
    return item.dataset.price * item.dataset.amount;
  } else if (!item.dataset.price) {
    throw {
      name: "PriceNotFound",
      message: "Produt price is missing",
    };
  } else if (!item.dataset.amount) {
    throw {
      name: "AmountNotFound",
      message: "Product amount is missing",
    };
  }
}

try {
    getCost(product);
    console.log(getCost(product));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// Task 3
// Проверьте этот JSON на общую корректность при разборе, 
// а после разбора проверьте, что в результате получается массив, 
// а не что-то другое. 
// Если в результате получается не массив - выбросите исключение.
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

try {
    let arr = JSON.parse(json);
    arr = {};
    
;    if (Array.isArray(arr)) {
        console.log('This is an array')
    } else {
        throw {
            name: "IncorrectArray",
            message: "arr is not an array!"
        }
    }

} catch (error) {
    if (error.name === "SyntaxError") {
        console.log("Incorrect JSON")
    } else if (error.name === "Incorrect Array") {
        console.log(error.message)
    } else {
        throw error
    }

}


// Catch the error of an infinite loop
let array = [1, 2, 3, 4, 5];
let newArr = [];

function startLoop(arr) {
    for (let i = 0; i < arr.length; i--) {
    
        if (newArr.length > arr.length) {
            throw {
                name: "InfiniteLoopError",
                message: "You have lounched an infinite loop!"
            }
        } else {
            newArr.push(arr[i]);
        }
    }
}

// Section to check the code
try {
    startLoop(array);

} catch (error) {
    if (error.name === "InfiniteLoopError") {
        console.log(error.message); // You have lounched an infinite loop!
    }
}
            

console.log(newArr); // (6) [1, undefined, undefined, undefined, undefined, undefined]