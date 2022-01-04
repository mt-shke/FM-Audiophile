import { useState } from "react";
import { useStore } from "../../../store/store";
import Button from "../../../UI/button/Button";

const ProductButtons = (props) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useStore()[1];

	const addToCart = () => {
		if (quantity <= 0) return;
		dispatch("ADD_PRODUCT_TO_CART", {
			...props.item,
			quantity,
		});
	};

	const valueHandler = (e) => {
		const enteredValue = e.target.value;
		const plus = e.target.classList.contains("plus");
		const minus = e.target.classList.contains("minus");
		if (plus) {
			setQuantity((previous) => (+previous >= 999 ? 999 : +previous + 1));
			return;
		}
		if (minus) {
			setQuantity((previous) => (+previous === 0 ? 0 : +previous - 1));
			return;
		}
		setQuantity(+enteredValue >= 999 ? 999 : +enteredValue <= 0 ? 0 : +enteredValue);
	};

	const checkValue = () => {
		if (!quantity) setQuantity(0);
	};

	return (
		<div className="flex flex-row items-center gap-4 xl:gap-6">
			<div className="h-full flex flex-row p-2 bg-gray text-orange leading-[32px]">
				<span onClick={valueHandler} className="gridc px-1 hover:cursor-pointer minus">
					-
				</span>
				<input
					className="noArrows w-16 px-2 text-black text-center font-bold bg-gray outline-none "
					type="number"
					min="0"
					max="999"
					value={quantity}
					onChange={valueHandler}
					onBlur={checkValue}
				/>
				<span onClick={valueHandler} className="gridc px-1 hover:cursor-pointer plus">
					+
				</span>
			</div>
			<Button onClick={addToCart}>add to cart</Button>
		</div>
	);
};
export default ProductButtons;
