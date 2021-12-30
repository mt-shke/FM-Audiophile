import ImgComponent from "../../UI/image/ImgComponent";

const ProductGallery = (props) => {
	const { name, gallery } = props.item;

	console.log(Object.values(gallery));
	return (
		<figure>
			{Object.values(gallery).map((item) => (
				<ImgComponent css="relative w-20 h-20" icss="h-20 w-full" src={item.mobile} alt={name} />
			))}
		</figure>
	);
};
export default ProductGallery;
