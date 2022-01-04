import CartItem from "../cart/CartItem";
import { useStore } from "../store/store";
import Button from "../UI/button/Button";

const Summary = (props) => {
	const store = useStore()[0];
	const items = store.cart.items;
	const total = items.reduce((a, b) => a + b.quantity * b.price, 0);

	return (
		<section className="flex-c6 p-6 bg-white rounded-lg md:col-start-4 md:col-end-6 lg:p-12 xl:col-start-3 xl:col-end-4">
			<h3>summary</h3>
			<ul className="flex flex-col gap-4">
				{items.map((item) => (
					<CartItem checkout="true" item={item} key={item.name} />
				))}
			</ul>
			<div className="flex-c6 font-bold">
				<ul className="flex flex-col gap-1">
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
			</div>
			<Button type="submit" className="w-full">
				continue & pay
			</Button>
		</section>
	);
};
export default Summary;
