import ImgComponent from "../UI/image/ImgComponent";
import { shortenName } from "../utils/formValidation";
import CartItemButtons from "./CartItemButtons";

const CartItem = (props) => {
	const { name, price, image } = props.item;
	const shortenedName = shortenName(name);

	return (
		<li className="flex flex-row gap-3 items-center text-sm" key={shortenedName}>
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
			<CartItemButtons item={props.item} deleteItem={props.deleteItem} />
		</li>
	);
};
export default CartItem;
