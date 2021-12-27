import Button from "../UI/button/Button";
import ImgComponent from "../UI/image/ImgComponent";
import imgMobile from "/public/assets/home/mobile/image-header.jpg";
import imgDesktop from "/public/assets/home/desktop/image-hero.jpg";

const SectionHomeLanding = (props) => {
	return (
		<section className="bg-black relative flex items-center w-full">
			<div className="w-full ctn flex items-center home-landing relative">
				<div className="w-full h-full absolute z-10 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
				<div className="hidden sm:block w-full h-full absolute z-[9] bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>
				<div className=" "></div>
				<ImgComponent css="absolute sm:hidden" src={imgMobile} alt="headphone xx99 mark II" />
				<ImgComponent css="hidden absolute sm:block" src={imgDesktop} alt="headphone xx99 mark II" />
				<article className="relative z-20 text-white items-center text-center flex flex-col gap-8 py-20 px-4 sm:px-0 sm:w-2/5 sm:text-left sm:items-start sm:mx-6">
					<h5 className="text-soft-gray overl">New product</h5>
					<h2>XX99 Mark II Headphones</h2>
					<p className="text-s-white">
						Experience natural, lifelike audio and exceptional build quality made for the passionate music
						enthusiast.
					</p>
					<Button>see product</Button>
				</article>
			</div>
		</section>
	);
};

export default SectionHomeLanding;
