export function getRandomColour() {
	let colours = [
		"green",
		"pink",
		"purple",
		"blue",
		"yellow",
		"orange",
		"red",
	];
	let randomInt = Math.floor(Math.random() * colours.length);
	return colours[randomInt];
}
