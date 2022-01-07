import ImgComponent from "../UI/image/ImgComponent";
import { shortenName } from "../utils/formValidation";
import CartItemButtons from "./CartItemButtons";

const CartItem = (props) => {
	const { name, price, image, quantity } = props.item;
	const shortenedName = shortenName(name);

	return (
		<li className={`${props.className ?? ""} flex flex-row gap-3 items-center text-sm`} key={shortenedName}>
			<ImgComponent
				className="relative w-fit block h-16 aspect-square"
				icss="rounded-lg"
				src={image.mobile}
				alt={name}
			/>
			<div className="flex flex-col font-bold whitespace-nowrap">
				<span>{shortenedName}</span>
				<span className="text-para-gray">$ {price}</span>
			</div>
			{!props.checkout && <CartItemButtons item={props.item} deleteItem={props.deleteItem ?? ""} />}
			{props.checkout && <span className="ml-auto mr-0 font-bold text-para-gray">x{quantity}</span>}
		</li>
	);
};
export default CartItem;
