import Image from "next/image";

const SectionIntro = (props) => {
	return (
		<section className="ctn w-full px-6 flex flex-col gap-10 my-20 relative items-start text-black rounded-lg">
			<span className="w-full aspect-square relative">
				<Image className="rounded-lg" src="/assets/shared/mobile/image-best-gear.jpg" layout="fill" />
			</span>
			<div className="flex flex-col gap-6 items-center text-center">
				<h2 className="text-3xl">
					Bringing you the <strong className="text-s-orange">best</strong> audio gear
				</h2>

				<p className="text-soft-gray">
					Located at the heart of New York City, Audiophile is the premier store for high end headphones,
					earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
					available for you to browse and experience a wide range of our products. Stop by our store to meet
					some of the fantastic people who make Audiophile the best place to buy your portable audio
					equipment.
				</p>
			</div>
		</section>
	);
};
export default SectionIntro;
