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
