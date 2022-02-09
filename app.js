const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");

const numberBtn = document.querySelectorAll("[data-number");
const operationBtn = document.querySelectorAll("[data-operation]");

let operation = "";
let inputField = 0;
let firstOperator = 0;
let secondOperator = 0;

function doOperation(number, operation) {}

numberBtn.forEach((button) =>
	button.addEventListener("click", () => {
		if (inputDisplay.textContent == 0) {
			inputDisplay.textContent = "";
		}
		inputDisplay.append(button.textContent);
	})
);

operationBtn.forEach((button) =>
	button.addEventListener("click", () => {
		operation = button.textContent;

		if (inputDisplay.textContent == 0) {
			outputDisplay.textContent = `${inputField} ${operation} `;
		} else if (outputDisplay) {
			outputDisplay.append(`${inputDisplay.textContent} ${operation} `);
			inputField = inputDisplay.textContent;
			inputDisplay.textContent = 0;
      firstOperator = inputDisplay.textContent;
		} else {
      secondOperator = inputDisplay.textContent;
			console.log(`${firstOperator} ${operation} ${secondOperator}`);
		}
	})
);
