import CategoryCard from "../UI/card/CategoryCard";
import headphones from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const SectionCategoriesMenu = (props) => {
	return (
		<section
			className={`${props.css ?? ""} w-full flex flex-col px-6 gap-32 sm:flex-row sm:gap-6 md:mt-20 lg:gap-8`}
		>
			<CategoryCard src={headphones} href="/headphones" title="headphones" alt="headphones" />
			<CategoryCard src={speakers} href="/speakers" title="speakers" alt="speakers" />
			<CategoryCard src={earphones} href="/earphones" title="earphones" alt="earphones" />
		</section>
	);
};
export default SectionCategoriesMenu;
