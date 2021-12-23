import CategoryCard from "../UI/card/CategoryCard";

const CategoriesMenu = (props) => {
	return (
		<section className="flex flex-col p-6 my-6 gap-4 md:container">
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
				href="#"
				title="headphones"
			/>
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
				href="#"
				title="speakers"
			/>
			<CategoryCard
				src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
				href="#"
				title="earphones"
			/>
		</section>
	);
};
export default CategoriesMenu;
