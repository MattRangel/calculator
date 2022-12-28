function createButtons() {
	const buttonNames = [["0","zero"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"],["+","add"],["-","sub"],["*","mult"],["/","div"],["C","clr"],["=","enter"],[".","dot"]];
	for (let i in buttonNames) {
		let button = document.createElement("div");
		button.innerText = buttonNames[i][0];
		button.style.gridArea = buttonNames[i][1];
		button.classList.add("button");
		button.addEventListener('mousedown', (event) => event.target.classList.add("clicked"));
		button.addEventListener('mouseup', (event) => event.target.classList.remove("clicked"));
		document.querySelector("#buttons").appendChild(button);
	}
}

createButtons();
