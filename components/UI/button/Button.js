const Button = (props) => {
	const style =
		props.color === "black"
			? "bg-black text-white hover:bg-s-black"
			: props.color === "transparent"
			? "text-black border-black border-2 hover:bg-black hover:text-white"
			: "bg-orange hover:bg-s-orange text-white";

	return (
		<button
			disabled={props.disabled ?? false}
			type={props.type ?? ""}
			onClick={props.onClick}
			className={`${
				props.className ?? "w-fit"
			} ${style} active:animate-ping text-[14px] leading-[30px] tracking-[3px] uppercase font-bold py-2 px-6 lg:py-4 lg:px-10`}
		>
			{props.children}
		</button>
	);
};
export default Button;
