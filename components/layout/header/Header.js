import Image from "next/image";
import logo from "/public/assets/shared/logo.svg";
import cart from "/public/assets/shared/icon-cart.svg";
import Hamburger from "../../UI/icon/Hamburger";

const Header = (props) => {
	return (
		<header className="bg-black h-24 text-white border-b border-light-gray">
			<div className="flex justify-between items-center p-4 ">
				<Hamburger />
				<Image objectFit="contain" src={logo} width="140" height="40" />
				<Image objectFit="contain" src={cart} width="26" height="26" />
			</div>
		</header>
	);
};
export default Header;
