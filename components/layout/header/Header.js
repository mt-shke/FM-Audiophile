import Logo from "../../UI/icon/Logo";
import cart from "/public/assets/shared/desktop/icon-cart.svg";
import hamburger from "/public/assets/shared/desktop/icon-hamburger.svg";
import NavBar from "../NavBar";
import Icon from "../../UI/icon/Icon";
import { useState } from "react";
import SectionCategoriesMenu from "../../home/SectionCategoriesMenu";
import Background from "../../UI/background/Background";

const Header = (props) => {
	const [menu, setMenu] = useState(false);

	const menuHandler = () => {
		setMenu((o) => !o);
	};

	return (
		<>
			<header className="ctn h-16 w-full relative z-50 flex justify-between items-center px-6 sm:h-28">
				<Icon onClick={menuHandler} css="sm:hidden" src={hamburger} alt="hamburger icon" />
				<Logo />
				<div className="hidden sm:gridc">
					<NavBar />
				</div>
				<Icon src={cart} alt="cart icon" />
			</header>
			<hr className="full-w max-w-[1392px] mx-auto border-t border-para-gray" />
			{menu && (
				<div className="absolute z-40 w-full" onClick={menuHandler}>
					<SectionCategoriesMenu css="absolute z-50 border-b bg-white text-black py-6 rounded-b-lg" />
					<Background css="fixed z-40 inset-0 bg-black opacity-70 " />
				</div>
			)}
		</>
	);
};
export default Header;
