import ImgComponent from "../../UI/image/ImgComponent";
import ProductButtons from "./productDescription/ProductButtons";

const ProductDescription = (props) => {
	const { image, name, description, price } = props.item;
	const isNew = props.item.new;

	return (
		<article className="flex-c6 sm:gap-10 md:grid md:grid-cols-2 md:gap-16 md:text-sm lg:gap-32 lg:text-base xl:text-xl 2xl:text-2xl">
			<ImgComponent
				className="relative block w-full aspect-square"
				icss="rounded-lg"
				fit="cover"
				src={image.mobile}
				alt={name}
				priority="true"
			/>
			<div className="flex-c6 md:justify-center lg:gap-10">
				<div className="flex-c6 md:gap-4 lg:gap-8">
					{isNew && <span className="over-style uppercase text-orange">New product</span>}
					<h2 className="overflow-visible w-3/4">{name}</h2>
					<p className="text-para-gray xl:leading-10">{description}</p>
					<span className="font-bold">$ {price}</span>
				</div>
				<ProductButtons item={props.item} />
			</div>
		</article>
	);
};
export default ProductDescription;
