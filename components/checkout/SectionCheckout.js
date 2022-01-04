import ButtonGoBack from "../UI/button/ButtonGoBack";
import Summary from "./Summary";
import Form from "./Form";

const SectionCheckout = (props) => {
	const submitHandler = (e) => {
		e.preventDefault();
		// const result = Array.from(e.target.closest("form"))
		// 	.filter((elem) => elem.tagName === "INPUT")
		// 	.map((elem) => ({
		// 		[elem.id]: elem.value,
		// 	}));
		const result = Array.from(e.target.closest("form"))
			.filter((elem) => elem.tagName === "INPUT")
			.map((elem) => [elem.id, elem.value]);

		const arr = { 1: "one", b: "cdef", fruit: "apple", plant: "sunflower" };
		console.log(arr);
		console.log("entries", Object.entries(arr));
		console.log("values", Object.values(arr));
		console.log(Object.fromEntries(Object.entries(arr)));

		const emptyField = Object.values(result)
			.map((elem) => elem[1])
			.some((elem) => elem === "");

		if (emptyField) {
			console.log("A field is missing, return error message & stop access to cardCheckout");
			return;
		}

		const data = Object.fromEntries(result);

		console.log("All field ok: routerPush cardCheckout then send command to db");
	};

	return (
		<section className="flex-c6 items-start py-16 bg-gray sm:py-20 md:gap-32 md:py-32">
			<div className="w-full flex-c6 rounded-md bg-grey md:p-0">
				<ButtonGoBack />
				<form
					onSubmit={submitHandler}
					className="w-full flex flex-col gap-4 bg-gray md:grid md:grid-cols-5 xl:grid-cols-3 md:items-start"
				>
					<Form />
					<Summary />
				</form>
			</div>
		</section>
	);
};
export default SectionCheckout;
