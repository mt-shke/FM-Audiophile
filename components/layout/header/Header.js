import Logo from "../../UI/icon/Logo";
import cartIcon from "/public/assets/shared/desktop/icon-cart.svg";
import hamburgerIcon from "/public/assets/shared/desktop/icon-hamburger.svg";
import NavBar from "../NavBar";
import Icon from "../../UI/icon/Icon";
import { useState } from "react";
import SectionCategoriesMenu from "../../home/SectionCategoriesMenu";
import Background from "../../UI/background/Background";
import CartModal from "../../cart/CartModal";

const Header = (props) => {
	const [modal, setModal] = useState(false);
	const [menu, setMenu] = useState(false);
	const [cart, setCart] = useState(false);

	const menuHandler = () => {
		setModal((o) => !o);
		setMenu((o) => !o);
	};

	const cartHandler = () => {
		setModal((o) => !o);
		setCart((o) => !o);
	};

	const modalHandler = () => {
		if (menu) setMenu(false);
		if (cart) setCart(false);
		setModal(false);
	};

	return (
		<>
			<header className="ctn h-16 w-full relative z-50 flex justify-between items-center px-6 sm:h-28">
				<Icon onClick={menuHandler} css="sm:hidden" src={hamburgerIcon} alt="hamburger icon" />
				<Logo />
				<div className="hidden sm:gridc">
					<NavBar />
				</div>
				<Icon onClick={cartHandler} src={cartIcon} alt="cart icon" />
				{cart && <CartModal />}
			</header>
			<hr className="full-w max-w-[1392px] mx-auto border-t border-para-gray" />
			{menu && (
				<div className="relative z-40 w-full" onClick={menuHandler}>
					<SectionCategoriesMenu css="absolute pt-28 pb-8 bg-white text-black border-b rounded-b-lg" />
				</div>
			)}

			{(menu || cart) && (
				<Background onClick={modalHandler} css="fixed z-[39] inset-0 bg-black opacity-70 " />
			)}
		</>
	);
};
export default Header;
