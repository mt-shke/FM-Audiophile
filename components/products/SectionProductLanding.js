const SectionProductLanding = (props) => {
	return (
		<div className="w-full gridc h-20 bg-black text-white sm:h-40 md:h-52">
			<section>
				<h2 className="uppercase">{props.product}</h2>
			</section>
		</div>
	);
};

export default SectionProductLanding;
