import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import cart from "/public/assets/shared/desktop/icon-cart.svg";
import hamburger from "/public/assets/shared/desktop/icon-hamburger.svg";
import NavBar from "../NavBar";

const Header = (props) => {
	return (
		<header className="h-16">
			<div className="flex justify-between w-full items-center px-6 sm:px-8 md:container ">
				<span className="w-[16px] h-[16px] relative sm:hidden">
					<Image className="sm:hidden" objectFit="contain" src={hamburger} width="24" height="24" />
				</span>
				<Image objectFit="contain" src={logo} width="90" height="16" />
				<div className="hidden sm:gridc">
					<NavBar />
				</div>
				<span className="w-[16px] h-[16px] relative">
					<Image objectFit="contain" src={cart} layout="fill" />
				</span>
			</div>
		</header>
	);
};
export default Header;
