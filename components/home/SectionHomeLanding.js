import Image from "next/image";
import Button from "../UI/button/Button";

const SectionHomeLanding = (props) => {
	return (
		<section className="bg-black home-landing relative">
			<Image
				className="absolute z-0"
				src="/assets/home/image-hero-mobile.jpg"
				objectFit="cover"
				layout="fill"
				priority
			/>
			<article className="relative text-white text-center flex flex-col gap-8 py-20 px-4">
				<h5 className="text-soft-gray">New product</h5>
				<h2>XX99 Mark II Headphones</h2>
				<p className="text-s-white">
					Experience natural, lifelike audio and exceptional build quality made for the passionate music
					enthusiast.
				</p>
				<Button bgColor="bg-orange" textColor="text-white" hoverBg="bg-s-orange" hoverText="text-white">
					see product
				</Button>
			</article>
		</section>
	);
};
export default SectionHomeLanding;
