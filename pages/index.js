import CategoriesMenu from "../components/home/CategoriesMenu";
import SectionHomeLanding from "../components/home/SectionHomeLanding";
import SectionIntro from "../components/home/SectionIntro";
import SectionProdutcs from "../components/home/SectionProducts";

const Home = () => {
	return (
		<>
			<SectionHomeLanding />
			<CategoriesMenu />
			<SectionProdutcs />
			<SectionIntro />
		</>
	);
};

export default Home;
