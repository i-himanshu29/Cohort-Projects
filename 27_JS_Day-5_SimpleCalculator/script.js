const x = document.getElementById("number1");
const y = document.getElementById("number2");
const result = document.getElementById("result");

function calculate(operator) {
  const num1 = parseInt(x.value);
  const num2 = parseInt(y.value);

  if (isNaN(num1) | isNaN(num2)) {
    result.innerText = "Please enter a valid number";
    return;
  }
  switch (operator) {
    case "+":
      result.innerText = `Addition: ${num1 + num2}`;
      break;
    case "-":
      result.innerText = `Substraction: ${num2 - num1}`;
      break;
    case "*":
      result.innerText = `Multiply: ${num2 * num1}`;
      break;
    case "/":
      if (num2 === 0) {
        result.innerText = "cannot divide by zero";
      } else {
        result.innerText = `Divide: ${num1 / num2}`;
      }

      break;
    default:
      result.innerText = "Invalid Operator";
  }
}
