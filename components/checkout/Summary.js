import { useState } from "react";
import CartItem from "../cart/CartItem";
import { useStore } from "../store/store";
import Button from "../UI/button/Button";

const Summary = (props) => {
	const [cardNumber, displayCard] = useState(false);
	const store = useStore()[0];
	const items = store.cart.items;
	const total = items.reduce((a, b) => a + b.quantity * b.price, 0);
	const itemsPlusShipping = [...items, { name: "Shipping cost", price: 50, quantity: 1 }];

	return (
		<section
			onMouseEnter={(e) => displayCard(true)}
			onMouseLeave={(e) => displayCard(false)}
			className="relative flex-c6 p-6 bg-white rounded-lg md:col-start-4 md:col-end-6 lg:p-12 xl:col-start-3 xl:col-end-4"
		>
			<h3>summary</h3>
			<ul className="flex flex-col gap-4">
				{items.map((item) => (
					<CartItem checkout="true" item={item} key={item.name} />
				))}
			</ul>
			<ul className="flex flex-col gap-1 font-bold">
				<li className="flex justify-between uppercase text-para-gray">
					TOTAL <span className="text-black">$ {total}</span>
				</li>
				<li className="flex justify-between uppercase text-para-gray">
					SHIPPING <span className="text-black">$ 50</span>
				</li>
				<li className="flex justify-between uppercase text-para-gray">
					VAT (INCLUDED) <span className="text-black">$ {(total * 20) / 100}</span>
				</li>
				<li className="flex justify-between uppercase my-4 text-para-gray">
					GRAND TOTAL <span className="text-orange">$ {total + 50}</span>
				</li>
			</ul>

			<Button
				disabled={items.length < 1 ? true : false}
				onClick={(e) => props.submit(e, itemsPlusShipping)}
				className="w-full"
			>
				continue & pay
			</Button>
			{cardNumber && (
				<div className="absolute overflow-hidden w-full left-0 bottom-0 text-green text-center">
					Test card number = 424242424242424242...
				</div>
			)}
		</section>
	);
};
export default Summary;
