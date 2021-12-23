import SectionEarphones from "./sectionProducts/SectionEarphones";
import SpeakerBottom from "./sectionProducts/SpeakerBottom";
import SpeakerTop from "./sectionProducts/SpeakerTop";

const SectionProdutcs = (props) => {
	return (
		<section className="flex flex-col gap-6 p-6">
			<SpeakerTop />
			<SpeakerBottom />
			<SectionEarphones />
		</section>
	);
};
export default SectionProdutcs;
