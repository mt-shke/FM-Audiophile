import Button from "../../UI/button/Button";
import ImgComponent from "../../UI/image/ImgComponent";
import speaker from "/public/assets/home/mobile/image-speaker-zx7.jpg";
import speakerDesktop from "/public/assets/home/desktop/image-speaker-zx7.jpg";

const SpeakerBottom = (props) => {
	return (
		<section className="relative flex flex-row items-center bg-gray text-black rounded-lg">
			<div className="flex flex-col absolute z-20 gap-8 px-6 items-start text-left">
				<h2 className="text-3xl">zx7 speaker</h2>
				<Button className="ml-0 mr-auto" color="transparent">
					see product
				</Button>
			</div>
			<ImgComponent
				css="sm:hidden w-full block aspect-[654/640]"
				icss="rounded-lg"
				fit="initial"
				src={speaker}
			/>
			<ImgComponent
				css="hidden sm:block w-full aspect-[1110/320]"
				fit="initial"
				icss="rounded-lg"
				src={speakerDesktop}
			/>
		</section>
	);
};
export default SpeakerBottom;
