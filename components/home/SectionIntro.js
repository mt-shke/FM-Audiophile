import img from "/public/assets/shared/mobile/image-best-gear.jpg";
import imgDesktop from "/public/assets/shared/desktop/image-best-gear.jpg";
import ImgComponent from "../UI/image/ImgComponent";

const SectionIntro = (props) => {
	return (
		<section className="flex flex-col-reverse items-start gap-10 pb-24  text-black rounded-lg sm:grid sm:grid-cols-2 sm:pb-32 md:pb-44">
			<div className="h-full flex-c6 items-center text-center sm:justify-center sm:text-left sm:items-start sm:pr-0 md:gap-10 md:pr-8 lg:pr-24">
				<h1>
					Bringing you the <strong className="text-s-orange">best</strong> audio gear
				</h1>

				<p className="text-para-gray sm:text-base md:text-xl xl:leading-9 xl:text-xl">
					Located at the heart of New York City, Audiophile is the premier store for high end headphones,
					earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
					available for you to browse and experience a wide range of our products. Stop by our store to meet
					some of the fantastic people who make Audiophile the best place to buy your portable audio
					equipment.
				</p>
			</div>
			<ImgComponent
				className="relative w-full aspect-square sm:hidden"
				icss="w-full rounded-lg"
				fit="cover"
				src={img}
				alt="audiophile headphones"
			/>
			<ImgComponent
				className="hidden relative w-full h-full aspect-square sm:flex sm:items-center"
				icss="rounded-lg"
				fit="cover"
				src={imgDesktop}
				alt="audiophile headphones"
			/>
		</section>
	);
};
export default SectionIntro;
