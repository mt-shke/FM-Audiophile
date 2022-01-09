import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import configureCartStore from "../components/store/cart-store";

configureCartStore();

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Audiophile</title>
				<meta name="description" content="Audiophile - A front-end mentor challenge" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
