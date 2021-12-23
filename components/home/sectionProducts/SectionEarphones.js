import Image from "next/image";
import Button from "../../UI/button/Button";

const SectionEarphones = (props) => {
	return (
		<section className="flex flex-col gap-6 relative items-start text-black rounded-lg">
			<div className="w-full h-52 relative">
				<Image className="rounded-lg" src="/assets/home/mobile/image-earphones-yx1.jpg" layout="fill" />
			</div>
			<div className="flex flex-col py-12 px-6 w-full bg-s-grey z-20 gap-8 items-start text-left rounded-lg">
				<h2 className="text-3xl">yx1 earphones</h2>
				<Button className="ml-0 mr-auto" color="transparent">
					see product
				</Button>
			</div>
		</section>
	);
};
export default SectionEarphones;
