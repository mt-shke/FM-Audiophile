const Button = (props) => {
	let style = "bg-orange hover:bg-s-orange text-white";

	if (props.color === "black") {
		style = "bg-black text-white";
	}
	if (props.color === "transparent") {
		style = "text-black border-black border-2 ";
	}

	return (
		<button
			className={`${style} text-[14px] leading-[30px] tracking-[3px] uppercase font-bold py-2 px-6 w-fit`}
		>
			{props.children}
		</button>
	);
};
export default Button;
