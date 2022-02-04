const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");

const numberBtn = document.querySelectorAll("[data-number");
const operationBtn = document.querySelectorAll("[data-operation]");

let operation = "";
let inputField = 0;
let number1 = 0;

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
      console.log(inputField + ' - 1');
      outputDisplay.textContent = `${inputField} ${operation} `;
      console.log('operation: ' + operation);
    } else {
      outputDisplay.append(`${inputDisplay.textContent} ${operation} `);
      inputField = inputDisplay.textContent;
      console.log(inputField + ' - 2');
      inputDisplay.textContent = 0;
      console.log(inputField + ' - 3');
    }
	})
);
