// Класс Circle в ООП
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  getCircleSquare() {
    return 3.14 * this.#radius ** 2;
  }

  getCircumference() {
    return 2 * 3.14 * this.#radius;
  }
}

const circle = new Circle(6);
console.log(circle.getCircleSquare()); // 113.04
console.log(circle.getCircumference()); // 37.68


// Класс Rectangle в ООП
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getSquare() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  getRatio() {
    return this.getSquare() / this.getPerimeter();
  }
}

const rectangle = new Rectangle(12, 6);
console.log(rectangle.getSquare()); // 72
console.log(rectangle.getPerimeter()); // 36
console.log(rectangle.getRatio()); // 2


// Класс Text в ООП
class Text {
  constructor(text) {
    this.text = text;
  }

  getTextLength() {
    return this.text.length;
  }
  getTextLetters() {
    let i = 0;
    for (let elem of this.text) {
      if (elem.match(/[a-zA-Z]/)) {
        i++;
      }
    }
    return i;
  }
  getSymbols() {
    return this.text.split(" ").join("").length;
  }
  getSpaces() {
    return this.getTextLength() - this.getSymbols();
  }
  getWordsArr() {
    return this.text.split(" ");
  }
  getSentenceArr() {
    return /\.\s|\?\s|!\s/g[Symbol.split](this.text);
  }
}

const text = new Text(
  "I am a text! But I can be more than just a text. I can be everything "
);
console.log(text.getTextLength()); // 11
console.log(text.getTextLetters()); // 8
console.log(text.getSpaces()); // 3
console.log(text.getWordsArr()); // (4) ['I', 'am', 'a', 'text!']
console.log(text.getSentenceArr()); // (3) ['I am a text', 'But I can be more than just a text', 'I can be everything ']


// Класс Period в ООП
class Period {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
  }

  getDiffInSec() {
    return Math.round((this.date1 - this.date2) / 1000);
  }
  getDiffInMin() {
    return Math.round(this.getDiffInSec() / 60);
  }
  getDiffInHours() {
    return Math.round(this.getDiffInMin() / 60)
  }
  getDiffInDays() {
    return Math.round(this.getDiffInHours() / 24);
  }
}

let date1 = new Date();
let date2 = new Date(1982, 2, 9);
const period = new Period(date1, date2);
console.log(period.getDiffInSec()); // 1280747140
console.log(period.getDiffInMin()); // 21345787
console.log(period.getDiffInHours()); // 355763
console.log(period.getDiffInDays()); // 14823


// Класс Zate в ООП 

class Zate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  getYear() {
    return this.year;
  }
  getMonth() {
    return this.month;
  }
  getDate() {
    return this.day;
  }
  getWeekDay() {
    return new Date().getDay();
  }
  getDayName() {
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return arr[this.getWeekDay()];
  }
  getMonthName() {
    let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return arr[this.getMonth()];
  }
}

const zate = new Zate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
console.log(zate.getYear()); // 2022
console.log(zate.getMonth()); // 9
console.log(zate.getDate()); // 9
console.log(zate.getWeekDay()); // 0
console.log(zate.getDayName()); // sunday
console.log(zate.getMonthName()); // Oct


// Класс ZateExt в ООП
class ZateExt extends Zate {
  constructor(year, month, day, years, months, days) {
    super(year, month, day);
    this.years = years;
    this.months = months;
    this.days = days;
  }

  addYears() {
    return new Date(this.year + this.years, this.month, this.day) 
  }
  substractYears() {
    return new Date(this.year - this.years, this.month, this.day)
  }
  addMonths() {
    return new Date(this.year, this.month + this.months, this.day);
  }
  substractMonths() {
    return new Date(this.year, this.month - this.months, this.day);
  }
  addDays() {
    return new Date(this.year, this.month, this.day + this.days);
  }
  substractDays() {
    return new Date(this.year, this.month, this.day - this.days);
  }
}

const zateExt = new ZateExt(1982, 2, 9, 50, 8, 16);
console.log(zateExt.addYears()); // Tue Mar 09 2032 00:00:00 
console.log(zateExt.substractYears()); // Wed Mar 09 1932 00:00:00 
console.log(zateExt.addMonths()); // Mon Nov 01 1982 00:00:00 
console.log(zateExt.substractMonths()); // Thu Jul 09 1981 00:00:00 
console.log(zateExt.addDays()); // Thu Mar 25 1982 00:00:00 
console.log(zateExt.substractDays()); // Sun Feb 21 1982 00:00:00 


// Класс Month в ООП
class Month {
  constructor(monthNumber) {
    this.monthNumber = monthNumber;
  }

  getMonthNum() {
    return this.monthNumber;
  }

  getMonthName() {
    let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return arr[this.getMonthNum()];
  }

  getLastDayOfMonth() {
    return new Date(new Date().getFullYear(), this.monthNumber + 1, 0);
  }

  getNumOfFirstDay() {
    return new Date(new Date().getFullYear(), this.monthNumber, 1).getDay();
  }

  getNumOfLastDay() {
    return new Date(new Date().getFullYear(), this.monthNumber + 1, 0).getDay();
  }

}

const month = new Month(7);
console.log(month.getMonthNum()); // 7
console.log(month.getMonthName()); // Aug
console.log(month.getLastDayOfMonth()); // Wed Aug 31 2022 00:00:00 
console.log(month.getNumOfFirstDay()); // 1 (Monday)
console.log(month.getNumOfLastDay()); // 3 (Wednesday)


// Класс Store в ООП
class Store {
  set(key, value) {
    this.value = JSON.stringify(value);
    localStorage.setItem(key, this.value);
    return true;
  }

  get(key) {
    try {
      let data = localStorage.getItem(key);
      return JSON.parse(data);

    } catch(err) {
      console.log(err)
    }
  }

  delete(key) {
    return localStorage.removeItem(key)
  }
}

const store = new Store;
store.set('key', {a: 1, b: 2, c: 3});
console.log(store.get('key')); // {a: 1, b: 2, c: 3}
console.log(store.get('key').c = 5); // 5
console.log(store.delete('key')); // data has been deleted



