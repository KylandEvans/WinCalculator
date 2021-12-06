const numberButtons = document.querySelectorAll(".number-button");
const operandButtons = document.querySelectorAll(".operand-button");
const equals = document.querySelector(".equals-button");
const answerDisplay = document.querySelector(".answer-display");
const problemDisplay = document.querySelector(".problem-display");
const deleteButton = document.querySelector(".delete-button");
const clearButton = document.querySelector(".clear");
const history = document.querySelector(".history-content");
const clearHistoryButton = document.querySelector(".clear-history");
const decimal = document.querySelector(".decimal");
let currText = "";
let num1 = [];
let operand = "";
let num2 = [];
let currArr = num1;
let tempVar = "";

function displayPress(button) {
	button.classList.add("clicked");
	let timeout = "250ms";
	setTimeout(() => {
		button.classList.remove("clicked");
	}, timeout);
}

function addToDisplay(currArr) {
	if (typeof currArr === "object") {
		let tempStr = currArr.join("");

		if (tempStr.length <= 3) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(tempStr);
		} else if (tempStr.length === 4) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 1) + "," + tempStr.substring(1)
			);
		} else if (tempStr.length === 5) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 2) + "," + tempStr.substring(2)
			);
		} else if (tempStr.length === 6) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 3) + "," + tempStr.substring(3)
			);
		} else if (tempStr.length === 7) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4)
			);
		} else if (tempStr.length === 8) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5)
			);
		} else if (tempStr.length === 9) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6)
			);
		} else if (tempStr.length === 10) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7)
			);
		} else if (tempStr.length === 11) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5, 8) +
					"," +
					tempStr.substring(8)
			);
		} else if (tempStr.length === 12) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6, 9) +
					"," +
					tempStr.substring(9)
			);
		} else if (tempStr.length === 13) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7, 10) +
					"," +
					tempStr.substring(10)
			);
		} else if (tempStr.length === 14) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5, 8) +
					"," +
					tempStr.substring(8, 11) +
					"," +
					tempStr.substring(11)
			);
		} else if (tempStr.length === 15) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6, 9) +
					"," +
					tempStr.substring(9, 12) +
					"," +
					tempStr.substring(12)
			);
		} else if (tempStr.length === 16) {
			answerDisplay.lastChild.remove();
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7, 10) +
					"," +
					tempStr.substring(10, 13) +
					"," +
					tempStr.substring(13)
			);
		} else return;
	} else {
		let tempStr = currArr.toString();
		if (tempStr.length <= 3) {
			answerDisplay.append(tempStr);
		} else if (tempStr.length === 4) {
			answerDisplay.append(
				tempStr.substring(0, 1) + "," + tempStr.substring(1)
			);
		} else if (tempStr.length === 5) {
			answerDisplay.append(
				tempStr.substring(0, 2) + "," + tempStr.substring(2)
			);
		} else if (tempStr.length === 6) {
			answerDisplay.append(
				tempStr.substring(0, 3) + "," + tempStr.substring(3)
			);
		} else if (tempStr.length === 7) {
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4)
			);
		} else if (tempStr.length === 8) {
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5)
			);
		} else if (tempStr.length === 9) {
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6)
			);
		} else if (tempStr.length === 10) {
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7)
			);
		} else if (tempStr.length === 11) {
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5, 8) +
					"," +
					tempStr.substring(8)
			);
		} else if (tempStr.length === 12) {
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6, 9) +
					"," +
					tempStr.substring(9)
			);
		} else if (tempStr.length === 13) {
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7, 10) +
					"," +
					tempStr.substring(10)
			);
		} else if (tempStr.length === 14) {
			answerDisplay.append(
				tempStr.substring(0, 2) +
					"," +
					tempStr.substring(2, 5) +
					"," +
					tempStr.substring(5, 8) +
					"," +
					tempStr.substring(8, 11) +
					"," +
					tempStr.substring(11)
			);
		} else if (tempStr.length === 15) {
			answerDisplay.append(
				tempStr.substring(0, 3) +
					"," +
					tempStr.substring(3, 6) +
					"," +
					tempStr.substring(6, 9) +
					"," +
					tempStr.substring(9, 12) +
					"," +
					tempStr.substring(12)
			);
		} else if (tempStr.length === 16) {
			answerDisplay.append(
				tempStr.substring(0, 1) +
					"," +
					tempStr.substring(1, 4) +
					"," +
					tempStr.substring(4, 7) +
					"," +
					tempStr.substring(7, 10) +
					"," +
					tempStr.substring(10, 13) +
					"," +
					tempStr.substring(13)
			);
		} else return;
	}
}

