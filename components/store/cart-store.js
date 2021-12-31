import { initStore } from "./store";

const configureCartStore = () => {
	const actions = {
		ADD_PRODUCT_TO_CART: (curState, item) => {
			let newItems = [];
			const itemIndex = curState.cart.items.findIndex((it) => it.id === item.id);
			if (itemIndex < 0) {
				newItems.push(item);
			}
			if (itemIndex >= 0) {
				newItems = [...curState.cart.items];
				newItems[itemIndex].quantity += item.quantity;
			}

			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},

		DELETE_PRODUCT_FROM_CART: (curState, item) => {
			const newItems = curState.cart.items.filter((it) => it.id !== item.id);
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},
	};

	initStore(actions, {
		cart: {
			total: 0,
			items: [],
		},
	});
};

export default configureCartStore;
