import SectionProductLanding from "../components/products/SectionProductLanding";
import SectionCategoriesMenu from "../components/home/SectionCategoriesMenu";
import SectionIntro from "../components/home/SectionIntro";
import SectionProductsList from "../components/products/SectionProductsList";
import data from "/data.json";

const EarphonesPage = (props) => {
	const earphones = data.filter((item) => item.category === "earphones");
	return (
		<>
			<SectionProductLanding product="earphones" />
			<SectionProductsList list={earphones} />
			<SectionCategoriesMenu />
			<SectionIntro />
		</>
	);
};
export default EarphonesPage;