function addFloatToDisplay(answer) {
	if (typeof answer === "object") {
		let newAnswer = answer.join("");
		console.log(newAnswer);
		let integerNum = newAnswer.split(".");
		addToDisplay(integerNum[0]);
		answerDisplay.append("." + integerNum[1]);
	} else {
		let answerString = answer.toString();
		console.log(typeof answerString);
		let intNum = answerString.split(".");
		addToDisplay(intNum[0]);
		answerDisplay.append("." + intNum[1]);
	}
}

function addToHistory(calcNum1, calcNum2, operand, answer) {
	let newHistoryContent = document.createElement("div");
	newHistoryContent.setAttribute("class", "history-wrapper");
	history.prepend(newHistoryContent);
	let newHistoryProblem = document.createElement("div");
	newHistoryProblem.setAttribute("class", "history-problem");
	newHistoryContent.append(newHistoryProblem);
	let newHistoryAnswer = document.createElement("div");
	newHistoryAnswer.setAttribute("class", "history-answer");
	newHistoryContent.append(newHistoryAnswer);
	newHistoryProblem.innerText = `${calcNum1} ${operand} ${calcNum2} = `;
	newHistoryAnswer.innerText = `${answer}`;
	clearHistoryButton.style.display = "flex";
}

function clearHistory() {
	let historyContent = document.querySelectorAll(".history-wrapper");
	for (let item of historyContent) {
		item.remove();
	}
	clearHistoryButton.style.display = "none";
}

function clear() {
	num1 = [];
	num2 = [];
	operand = "";
	currArr = num1;
	answerDisplay.innerHTML = "0";
	problemDisplay.innerHTML = "";
}

function secondProblem() {
	clear();
	for (let i = 0; i < tempVar.length; i++) {
		num1.push(tempVar[i]);
		console.log(tempVar);
	}
	currArr = num2;
	console.log(num1);
}

function calculate() {
	let calcNum1 = num1.join("");
	let calcNum2 = num2.join("");
	let answer;
	if (calcNum2 === "") {
		calcNum2 = calcNum1;
	}
	if (operand === "+") {
		answer = Number(calcNum1) + Number(calcNum2);
		answerDisplay.lastChild.remove();
		problemDisplay.lastChild.remove();
		try {
			problemDisplay.lastChild.remove();
		} catch {
			console.log("cannot Remove");
		}
		problemDisplay.append(`${calcNum1} ${operand} ${calcNum2} = `);
		if (Number.isInteger(answer)) {
			addToDisplay(answer);
		} else if (answer <= Math.pow(2, 53) - 1) {
			addFloatToDisplay(answer);
		} else if (answer > Math.pow(2, 53) - 1) {
			answerDisplay.append(answer.toExponential());
			console.log(answer.toExponential());
		}
		addToHistory(calcNum1, calcNum2, operand, answer);
		tempVar = answer.toString();
		decimal.disabled = false;
	} else if (operand === "-") {
		answer = Number(calcNum1) - Number(calcNum2);
		answerDisplay.lastChild.remove();
		problemDisplay.lastChild.remove();
		try {
			problemDisplay.lastChild.remove();
		} catch {
			console.log("cannot Remove");
		}
		problemDisplay.append(`${calcNum1} ${operand} ${calcNum2} = `);
		if (Number.isInteger(answer)) {
			addToDisplay(answer);
		} else {
			addFloatToDisplay(answer);
		}
		addToHistory(calcNum1, calcNum2, operand, answer);
		tempVar = answer.toString();
		decimal.disabled = false;
	} else if (operand === "*") {
		answer = Number(calcNum1) * Number(calcNum2);
		answerDisplay.lastChild.remove();
		problemDisplay.lastChild.remove();
		try {
			problemDisplay.lastChild.remove();
		} catch {
			console.log("cannot Remove");
		}
		problemDisplay.append(`${calcNum1} ${operand} ${calcNum2} = `);
		if (Number.isInteger(answer)) {
			addToDisplay(answer);
		} else {
			addFloatToDisplay(answer);
		}
		addToHistory(calcNum1, calcNum2, operand, answer);
		tempVar = answer.toString();
		decimal.disabled = false;
	} else if (operand === "/") {
		answer = Number(calcNum1) / Number(calcNum2);
		answerDisplay.lastChild.remove();
		problemDisplay.lastChild.remove();
		try {
			problemDisplay.lastChild.remove();
		} catch {
			console.log("cannot Remove");
		}
		problemDisplay.append(`${calcNum1} ${operand} ${calcNum2} = `);
		if (Number.isInteger(answer)) {
			addToDisplay(answer);
		} else {
			addFloatToDisplay(answer);
		}
		addToHistory(calcNum1, calcNum2, operand, answer);
		tempVar = answer.toString();
		decimal.disabled = false;
	}
}

