import Image from "next/image";
import Button from "../../UI/button/Button";

const SpeakerTop = (props) => {
	return (
		<section className="relative flex flex-col py-12 items-center bg-orange rounded-lg">
			<div className=" grid place-items-center relative z-10">
				<div className="h-64 w-64 relative z-20">
					<Image src="/assets/shared/desktop/image-category-thumbnail-speakers.png" layout="fill" />
				</div>

				<Image
					className="saturate-100 brightness-220 absolute"
					src="/assets/shared/desktop/pattern-circles.svg"
					layout="fill"
				/>
			</div>
			<div className="flex flex-col relative z-20 gap-4 px-6 items-center text-center">
				<h2 className="text-white">zx9 speaker</h2>
				<p className="text-gray">
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<Button color="black">see product</Button>
			</div>
		</section>
	);
};
export default SpeakerTop;
