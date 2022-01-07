import SectionCheckoutSuccess from "../components/checkout/SectionCheckoutSuccess";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/utils/firebase";

const CheckoutSuccessPage = (props) => {
	return <SectionCheckoutSuccess commands={props.commands} />;
};

// export async function getStaticPaths() {
// 	let ids = [];
// 	const commands = await getDocs(collection(db, "commands"));
// 	commands.forEach((doc) => ids.push(doc.data().id));

// 	return {
// 		fallback: false,
// 		paths: ids.map((elem) => ({
// 			params: {
// 				sessionId: elem.id,
// 			},
// 		})),
// 	};
// }

// export async function getStaticProps(context) {
// 	try {

// 		const items = await getDocs(collection, (db, "commands"));
// 	items.forEach((doc) => doc.data().id)

// 		return {
// 			props: {
// 				commands: JSON.parse(commands),
// 			},
// 		};
// 	} catch (err) {
// 		console.log(err);
// 		return {
// 			props: {
// 				commands: [],
// 			},
// 		};
// 	}
// }

export default CheckoutSuccessPage;
