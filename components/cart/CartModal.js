import Button from "../UI/button/Button";
import { useStore } from "../store/store";
import { useState } from "react";
import CartItem from "./CartItem";

const CartModal = (props) => {
	const store = useStore()[0];
	const dispatch = useStore()[1];
	const [itemsInCart, setItemsInCart] = useState(store.cart.items);
	const price = itemsInCart?.reduce((a, b) => a + b.quantity * b.price, 0);

	const isNotEmpty = itemsInCart.length >= 1 ? <span>{`(${itemsInCart.length})`}</span> : "";

	const removeAllHandler = () => {
		setItemsInCart([]);
		dispatch("REMOVE_ALL_PRODUCT_FROM_CART");
	};

	const deleteItemHandler = (itemToDelete) => {
		const newItems = itemsInCart.filter((item) => item.name !== itemToDelete.name);
		setItemsInCart(newItems);
		dispatch("REMOVE_PRODUCT_FROM_CART", itemToDelete);
	};

	return (
		<div className="absolute z-50 cart-width grid grid-flow-row gap-6 items-center mx-auto p-6 top-24 left-0 right-0 bg-white text-black rounded-lg sm:left-auto sm:right-8">
			<div className="flex justify-between items-center">
				<h4>cart {isNotEmpty}</h4>
				{isNotEmpty && (
					<span
						onClick={removeAllHandler}
						className="underline text-para-gray font-bold hover:cursor-pointer"
					>
						Remove all
					</span>
				)}
			</div>
			<ul className="flex-c6 relative w-full">
				{itemsInCart.map((item) => (
					<CartItem item={item} key={item.name} deleteItem={deleteItemHandler} />
				))}
				{!isNotEmpty && <li className="font-bold text-para-gray">Your cart is empty</li>}
			</ul>
			<div className="flex justify-between items-baseline font-bold">
				<span className="text-para-gray">TOTAL</span>
				<span>$ {price}</span>
			</div>
			<Button className="w-full">checkout</Button>
		</div>
	);
};
export default CartModal;
