import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Background from "../UI/background/Background";
import { resetLocalCart } from "../utils/localCart";
import ModalSuccess from "./ModalSuccess";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { getUrlSessionId } from "../utils/formValidation";

const SectionCheckoutSuccess = (props) => {
	const [command, setCommand] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (command) return;
		checkCommand();
		setTimeout(() => {
			resetLocalCart();
			router.push("/");
		}, 15000);
	}, [command]);

	const checkCommand = async () => {
		const sessionId = getUrlSessionId();
		const commands = await getDocs(collection(db, "commands"));
		commands.forEach((doc) => {
			if (doc.data().id === sessionId) {
				setCommand(doc.data());
			}
		});

		// getCommand and setToDB {...command, paymentChecked: true}
	};

	return (
		<>
			<Background className="fixed inset-0 z-[71] bg-black opacity-75" />
			<section className="home-landing relative z-[72] grid-flow-col items-center pt-20 font-bold">
				{!command && <span className="animate-spinning border-t-2 h-20 w-20 rounded-full">AA</span>}
				{command && <ModalSuccess command={command} />}
				<p className="text-center font-normal text-white my-6">You will be redirected in a moment...</p>
			</section>
		</>
	);
};
export default SectionCheckoutSuccess;
