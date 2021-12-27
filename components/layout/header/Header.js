import Logo from "../../UI/icon/Logo";
import cart from "/public/assets/shared/desktop/icon-cart.svg";
import hamburger from "/public/assets/shared/desktop/icon-hamburger.svg";
import NavBar from "../NavBar";
import Icon from "../../UI/icon/Icon";

const Header = (props) => {
	return (
		<>
			<header className="h-16 flex justify-between w-full items-center px-6 ctn">
				<Icon css="sm:hidden" src={hamburger} alt="hamburger icon" />
				<Logo />
				<div className="hidden sm:gridc">
					<NavBar />
				</div>
				<Icon src={cart} alt="cart icon" />
			</header>
			<hr className="max-w-[1392px] full-w mx-auto border-t border-soft-gray" />
		</>
	);
};
export default Header;
