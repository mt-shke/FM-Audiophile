import Button from "../UI/button/Button";
import ImgComponent from "../UI/image/ImgComponent";
import imgMobile from "/public/assets/home/mobile/image-header.jpg";
import imgDesktop from "/public/assets/home/desktop/image-hero.jpg";
import Background from "../UI/background/Background";

const SectionHomeLanding = (props) => {
	return (
		<section className=" relative w-full flex items-center bg-black">
			<div className="ctn home-landing relative w-full flex items-center">
				<Background css="absolute z-10 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
				<Background css="hidden absolute z-[9] bg-gradient-to-r from-black via-transparent to-black opacity-90 sm:block" />
				<ImgComponent css="absolute sm:hidden" src={imgMobile} alt="headphone xx99 mark II" />
				<ImgComponent css="hidden absolute sm:block" src={imgDesktop} alt="headphone xx99 mark II" />
				<article className="relative z-20 flex flex-col items-center gap-8 py-20 px-4 text-white text-center sm:w-2/5 sm:items-start sm:px-0 sm:mx-6 sm:text-left">
					<span className="overl uppercase text-xl text-para-gray">New product</span>
					<h2>XX99 Mark II Headphones</h2>
					<p className="text-s-white sm:text-lg">
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
