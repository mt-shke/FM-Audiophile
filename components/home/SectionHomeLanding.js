import Button from "../UI/button/Button";
import ImgComponent from "../UI/image/ImgComponent";
import imgMobile from "/public/assets/home/mobile/image-header.jpg";
import imgDesktop from "/public/assets/home/desktop/image-hero.jpg";
import Background from "../UI/background/Background";
import Link from "next/link";

const SectionHomeLanding = (props) => {
	return (
		<div className="relative w-full flex items-center bg-black">
			<section className="ctn home-landing relative w-full flex items-center">
				<Background className="absolute z-10 bg-gradient-to-b from-black via-transparent to-black opacity-90 md:hidden" />
				<Background className="hidden absolute z-[9] radial-landing md:block" />
				<ImgComponent className="absolute sm:hidden" src={imgMobile} alt="headphone xx99 mark II" />
				<ImgComponent className="hidden absolute sm:block" src={imgDesktop} alt="headphone xx99 mark II" />
				<article className="relative z-20 flex flex-col items-center gap-8 py-20 px-4 text-white text-center sm:w-2/5 sm:items-start sm:px-0 sm:mx-6 sm:text-left xl:gap-12">
					<span className="over-style uppercase text-xl text-para-gray">New product</span>
					<h2 className="text-5xl lg:text-6xl xl:text-7xl xl:leading-[74px] tracking-wider">
						XX99 Mark II <br />
						Headphones
					</h2>
					<p className="text-s-white leading-8 sm:text-lg xl:pr-32 xl:tracking-wide xl:leading-[38px]">
						Experience natural, lifelike audio and exceptional build quality made for the passionate music
						enthusiast.
					</p>
					<Link href="/headphones/xx99-mark-two-headphones">
						<a>
							<Button>see product</Button>
						</a>
					</Link>
				</article>
			</section>
		</div>
	);
};

export default SectionHomeLanding;
