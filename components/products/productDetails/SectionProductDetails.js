import ButtonGoBack from "../../UI/button/ButtonGoBack";
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";

const SectionProductDetails = (props) => {
	return (
		<section className="flex flex-col gap-20 items-start pt-16 sm:pt-20 md:gap-32 md:pt-32">
			<ButtonGoBack />
			<ProductDescription item={props.item} />
			<ProductFeatures item={props.item} />
			<ProductGallery item={props.item} />
		</section>
	);
};

export default SectionProductDetails;
