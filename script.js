let prevNumber;
let operator;

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
		if (i <= 10) {
			button.addEventListener('mousedown', () => typeNumber(toCreate[0]));
		} else if (toCreate[1] === "clr") {
			button.addEventListener('mousedown', () => clearScreen());
		} else if (toCreate[1] === "enter") {
			button.addEventListener('mousedown', () => document.querySelector("#screen").innerText = operate(prevNumber, document.querySelector("#screen").innerText, operator));
		} else {
			button.addEventListener('mousedown', () => {operator = toCreate[1]; prevNumber = (clearScreen()||prevNumber);});
		}
		document.querySelector("#buttons").appendChild(button);
	}
}

function typeNumber(a) {
	return document.querySelector("#screen").innerText += a;
}

function clearScreen() {
	const prev = document.querySelector("#screen").innerText;
	document.querySelector("#screen").innerText = "";
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
	switch (op) {
		case "add": return add(a,b);
		case "sub": return subtract(a,b);
		case "div": return divide(a,b);
		case "mult": return multiply(a,b);
		default: return 0;
	}
}
createButtons();
