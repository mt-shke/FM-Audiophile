import ButtonGoBack from "../UI/button/ButtonGoBack";
import Background from "../UI/background/Background";
import Summary from "./Summary";
import Form from "./Form";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

const SectionCheckout = (props) => {
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const errorMessageHandler = () => {
		setErrorMessage("");
	};

	const submitHandler = (e, items) => {
		e.preventDefault();
		const result = Array.from(e.target.closest("div").firstChild)
			.filter((elem) => elem.tagName === "INPUT")
			.map((elem) => [elem.id, elem.value]);

		const emptyField = Object.values(result)
			.map((elem) => elem[1])
			.some((elem) => elem === "");

		if (emptyField) {
			setErrorMessage("Please complete all required fields");
			return;
		}
		const commandDetails = Object.fromEntries(result);
		createCheckoutSession(items, commandDetails);
	};

	const createCheckoutSession = async (items, commandDetails) => {
		const result = await axios.post("/api/stripe/create-checkout-session", items, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (result) {
			const sessionId = result.data.url
				.toString()
				.replace("https://checkout.stripe.com/pay/", "")
				.split("#")[0];
			const command = { ...commandDetails, createdAt: new Date(), id: sessionId, items: items };
			const response = await setCommandToDB(command);
			if (response) router.push(result.data.url);
		}
	};

	const setCommandToDB = async (command) => {
		const response = await addDoc(collection(db, "commands"), {
			...command,
		});
		return response;
	};

	return (
		<section className="flex-c6 items-start py-16 bg-gray sm:py-20 md:gap-32 md:py-32">
			<ButtonGoBack />
			<div className="w-full flex flex-col gap-4 bg-gray md:grid md:grid-cols-5 xl:grid-cols-3 md:items-start">
				<Form />
				<Summary submit={submitHandler} />
			</div>
			{errorMessage && (
				<>
					<Background className="bg-black fixed z-[70] inset-0 opacity-75" />
					<div onClick={errorMessageHandler} className="fixed gridc z-[80] inset-0 ">
						<p className="p-6 md:p-20 bg-white text-orange rounded-lg">{errorMessage}</p>
					</div>
				</>
			)}
		</section>
	);
};
export default SectionCheckout;
