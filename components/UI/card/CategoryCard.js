import Image from "next/image";
import Link from "next/link";

const CategoryCard = (props) => {
	return (
		<article className="bg-gray relative flex flex-col items-center gap-4 mx-auto mt-20 pt-24 pb-6 w-full rounded-md">
			<div className="absolute w-48 h-44 -top-16">
				<Image src={props.src} layout="fill" />
			</div>
			<h6>{props.title}</h6>
			<Link href={props.href}>
				<a className="subTitle text-lg text-soft-gray">{`SHOP >`}</a>
			</Link>
		</article>
	);
};
export default CategoryCard;
