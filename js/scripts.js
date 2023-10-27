
// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseFloat(prompt("Enter a number:")); // turn into a number here
const number2 = parseFloat(prompt("Enter another number:"));

window.alert(number1 + " plus " + number2 + " equals " + add(number1, number2) + ".");
window.alert(number1 + " subtract " + number2 + " equals " + subtract(number1, number2) + ".");
window.alert(number1 + " multiplied by " + number2 + " equals " + multiply(number1, number2) + ".");
window.alert(number1 + " divided by " + number2 + " equals " + divide(number1, number2) + ".");
window.alert("The addition of your numbers equals " + add(number1, number2)

  + ". The subtraction of your numbers equals " + subtract(number1, number2) +
  ". The multiplication of your numbers equals " + multiply(number1, number2) +
  ". The division of your numbers equals " + divide(number1, number2) + ".")