import Head from "next/head";
import SectionCategoriesMenu from "../../components/home/SectionCategoriesMenu";
import SectionIntro from "../../components/home/SectionIntro";
import SectionProductDetails from "../../components/products/productDetails/SectionProductDetails";
import SectionSuggestion from "../../components/products/SectionSuggestion";
import dataJson from "/data.json";

const ProductDetailsPage = (props) => {
	return (
		<>
			<Head>
				<title>{props.item[0].name}</title>
				<meta title="description" content={props.item[0].description} />
			</Head>
			<SectionProductDetails item={props.item[0]} />
			<SectionSuggestion item={props.item[0]} suggest={props.suggest} />
			<SectionCategoriesMenu />
			<SectionIntro />
		</>
	);
};

export async function getStaticPaths() {
	const data = dataJson;
	return {
		fallback: false,
		paths: data.map((item) => ({
			params: { slug: item.slug },
		})),
	};
}

export async function getStaticProps(context) {
	try {
		const data = dataJson;
		const slug = context.params.slug;
		const item = data.filter((item) => item.slug === slug);
		const suggest = data.filter((item) => item.slug !== slug);
		return {
			props: {
				item: item,
				suggest: suggest,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				item: [],
			},
		};
	}
}

export default ProductDetailsPage;
