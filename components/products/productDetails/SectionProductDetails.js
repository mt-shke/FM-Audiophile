import { useRouter } from "next/router";
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";

const SectionProductDetails = (props) => {
	const router = useRouter();

	return (
		<section className="flex flex-col gap-20 items-start pt-16 sm:pt-20 md:gap-32 md:pt-32">
			<span
				onClick={router.back}
				className="absolute top-4 font-bold text-para-gray sm:top-6 md:top-12 hover:cursor-pointer"
			>
				Go Back
			</span>
			<ProductDescription item={props.item} />
			<ProductFeatures item={props.item} />
			<ProductGallery item={props.item} />
		</section>
	);
};

export default SectionProductDetails;
