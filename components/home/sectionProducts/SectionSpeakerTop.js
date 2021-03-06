import Button from "../../UI/button/Button";
import circles from "/public/assets/shared/desktop/pattern-circles.svg";
import speaker from "/public/assets/home/mobile/image-speaker-zx9.png";
import speakerDesktop from "/public/assets/home/desktop/image-speaker-zx9.png";
import ImgComponent from "../../UI/image/ImgComponent";
import Link from "next/link";

const SectionSpeakerTop = (props) => {
	return (
		<section className="relative flex flex-col gap-10 items-center overflow-hidden py-12 bg-orange rounded-lg md:grid md:grid-cols-2">
			<div className="relative z-10 w-full gridc">
				<ImgComponent
					className="h-56 w-48 absolute z-20 md:hidden"
					fit="contain"
					src={speaker}
					alt="speaker-zx9"
				/>
				<ImgComponent
					className="hidden absolute w-[300px] lg:w-[400px] -bottom-20 aspect-[3/4] md:block z-20"
					fit="contain"
					src={speakerDesktop}
					alt="speaker-zx9"
				/>
				<ImgComponent className="relative w-full aspect-square" src={circles} alt="circles design" />
			</div>
			<div className="relative z-20 flex flex-col items-center gap-4 px-6 text-center md:items-start md:text-left md:px-20 md:gap-10">
				<h2 className="text-white">zx9 speaker</h2>
				<p className="text-gray sm:text-xl">
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<Link href="/speakers/zx9-speaker">
					<a>
						<Button color="black">see product</Button>
					</a>
				</Link>
			</div>
		</section>
	);
};
export default SectionSpeakerTop;
