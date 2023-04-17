/*
если функция принимает в качестве параметра массив, 
мы можем задать прямо в объявлении функции то, как деструктуризировать этот массив.
*/
func([2025, 12, 31]);

function func([year, month, day]) {
    console.log(year);
    console.log(month);
    console.log(day);
};


//
func2('str1', [2022, 8, 6], 'str2');

function func2(param1, [year, month, day], param2) {
    console.log(param1); // выведет 'str1'
	
	console.log(year);   // выведет 2022
	console.log(month);  // выведет 8
	console.log(day);    // выведет 6
	
	console.log(param2); // выведет 'str2'
}


//
func3([2022, 6, 8], [2025, 7, 1]);

function func3([year1, month1, day1], [year2, month2, day2]) {
    console.log(year1);  // выведет 2022
	console.log(month1); // выведет 6
	console.log(day1);   // выведет 8
	
	console.log(year2);  // выведет 2025
	console.log(month2); // выведет 7
	console.log(day2);   // выведет 1
}


//
func4( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func4([firstName, lasName, department, jobPosition, salary]) {
    console.log(firstName, lasName, department, jobPosition, salary);
}


//
func5( ['Иван', 'Иванов', 'отдел разработки'] );
function func5([firstName, lastName, department, position = 'junior']) {
    console.log(firstName, lastName, department, position);
}


//
func6( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] ); 

function func6(department, [firstName, lastName], [year, month, day]) {
    console.log(firstName);
}


/* Объекты в параметрах */
function func7({year, month, day}) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func7({year: 2025, month: 12, day: 31,});


//
func8( {color: 'red', width: 400, height: 500} );

function func8( {color, width, height} ) {
    console.log(color, width, height);
}