import Image from "next/image";
import Button from "../../UI/button/Button";

const SpeakerBottom = (props) => {
	return (
		<section className="relative flex flex-row py-36 items-start bg-gray text-black rounded-lg">
			<div className="flex flex-col relative z-20 gap-8 px-6 items-start text-left">
				<h2 className="text-3xl">zx7 speaker</h2>
				<Button className="ml-0 mr-auto" color="transparent">
					see product
				</Button>
			</div>
			<Image className="rounded-lg" src="/assets/home/mobile/image-speaker-zx7.jpg" layout="fill" />
		</section>
	);
};
export default SpeakerBottom;
