import SectionEarphones from "./sectionProducts/SectionEarphones";
import SectionSpeakerBottom from "./sectionProducts/SectionSpeakerBottom";
import SectionSpeakerTop from "./sectionProducts/SectionSpeakerTop";

const SectionProdutcs = (props) => {
	return (
		<section className="ctn w-full flex-c6 px-6 my-12 sm:gap-14 sm:mt-20">
			<SectionSpeakerTop />
			<SectionSpeakerBottom />
			<SectionEarphones />
		</section>
	);
};
export default SectionProdutcs;
