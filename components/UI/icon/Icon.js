import Image from "next/image";

const Icon = (props) => {
	return (
		<span className={`icon relative ${props.css ?? ""}`} onClick={props.onClick}>
			<Image objectFit="contain" src={props.src} layout="fill" alt={props.alt ?? ""} />
		</span>
	);
};
export default Icon;
