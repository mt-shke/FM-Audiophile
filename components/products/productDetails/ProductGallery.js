import ImgComponent from "../../UI/image/ImgComponent";

const ProductGallery = (props) => {
	const { name, gallery } = props.item;

	return (
		<>
			<div className="flex-c6 w-full md:hidden">
				{Object.values(gallery).map((item, index) => (
					<ImgComponent
						className={`
							${index === 2 ? "h-64 sm:h-72" : "h-40 sm:h-52"} w-full md:h-auto relative
						`}
						icss="rounded-lg"
						fit="cover"
						src={item.mobile}
						alt={name}
						key={`${name}${index}`}
					/>
				))}
			</div>
			<div className="hidden w-full gap-6 md:grid md:grid-cols-6 md:grid-flow-rows md:h-[500px] lg:h-[600px] xl:gap-8">
				{Object.values(gallery).map((item, index) => (
					<ImgComponent
						className={`
							${
								index === 2
									? "h-64 md:col-start-3 md:col-end-7 md:row-start-1 md:row-end-3"
									: "h-40 md:col-start-1 md:col-end-3"
							} w-full md:h-auto relative
						`}
						icss="rounded-lg"
						fit="cover"
						src={item.desktop}
						alt={name}
						key={`${name}${index}`}
					/>
				))}
			</div>
		</>
	);
};
export default ProductGallery;
