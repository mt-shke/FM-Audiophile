import SectionCategoriesMenu from "../components/home/SectionCategoriesMenu";
import SectionHomeLanding from "../components/home/SectionHomeLanding";
import SectionIntro from "../components/home/SectionIntro";
import SectionProdutcs from "../components/home/SectionProducts";

const Home = () => {
	return (
		<>
			<SectionHomeLanding />
			<SectionCategoriesMenu />
			<SectionProdutcs />
			<SectionIntro />
		</>
	);
};

export default Home;
