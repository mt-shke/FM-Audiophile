import Link from "next/link";
import ImgComponent from "../image/ImgComponent";

const CategoryCard = (props) => {
	return (
		<article className="relative w-full gridc mx-auto bg-gray rounded-md">
			<ImgComponent
				css="relative h-40 md:h-60 aspect-square -top-20 md:-top-28"
				fit="cover"
				src={props.src}
				alt={props.alt ?? ""}
			/>
			<div className="absolute flex flex-col gap-4 pt-12 md:pt-16 text-center items-center">
				<h6>{props.title}</h6>
				<Link href={props.href}>
					<a className="subTitle text-lg text-para-gray">{`SHOP >`}</a>
				</Link>
			</div>
		</article>
	);
};
export default CategoryCard;
