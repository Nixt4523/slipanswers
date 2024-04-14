const answerContainer = document.getElementById("answerContainer");

for (let i = 1; i <= 30; i++) {
	const link = document.createElement("a");
	link.classList.add("btn");
	link.innerText = `Slip ${i}`;
	link.href = `./Slip${i}.txt`;
	link.download = `${i}.txt`;

	answerContainer.append(link);
}
