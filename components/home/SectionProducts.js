import SectionEarphones from "./sectionProducts/SectionEarphones";
import SectionSpeakerBottom from "./sectionProducts/SectionSpeakerBottom";
import SectionSpeakerTop from "./sectionProducts/SectionSpeakerTop";

const SectionProdutcs = (props) => {
	return (
		<section className="flex-c6 sm:gap-14">
			<SectionSpeakerTop />
			<SectionSpeakerBottom />
			<SectionEarphones />
		</section>
	);
};
export default SectionProdutcs;
