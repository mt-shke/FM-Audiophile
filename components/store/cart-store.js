import { initStore } from "./store";

const configureCartStore = () => {
	const actions = {
		ADD_PRODUCT_TO_CART: (curState, payload) => {
			let newItems = [];
			const itemIndex = curState.cart.items.findIndex((item) => item.name === payload.name);
			if (itemIndex < 0) {
				newItems = [...curState.cart.items];
				newItems.push(payload);
			}
			if (itemIndex >= 0) {
				newItems = [...curState.cart.items];
				newItems[itemIndex].quantity += payload.quantity;
			}
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},
		ADD_LOCAL_CART: (curState, payload) => {
			const newCart = payload;
			return { cart: newCart };
		},

		UPDATE_QUANTITY_IN_CART: (curState, payload) => {
			let newItems = [];
			const itemIndex = curState.cart.items.findIndex((item) => item.name === payload.name);
			newItems = [...curState.cart.items];
			newItems[itemIndex].quantity = payload.quantity;
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},

		REMOVE_PRODUCT_FROM_CART: (curState, payload) => {
			let newItems = curState.cart.items.filter((item) => item.name !== payload.name);
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},

		REMOVE_ALL_PRODUCT_FROM_CART: (curState) => {
			const newItems = [];
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},
	};

	initStore(actions, {
		cart: {
			items: [],
		},
	});
};

export default configureCartStore;
