let colours = ["green", "pink", "purple", "blue", "yellow", "orange", "red"];

export function getRandomColour() {
	let randomInt = Math.floor(Math.random() * colours.length);
	return colours[randomInt];
}
