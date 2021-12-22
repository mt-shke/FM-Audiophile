const Button = (props) => {
	const bgColor = props.bgColor ? props.bgColor : "";
	const textColor = props.textColor ? props.textColor : "";
	const hoverBg = props.hoverBg ? `hover:${props.hoverBg}` : "";
	const hoverText = props.hoverText ? `hover:${props.hoverText}` : "";

	return (
		<button
			className={`${bgColor} ${textColor} text-[12px] leading-[28px] tracking-[3px] uppercase subtitle font-bold py-2 px-6 w-fit mx-auto  ${hoverText} ${hoverBg}`}
		>
			{props.children}
		</button>
	);
};
export default Button;
