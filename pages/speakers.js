import SectionProductLanding from "../components/products/SectionProductLanding";
import SectionCategoriesMenu from "../components/home/SectionCategoriesMenu";
import SectionIntro from "../components/home/SectionIntro";
import SectionProductsList from "../components/products/SectionProductsList";
import data from "/data.json";

const SpeakersPage = (props) => {
	const speakers = data.filter((item) => item.category === "speakers");
	return (
		<>
			<SectionProductLanding product="speakers" />
			<SectionProductsList list={speakers} />
			<SectionCategoriesMenu />
			<SectionIntro />
		</>
	);
};
export default SpeakersPage;
