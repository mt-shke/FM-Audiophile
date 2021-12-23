import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import facebook from "/public/assets/shared/desktop/icon-facebook.svg";
import twitter from "/public/assets/shared/desktop/icon-twitter.svg";
import instagram from "/public/assets/shared/desktop/icon-instagram.svg";
import NavBar from "../NavBar";

const Footer = (props) => {
	return (
		<footer className="bg-black text-white flex-c6 px-6 py-10 text-center">
			<div className="flex-c6 items-center ">
				<div>
					<Image objectFit="contain" src={logo} width="140" height="40" />
				</div>
				<NavBar />
			</div>
			<div className="flex-c6 text-m-gray">
				<div className="flex-c6">
					<p>
						Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
						and sound specialists who are devoted to helping you get the most out of personal audio. Come and
						visit our demo facility - we’re open 7 days a week.
					</p>
					<span className="my-4 font-bold">Copyright 2021. All Rights Reserved</span>
				</div>
				<div className="flex gap-4 mx-auto">
					<span>
						<Image objectFit="contain" src={facebook} width="26" height="26" />
					</span>
					<span>
						<Image objectFit="contain" src={twitter} width="26" height="26" />
					</span>
					<span>
						<Image objectFit="contain" src={instagram} width="26" height="26" />
					</span>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
