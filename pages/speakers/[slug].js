import Head from "next/head";
import SectionProductDetails from "../../components/products/SectionProductDetails";
import data from "/data.json";

const ProductDetailsPage = (props) => {
	return (
		<>
			<Head>
				<title></title>
				<meta name="description" content="" />
			</Head>
			<SectionProductDetails item={props.item[0]} />
		</>
	);
};

export async function getStaticPaths() {
	const items = data;
	return {
		fallback: false,
		paths: items.map((item) => ({
			params: { slug: item.slug },
		})),
	};
}

export async function getStaticProps(context) {
	try {
		const items = data;
		const slug = context.params.slug;
		const item = items.filter((item) => item.slug === slug);
		return {
			props: {
				item: item,
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
