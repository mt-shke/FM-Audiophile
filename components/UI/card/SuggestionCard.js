import Link from "next/link";
import Button from "../button/Button";
import ImgComponent from "../image/ImgComponent";

const SuggestionCard = (props) => {
	return (
		<>
			<article className="w-full flex-c6 items-center text-center md:hidden">
				<ImgComponent
					css="w-full block relative aspect-[7/3] bg-gray rounded-lg sm:aspect-square"
					src={props.src.mobile ?? ""}
					alt={props.alt ?? ""}
					icss="rounded-lg"
				/>
				<h5>{props.name ?? ""}</h5>
				<Link href={props.slug}>
					<a>
						<Button>see product</Button>
					</a>
				</Link>
			</article>
			<article className="hidden w-full md:flex-c6 items-center text-center lg:gap-8">
				<ImgComponent
					css="w-full block relative aspect-[7/3] bg-gray rounded-lg sm:aspect-square"
					src={props.src.desktop ?? ""}
					alt={props.alt ?? ""}
					icss="rounded-lg"
				/>
				<h5>{props.name ?? ""}</h5>
				<Link href={props.slug}>
					<a>
						<Button>see product</Button>
					</a>
				</Link>
			</article>
		</>
	);
};
export default SuggestionCard;
