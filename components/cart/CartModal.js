import Button from "../UI/button/Button";
import { useStore } from "../store/store";
import { useState } from "react";

const CartModal = (props) => {
	const store = useStore()[0];
	const dispatch = useStore()[1];
	const [itemsInCart, setItemsInCart] = useState();

	return (
		<div className="fixed z-50 cart grid grid-flow-row gap-6 items-center mx-auto p-6 top-24 left-0 right-0 bg-white text-black rounded-lg">
			<div className="flex justify-between items-center">
				<h4>cart</h4>
				<span className="underline text-para-gray font-bold">Remove all</span>
			</div>
			<ul className="flex-c6"></ul>
			<div className="flex justify-between items-baseline">
				<span className="text-para-gray font-bold">TOTAL</span>
				<span>price</span>
			</div>
			<Button css="w-full">checkout</Button>
		</div>
	);
};
export default CartModal;
