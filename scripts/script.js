function main() {
	var datetime = new Date();
	var date = new Date("01/01/2023");


	var diffTime = date.getTime() - datetime.getTime();
	var diffDays = diffTime / (1000 * 3600 * 24);

	document.getElementById('countdown-text').textContent = parseInt(diffDays) + " days";
}

window.onLoad = main();
