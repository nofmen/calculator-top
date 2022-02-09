const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");

const numberBtn = document.querySelectorAll("[data-number");
const operationBtn = document.querySelectorAll("[data-operation]");

let operation = "";
let inputField = 0;
let firstOperator = 0;
let secondOperator = 0;
let answer = 0;

function doOperation(number, operation) {}

numberBtn.forEach((button) =>
	button.addEventListener("click", () => {
		if (inputDisplay.textContent == 0) {
			inputDisplay.textContent = "";
		}
		inputDisplay.append(button.textContent);
	})
);

function opHandler(operator) {
	console.log(operator + ' operator');
  console.log(firstOperator + ' first1');
  console.log(secondOperator + ' second1');

	if (firstOperator === 0) {
		firstOperator = inputDisplay.textContent;
	} else if (secondOperator === 0) {
		secondOperator = inputDisplay.textContent;
	} else {
		answer = calculateResult(firstOperator, secondOperator, operator);
	}
  console.log(answer + ' answer');
  console.log(firstOperator + ' first2');
  console.log(secondOperator + ' second2');
}

function calculateResult(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
    default:
  }
}

operationBtn.forEach((button) =>
	button.addEventListener("click", opHandler.bind(this, button.textContent))
);
