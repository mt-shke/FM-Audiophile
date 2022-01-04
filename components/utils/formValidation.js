export const numberToUsFormat = (numberToConvert) => {
	return;
};

export const shortenName = (productName) => {
	return productName
		.toUpperCase()
		.replace("-", " ")
		.replace("EARPHONES", "")
		.replace("EARPHONE", "")
		.replace("HEADPHONES", "")
		.replace("HEADPHONE", "")
		.replace("SPEAKERS", "")
		.replace("SPEAKER", "")
		.trim();
};

export const validateEmail = (input) => {
	return input.trim() !== "";
};
export const validateLength = (input) => {
	return input.trim() !== "";
};
