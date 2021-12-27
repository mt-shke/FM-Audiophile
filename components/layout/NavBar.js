import Link from "next/link";

const NavBar = (props) => {
	return (
		<nav>
			<ul className="flex flex-col uppercase gap-2 sm:gap-4 sm:flex-row sm:justify-end tracking-[1.4px]">
				<li>
					<Link href="#">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Headphones</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Speakers</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Earphones</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
