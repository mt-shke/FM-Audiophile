import Button from "../../UI/button/Button";
import circles from "/public/assets/shared/desktop/pattern-circles.svg";
import speaker from "/public/assets/home/mobile/image-speaker-zx9.png";
import speakerDesktop from "/public/assets/home/desktop/image-speaker-zx9.png";
import ImgComponent from "../../UI/image/ImgComponent";

const SpeakerTop = (props) => {
	return (
		<section className="relative flex flex-col gap-10 items-center overflow-hidden sm:flex-row py-12 bg-orange rounded-lg">
			<div className="flex justify-center items-center w-full relative z-10 sm:items-end sm:justify-end">
				<ImgComponent css="h-56 w-48 sm:hidden relative z-20" fit="contain" src={speaker} alt="speaker-zx9" />
				<ImgComponent
					css="hidden sm:block z-20 w-full h-60"
					fit="contain"
					src={speakerDesktop}
					alt="speaker-zx9"
				/>
				<ImgComponent css="aspect-square w-full absolute" src={circles} alt="circles design" />
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
