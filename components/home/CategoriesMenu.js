import CategoryCard from "../UI/card/CategoryCard";

const CategoriesMenu = (props) => {
	return (
		<section className="flex flex-col gap-4 w-full px-6 my-12 ctn sm:flex-row">
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
				href="#"
				title="headphones"
				alt="headphones"
			/>
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
				href="#"
				title="speakers"
				alt="speakers"
			/>
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
				href="#"
				title="earphones"
				alt="earphones"
			/>
		</section>
	);
};
export default CategoriesMenu;
