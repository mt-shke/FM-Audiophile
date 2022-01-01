import { useEffect, useState } from "react";
import { useStore } from "../store/store";

const CartItemButtons = (props) => {
	const [quantity, setQuantity] = useState(props.item.quantity);
	const dispatch = useStore()[1];

	useEffect(() => {
		if (quantity === 0) {
			props.deleteItem({ ...props.item });
			return;
		}
		dispatch("UPDATE_QUANTITY_IN_CART", { ...props.item, quantity });
	}, [quantity, setQuantity]);

	const valueHandler = (e) => {
		if (e.target.classList.contains("plus")) {
			setQuantity((previous) => (+previous === 999 ? 999 : +previous + 1));
			return;
		}
		if (e.target.classList.contains("minus")) {
			setQuantity((previous) => (previous === 0 ? 0 : +previous - 1));
			return;
		}
		const enteredValue = e.target.value;
		setQuantity(enteredValue <= 0 ? 0 : enteredValue >= 999 ? 999 : enteredValue);
	};

	return (
		<div className="w-18 flex flex-row px-2 ml-auto mr-0 bg-gray leading-[32px]">
			<span onClick={valueHandler} className="gridc px-1 hover:cursor-pointer minus">
				-
			</span>
			<input
				className="noArrows w-10 text-center font-bold bg-gray text-black outline-none "
				type="number"
				min="0"
				max="999"
				value={quantity}
				onChange={valueHandler}
			/>
			<span onClick={valueHandler} className="gridc px-1 hover:cursor-pointer plus">
				+
			</span>
		</div>
	);
};
export default CartItemButtons;
