/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}
function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  return (document.querySelector("#sum").value = add(addNumber1, addNumber2));
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
  return number1 - number2;
};
function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  return (document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  ));
}
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);
  return (document.querySelector("#product").value = multiply(
    multiplyNumber1,
    multiplyNumber2
  ));
}
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() {
  let divideNumber1 = Number(document.querySelector("#dividend").value);
  let divideNumber2 = Number(document.querySelector("#divisor").value);
  return (document.querySelector("#quotient").value = divide(
    divideNumber1,
    divideNumber2
  ));
}
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

let average = (number1, number2) => (number1 + number2) / 2;

function avgNumber() {
  let average1 = Number(document.querySelector("#avg1").value);
  let average2 = Number(document.querySelector("#avg2").value);
  // return average number:
  return (document.querySelector("#avg").value = average(average1, average2));
  //  add event listener to average
}

document.querySelector("#avgValue").addEventListener("click", avgNumber);

let day = (dayVal) => dayVal * 24;

function dayToHour() {
  let dayVar = Number(document.querySelector("#dayVal").value);
  // return day
  return (document.querySelector("#hour").value = day(dayVar));
}

document.querySelector("#getHour").addEventListener("click", dayToHour);

// square function

let squareResult = (number) => number * number;

function numToSquare() {
  let sq = Number(document.querySelector("#squareVal").value);
  // return  square
  return (document.getElementById("square").value = squareResult(sq));
}

document.querySelector("#getSquareVal").addEventListener("click", numToSquare);

let Area = (lenght, breath) => lenght * breath;

function calcArea() {
  let lenght = Number(document.querySelector("#len").value);
  let breath = Number(document.querySelector("#breath").value);

  return (document.getElementById("area").value = Area(lenght, breath));
}

document.getElementById("getArea").addEventListener("click", calcArea);
