import Link from "next/link";
import ImgComponent from "../image/ImgComponent";

const CategoryCard = (props) => {
	return (
		<article className="bg-gray relative flex flex-col items-center gap-4 mx-auto mt-20 pt-24 pb-6 w-full rounded-md">
			<ImgComponent css="absolute w-48 h-48 -top-16" src={props.src} alt={props.alt ?? ""} />
			<h6>{props.title}</h6>
			<Link href={props.href}>
				<a className="subTitle text-lg text-soft-gray">{`SHOP >`}</a>
			</Link>
		</article>
	);
};
export default CategoryCard;
