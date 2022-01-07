import Link from "next/link";
import { useState } from "react";
import CartItem from "../cart/CartItem";
import Button from "../UI/button/Button";
import ValidateIcon from "../UI/icon/ValidateIcon";

const ModalSuccess = (props) => {
	const [others, displayOthers] = useState(false);
	const commandItems = props.command.items.filter((item) => item.name !== "Shipping cost");
	const total = commandItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
	const othersStyle = others ? "" : "hidden";

	const displayItems = () => {
		if (commandItems.length < 2) {
			return;
		}
		displayOthers((o) => !o);
	};

	return (
		<article className="flex-c6 p-6 bg-white rounded-lg sm:w-[500px] sm:mx-auto sm:gap-8">
			<div className="gridc w-16 h-16 bg-orange rounded-full">
				<ValidateIcon />
			</div>

			<h4>
				thank you <br /> for your order
			</h4>
			<p className="text-para-gray">You will receive an email confirmation shortly.</p>

			<div className="flex flex-col rounded-lg sm:grid-cols-7 sm:grid">
				<ul className="w-full grid-flow-col p-6 bg-gray rounded-t-lg sm:col-span-4 sm:rounded-tr-none  sm:rounded-l-lg">
					{commandItems.map((item, index) => (
						<CartItem className={index >= 1 && othersStyle} item={item} key={item.name} checkout="true" />
					))}

					{commandItems.length < 2 ? (
						""
					) : (
						<>
							<hr className="text-para-gray opacity-20" />
							<li
								onClick={displayItems}
								className="py-3 text-para-gray text-center text-sm hover:cursor-pointer"
							>
								{!others &&
									`and ${commandItems.length - 1} other item${commandItems.length - 1 <= 1 ? "" : "s"}`}
								{others && `View less`}
							</li>
						</>
					)}
				</ul>
				<div className="w-full flex flex-col gap-2 px-6 py-4 bg-black rounded-b-lg sm:col-span-3 sm:rounded-b-none sm:rounded-r-lg sm:justify-end sm:py-10">
					<span className="text-para-gray">GRAND TOTAL</span>
					<span className="text-white">$ {total}</span>
				</div>
			</div>
			<Link href="/">
				<a>
					<Button className="w-full">Back to home</Button>
				</a>
			</Link>
		</article>
	);
};
export default ModalSuccess;