for (let button of numberButtons) {
	button.addEventListener("click", () => {
		if (currArr === num1 && num1.length < 16) {
			if (button.value === ".") {
				button.disabled = true;
				addFloatToDisplay(currArr);
				console.log("Button Clicked");
			} else {
				num1.push(button.value);
				displayPress(button);
				addToDisplay(currArr);
			}
		} else if (currArr === num2 && num2.length < 16) {
			num2.push(button.value);
			displayPress(button);
			addToDisplay(currArr);
		}
	});
}

for (let operandButton of operandButtons) {
	operandButton.addEventListener("click", () => {
		if (!equals.clicked && num2.length > 0) {
			calculate();
		}
		if (num2.length > 0) {
			secondProblem();
		}

		operand = operandButton.value;
		let num1Text = num1.join("");
		problemDisplay.append(num1Text);
		problemDisplay.append(operand);
		currArr = num2;
	});
}

window.addEventListener("keypress", e => {
	//Working on this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if (e.code === "Numpad7" || e.code === "Digit7") {
		numberButtons[0].click();
	} else if (e.code === "Numpad8" || e.code === "Digit8") {
		numberButtons[1].click();
	} else if (e.code === "Numpad9" || e.code === "Digit9") {
		numberButtons[2].click();
	} else if (e.code === "Numpad4" || e.code === "Digit4") {
		numberButtons[3].click();
	} else if (e.code === "Numpad5" || e.code === "Digit5") {
		numberButtons[4].click();
	} else if (e.code === "Numpad6" || e.code === "Digit6") {
		numberButtons[5].click();
	} else if (e.code === "Numpad1" || e.code === "Digit1") {
		numberButtons[6].click();
	} else if (e.code === "Numpad2" || e.code === "Digit2") {
		numberButtons[7].click();
	} else if (e.code === "Numpad3" || e.code === "Digit3") {
		numberButtons[8].click();
	} else if (e.code === "Numpad0" || e.code === "Digit0") {
		numberButtons[10].click();
	} else if (
		e.code === "NumpadEnter" ||
		e.code === "Enter" ||
		e.code === "Equal"
	) {
		equals.click(); //check back with this one. Might still be broke!!
	} else if (
		e.code === "NumpadAdd" ||
		e.key === "+" //This needs fixed!!
	) {
		operandButtons[3].click();
	} else if (e.code === "NumpadSubtract" || e.code === "Minus") {
		operandButtons[2].click();
	} else if (e.code === "NumpadMultiply") {
		operandButtons[1].click();
	} else if (e.code === "NumpadDivide" || e.code === "Slash") {
		operandButtons[0].click();
	}
});

clearButton.addEventListener("click", clear);
clearHistoryButton.addEventListener("click", clearHistory);
equals.addEventListener("click", calculate);

window.addEventListener("keypress", e => {
	console.log(e);
	console.log(e.code);
});
