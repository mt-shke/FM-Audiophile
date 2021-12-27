import logo from "/public/assets/shared/desktop/logo.svg";
import Image from "next/image";

const Logo = (props) => {
	return (
		<span className={`icon-logo ${props.css ? props.css : ""}`}>
			<Image objectFit="contain" src={logo} layout="fill" />
		</span>
	);
};
export default Logo;
