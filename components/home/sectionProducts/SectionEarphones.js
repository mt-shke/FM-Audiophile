import Link from "next/link";
import Button from "../../UI/button/Button";
import ImgComponent from "../../UI/image/ImgComponent";
import img from "/public/assets/home/mobile/image-earphones-yx1.jpg";

const SectionEarphones = (props) => {
	return (
		<section className="relative flex-c6 justify-between text-black rounded-lg sm:grid grid-cols-2 sm:gap-10">
			<ImgComponent
				className="block relative w-full aspect-[14/9]"
				iclassName="rounded-lg"
				src={img}
				alt="earphones"
			/>
			<div className="relative w-full flex-c6 aspect-[14/9] justify-center items-start pl-6 bg-s-grey text-left rounded-lg sm:pl-12 sm:aspect-auto">
				<h2>yx1 earphones</h2>
				<Link href="/earphones/yx1-earphones">
					<a>
						<Button className="ml-0 mr-auto" color="transparent">
							see product
						</Button>
					</a>
				</Link>
			</div>
		</section>
	);
};
export default SectionEarphones;
