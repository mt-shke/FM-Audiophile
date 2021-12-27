import SectionEarphones from "./sectionProducts/SectionEarphones";
import SpeakerBottom from "./sectionProducts/SpeakerBottom";
import SpeakerTop from "./sectionProducts/SpeakerTop";

const SectionProdutcs = (props) => {
	return (
		<section className="ctn flex-c6 my-12 w-full px-6">
			<SpeakerTop />
			<SpeakerBottom />
			<SectionEarphones />
		</section>
	);
};
export default SectionProdutcs;
