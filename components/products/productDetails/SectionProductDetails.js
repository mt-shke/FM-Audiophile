import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";

const SectionProductDetails = (props) => {
	console.log(props.item);

	return (
		<section className="flex flex-col gap-20 items-start py-6 text-left">
			<button className="font-bold text-para-gray">Go Back</button>
			<ProductDescription item={props.item} />
			<ProductFeatures item={props.item} />
			<ProductGallery item={props.item} />
		</section>
	);
};

export default SectionProductDetails;
