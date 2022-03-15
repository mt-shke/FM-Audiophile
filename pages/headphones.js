import SectionProductLanding from "../components/products/SectionProductLanding";
import SectionCategoriesMenu from "../components/home/SectionCategoriesMenu";
import SectionIntro from "../components/home/SectionIntro";
import SectionProductsList from "../components/products/SectionProductsList";
import data from "/data.json";

const HeadphonesPage = (props) => {
	const headphones = data.filter((item) => item.category === "headphones");
	return (
		<>
			<SectionProductLanding product="headphones" />
			<SectionProductsList list={headphones} />
			<SectionCategoriesMenu />
			<SectionIntro />
		</>
	);
};

export async function getStaticProps() {
	try {
		return {
			props: {},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
}

export default HeadphonesPage;
