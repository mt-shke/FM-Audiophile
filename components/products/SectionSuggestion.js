import SuggestionCard from "../UI/card/SuggestionCard";

const SectionSuggestion = (props) => {
	let others = props.item.others;

	const newSlugs = others
		.map((other) => props.suggest.find((sugg) => sugg.name.includes(other.name)))
		.map((item) => `/${item.category}/${item.slug}`);

	// find their own category for each "others" items(suggested items) and set a new correct slug

	others.forEach((item, index) => (item.slug = newSlugs[index]));

	return (
		<section className="flex flex-col items-center gap-12 mt-20 sm:mt-0 md:gap-16">
			<h2>you may also like</h2>
			<div className="w-full flex flex-col gap-12 sm:flex-row sm:gap-6">
				{others.map((item) => (
					<SuggestionCard
						src={item.image}
						alt={item.name}
						slug={item.slug}
						key={item.name}
						name={item.name}
					/>
				))}
			</div>
		</section>
	);
};
export default SectionSuggestion;
