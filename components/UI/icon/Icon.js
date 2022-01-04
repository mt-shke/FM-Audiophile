import Image from "next/image";

const Icon = (props) => {
	return (
		<span className={`icon relative ${props.className ?? ""}`} onClick={props.onClick}>
			{props.children}
			<Image objectFit="contain" src={props.src} layout="fill" alt={props.alt ?? ""} />
		</span>
	);
};
export default Icon;
