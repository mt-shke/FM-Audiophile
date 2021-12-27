import Button from "../../UI/button/Button";
import ImgComponent from "../../UI/image/ImgComponent";
import img from "/public/assets/home/mobile/image-earphones-yx1.jpg";

const SectionEarphones = (props) => {
	return (
		<section className="flex flex-col gap-6 relative items-start text-black rounded-lg sm:flex-row">
			<ImgComponent
				css="block w-full aspect-[654/400] relative"
				icss="rounded-lg"
				src={img}
				alt="earphones"
			/>
			<div className="flex flex-col px-6 w-full aspect-[654/400] bg-s-grey gap-8 justify-center items-start text-left rounded-lg">
				<h2 className="text-3xl">yx1 earphones</h2>
				<Button className="ml-0 mr-auto" color="transparent">
					see product
				</Button>
			</div>
		</section>
	);
};
export default SectionEarphones;
