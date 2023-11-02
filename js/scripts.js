// Business Logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
function calculate(num1, num2, operatorParam) {
  if (operatorParam === "add") {
    return add(num1, num2);
  } else if (operatorParam === "subtract") {
    return subtract(num1, num2);
  } else if (operatorParam === "multiply") {
    return multiply(num1, num2);
  } else if (operatorParam === "divide") {
    return divide(num1, num2);
  }
}

// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  // the code to get and process form values will go here!

  const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
  console.log("NUmber 1: " + num1);
  console.log("number2: " + num2);
  console.log("operator: " + operator);

  let result = calculate(num1, num2, operator);
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function () {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});

