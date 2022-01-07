export const convertEnFormat = (numberToConvert) => {
	return new Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(numberToConvert);
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

export const validateLength = (input) => {
	// regex => should only x format etc
	return input.trim() !== "";
};

export const validateNumber = (input) => {
	const text = /^[0-9]*$/;
	return text.test(Number(input)) && input.trim() !== "";
};

export const validateEmail = (email) => {
	const text = /[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,5}$/;
	return text.test(String(email).toLowerCase());
};

export const getUrlSessionId = () => {
	return window.location.href
		.replace(window.location.origin, "")
		.replace(window.location.pathname, "")
		.replace("?success=true&session_id=", "");
};
