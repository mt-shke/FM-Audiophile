export const getLocalCart = () => {
	return JSON.parse(localStorage.getItem("audiophile")) ?? [];
};

export const resetLocalCart = () => {
	localStorage.setItem("audiophile", "");
};

export const getTimeInMin = () => {
	return Math.floor(new Date().getTime() / 1000 / 60);
};

export const setLocalCartItems = (items) => {
	const cart = { items: items, time: getTimeInMin() };
	localStorage.setItem("audiophile", JSON.stringify(cart));
};
