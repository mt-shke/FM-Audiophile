import Button from "../../UI/button/Button";
import ImgComponent from "../../UI/image/ImgComponent";

const ProductDescription = (props) => {
	const { image, name, description, price } = props.item;
	const isNew = props.item.new;

	return (
		<article className="flex-c6">
			<ImgComponent
				css="relative block w-full aspect-square"
				icss="rounded-lg"
				fit="cover"
				src={image.mobile}
				alt={name}
			/>
			<div className="flex-c6">
				{isNew && <span className="over-style uppercase text-orange">New product</span>}
				<h2>{name}</h2>
				<p className="text-para-gray">{description}</p>
				<span className="font-bold">$ {price}</span>
			</div>
			<div className="flex flex-row items-center gap-4">
				<div className="h-full flex flex-row p-2 bg-gray text-orange">
					<span>-</span>
					<input
						className="noArr w-16 px-2 text-black text-center font-bold bg-gray outline-none"
						defaultValue="1"
						type="number"
					/>
					<span>+</span>
				</div>
				<Button>add to cart</Button>
			</div>
		</article>
	);
};
export default ProductDescription;
