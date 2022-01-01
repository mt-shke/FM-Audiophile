import Button from "../../UI/button/Button";
import ImgComponent from "../../UI/image/ImgComponent";
import speaker from "/public/assets/home/mobile/image-speaker-zx7.jpg";
import speakerDesktop from "/public/assets/home/desktop/image-speaker-zx7.jpg";
import Link from "next/link";

const SectionSpeakerBottom = (props) => {
	return (
		<section className="relative flex flex-row items-center bg-gray text-black rounded-lg">
			<div className="absolute z-20 flex flex-col gap-8 items-start ml-6 md:ml-12 text-left">
				<h2>zx7 speaker</h2>
				<Link href="/speakers/zx7-speaker">
					<a>
						<Button className="ml-0 mr-auto" color="transparent">
							see product
						</Button>
					</a>
				</Link>
			</div>
			<ImgComponent
				className="block w-full aspect-square sm:hidden "
				iclassName="rounded-lg"
				fit="initial"
				src={speaker}
			/>
			<ImgComponent
				className="hidden w-full aspect-[15/4] sm:block "
				fit="initial"
				iclassName="rounded-lg"
				src={speakerDesktop}
			/>
		</section>
	);
};
export default SectionSpeakerBottom;
