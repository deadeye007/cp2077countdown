function main() {
	var datetime = new Date();
	var date = new Date("11/19/2020");


	var diffTime = date.getTime() - datetime.getTime();
	var diffDays = diffTime / (1000 * 3600 * 24);

	document.getElementById('countdown-text').textContent = parseInt(diffDays) + " days";
}

window.onLoad = main();