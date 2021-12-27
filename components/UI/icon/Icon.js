import Image from "next/image";

const Icon = (props) => {
	return (
		<span className={`icon ${props.css ?? ""}`}>
			<Image objectFit="contain" src={props.src} layout="fill" alt={props.alt ?? ""} />
		</span>
	);
};
export default Icon;
