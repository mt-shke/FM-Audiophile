import ProductCard from "../UI/card/ProductCard";

const SectionProductsList = (props) => {
	const newFirst = props.list.sort((item) => (item.new ? -1 : 1));
	const sorted = [...newFirst];

	return (
		<section className="ctn flex flex-col gap-16 px-6 py-10 md:gap-28 md:py-32">
			{sorted.map((item, index) => (
				<ProductCard item={item} key={item.name} index={index} />
			))}
		</section>
	);
};
export default SectionProductsList;
