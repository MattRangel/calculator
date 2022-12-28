let prevNumber = "";
let operator;
let decimalAllowed = true;
displayingOutput = false;

function createButtons() {
	const buttonNames = [["0","zero"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"],[".","dot"],["C","clr"],["+","add"],["-","sub"],["*","mult"],["/","div"],["=","enter"]];
	for (let i in buttonNames) {
		const toCreate = buttonNames[i]
		let button = document.createElement("div");
		button.innerText = toCreate[0];
		button.style.gridArea = toCreate[1];
		button.classList.add("button");
		button.addEventListener('mousedown', (event) => event.target.classList.add("clicked"));
		button.addEventListener('mouseup', (event) => event.target.classList.remove("clicked"));
		if (i <= 9) {
			button.addEventListener('mousedown', () => typeNumber(toCreate[0]));
		} else if (toCreate[1] === "dot") { 
			button.addEventListener('mousedown', () => insertDecimal(event.target));
		} else if (toCreate[1] === "clr") {
			button.addEventListener('mousedown', () => clearScreen());
		} else if (toCreate[1] === "enter") {
			button.addEventListener('mousedown',() => equalsButton());
		} else {
			button.addEventListener('mousedown', () => operatorButtons(toCreate[1]));
		}
		document.querySelector("#buttons").appendChild(button);
	}
}

function operatorButtons(btnOpName) {
	const screen = document.querySelector("#screen");
	let prevOp = operate(prevNumber, screen.innerText, operator);
	operator = btnOpName;
	prevNumber = (prevOp) ? prevOp : (screen.innerText||prevNumber);
	screen.innerText = prevNumber;
	displayingOutput = true;
}

function equalsButton() {
	const screen = document.querySelector("#screen");
	screen.innerText = operate(prevNumber, screen.innerText, operator);
	displayingOutput = true;
	prevNumber = null;
	operator = null;
}

function insertDecimal(button) {
	if (!document.querySelector("#screen").innerText.includes(".")) {
		typeNumber(".");
	}
}

function typeNumber(a) {
	if (displayingOutput) {
		clearScreen()
		displayingOutput = false;
	}
	return document.querySelector("#screen").innerText += a;
}

function clearScreen() {
	const prev = document.querySelector("#screen").innerText;
	if (prev === "") {
		prevNumber = "";
		operator = null;
	}
	document.querySelector("#screen").innerText = "";
	displayingOutput = false;
	return prev;
}

function add(a,b) {
	return +a + +b;
}
function subtract(a,b) {
	return +a - +b;
}
function multiply(a,b) {
	return +a * +b;
}
function divide(a,b) {
	return +a / +b;
}

function operate(a,b,op) {
	if (a === ""|| b === "") { return undefined; }
	switch (op) {
		case "add": return add(a,b);
		case "sub": return subtract(a,b);
		case "div": return divide(a,b);
		case "mult": return multiply(a,b);
		default: return undefined;
	}
}
createButtons();
