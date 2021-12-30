const ProductFeatures = (props) => {
	const { features, includes } = props.item;

	return (
		<article className="flex flex-col gap-20">
			<div className="flex-c6">
				<h5>features</h5>
				<p className="text-para-gray whitespace-pre-wrap">{features}</p>
			</div>
			<div className="flex-c6">
				<h5>in the box</h5>
				<ul className="flex flex-col gap-2">
					{includes.map((item) => (
						<li className="font-bold" key={item.item.toString()}>
							<span className="text-orange">{item.quantity}x</span>{" "}
							<span className="ml-4 text-para-gray">{item.item}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};
export default ProductFeatures;
