export const makeFirstLetterCapital = (text) => {
	const term = text.toLowerCase().trim();
	return term.charAt(0).toUpperCase() + term.slice(1);
};

export const makeEveryFirstLetterCapital = (text) => {
	const term = text.toLowerCase().trim();
	const splitText = term.split(" ");

	for (let i = 0; i < splitText.length; i++) {
		splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
	}

	return splitText.join(" ");
};

export const randomNumBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateUniqId = (array) => {
	if (array.length >= max - min)
		throw new Error("You've reaced the maximum ammout of items in array!");
	if (min >= max) throw new Error("min number must be lowerer than max number");

	const randomNumber = randomNumBetween(min, max);
	const item = array.findIndex((item) => item._id === randomNumber);

	if (item === -1)
		return randomNumber.toString() + new Date().toLocaleTimeString();
	this.generateUniqId(array);
};
