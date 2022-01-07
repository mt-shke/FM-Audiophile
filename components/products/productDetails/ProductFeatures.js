const ProductFeatures = (props) => {
	const { features, includes } = props.item;

	return (
		<article className="flex flex-col gap-20 md:grid md:grid-cols-3 lg:gap-32">
			<div className="flex-c6 md:col-span-2">
				<h5>features</h5>
				<p className="text-para-gray whitespace-pre-wrap xl:text-lg">{features}</p>
			</div>
			<div className="flex-c6">
				<h5>in the box</h5>
				<ul className="flex flex-col gap-1">
					{includes.map((item) => (
						<li className="font-bold" key={item.item.toString()}>
							<span className="text-orange">{item.quantity}x</span>{" "}
							<span className="ml-2 text-para-gray">{item.item}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};
export default ProductFeatures;
