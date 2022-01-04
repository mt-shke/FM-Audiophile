import { useRouter } from "next/router";

const ButtonGoBack = (props) => {
	const router = useRouter();

	return (
		<span
			onClick={router.back}
			className="absolute top-4 font-bold text-para-gray sm:top-6 md:top-12 hover:cursor-pointer hover:text-orange"
		>
			Go Back
		</span>
	);
};
export default ButtonGoBack;
