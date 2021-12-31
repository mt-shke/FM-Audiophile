const Button = (props) => {
	let style = "bg-orange hover:bg-s-orange text-white";

	if (props.color === "black") {
		style = "bg-black text-white hover:bg-b-gray";
	}
	if (props.color === "transparent") {
		style = "text-black border-black border-2 hover:bg-black hover:text-white";
	}

	return (
		<button
			onClick={props.onClick}
			className={`${
				props.css ?? "w-fit"
			} ${style} text-[14px] leading-[30px] tracking-[3px] uppercase font-bold py-2 px-6 lg:py-4 lg:px-10`}
		>
			{props.children}
		</button>
	);
};
export default Button;
