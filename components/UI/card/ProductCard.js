import ImgComponent from "../image/ImgComponent";
import Button from "../../UI/button/Button";
import { useRouter } from "next/router";

const ProductCard = (props) => {
	const router = useRouter();
	const item = props.item;
	const pair = props.index % 2 === 0;

	const buttonHandler = () => {
		router.push(`/${item.category}/${item.slug}`);
	};

	return (
		<article className="overflow-hidden grid grid-rows-2 gap-6 md:gap-12 md:grid-cols-2 md:grid-rows-1">
			<ImgComponent
				css="relative w-full aspect-[1/1] md:hidden"
				icss="rounded-lg"
				fit="cover"
				src={item.image.mobile}
				alt={item.name}
			/>
			<ImgComponent
				css={`
					${!pair ? "order-2" : ""} hidden relative w-full max-w- aspect-[1/1] md:block
				`}
				icss="rounded-lg"
				fit="cover"
				src={item.image.desktop}
				alt={item.name}
			/>
			<div
				className={`flex flex-col gap-4 justify-center items-center text-center md:text-left md:items-start lg:gap-10 lg:text-lg xl:gap-14 xl:text-2xl
                ${pair ? "order-1 md:pl-8 lg:pl-24" : "md:pr-8 lg:pr-24"}
            `}
			>
				{item.new && <span className="overl uppercase text-orange">New product</span>}
				<h2 className="px-6 md:px-0">{item.name}</h2>
				<p className="text-para-gray">{item.description}</p>
				<Button onClick={buttonHandler}>see product</Button>
			</div>
		</article>
	);
};

export default ProductCard;
