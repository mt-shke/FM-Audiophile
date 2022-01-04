export const checkLocalCart = () => {
	return JSON.parse(localStorage.getItem("audiophile", cart)) ?? [];
};

export const setLocalCart = (cart) => {
	localStorage.setItem("audiophile", JSON.stringify(cart));
};
