import ProductCard from "../UI/card/ProductCard";

const SectionProductsList = (props) => {
	const newFirst = props.list.sort((item) => (item.new ? -1 : 1));
	const sorted = [...newFirst];

	return (
		<section className="flex flex-col gap-16 md:gap-28">
			{sorted.map((item, index) => (
				<ProductCard item={item} key={item.name} index={index} />
			))}
		</section>
	);
};
export default SectionProductsList;
