import facebook from "/public/assets/shared/desktop/icon-facebook.svg";
import twitter from "/public/assets/shared/desktop/icon-twitter.svg";
import instagram from "/public/assets/shared/desktop/icon-instagram.svg";
import NavBar from "../NavBar";
import Logo from "../../UI/icon/Logo";
import Icon from "../../UI/icon/Icon";

const Footer = (props) => {
	return (
		<footer className="ctn w-full flex-c6 px-6 py-10 text-center">
			<section className="flex-c6 items-center">
				<Logo />
				<NavBar />
			</section>
			<section className="flex-c6 text-m-gray">
				<article className="flex-c6">
					<p>
						{`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
						and sound specialists who are devoted to helping you get the most out of personal audio. Come and
						visit our demo facility - we’re open 7 days a week.`}
					</p>
					<span className="my-4 font-bold">Copyright 2021. All Rights Reserved</span>
				</article>
				<aside className="flex gap-4 mx-auto">
					<Icon src={facebook} alt="facebook icon" />
					<Icon src={twitter} alt="twitter icon" />
					<Icon src={instagram} alt="instagram icon" />
				</aside>
			</section>
		</footer>
	);
};
export default Footer;
