import Link from "next/link";

const NavBar = (props) => {
	return (
		<nav className={props.className ?? ""}>
			<ul className="flex flex-col gap-2 uppercase tracking-[1.4px] sm:flex-row sm:justify-end sm:text-base sm:gap-4 md:gap:6 md:text-lg lg:gap-12">
				<li className="hover:text-orange">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="/headphones">
						<a>Headphones</a>
					</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="/speakers">
						<a>Speakers</a>
					</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="/earphones">
						<a>Earphones</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
