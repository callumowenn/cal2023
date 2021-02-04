import Link from "next/link";
import Socials from "./Socials";

function Nav() {
	return (
		<nav
			style={{ width: "120px" }}
			className=" bg-white flex flex-col justify-between pt-5 pb-7 px-3 sticky top-0 h-screen"
		>
			<div>
				<Link href="/">
					<a className="flex overflow-hidden rounded-full border-gray-200 border border-solid mb-3 hover:shadow-md">
						<img src="./assets/me-flip.png" alt="home" />
					</a>
				</Link>
				<a
					className="flex overflow-hidden rounded-full border-gray-200 border border-solid mb-3 hover:shadow-md"
					href="/"
				>
					<img
						className=" opacity-0"
						src="./assets/me.png"
						alt="home"
					/>
				</a>
			</div>
			<Socials />
		</nav>
	);
}

export default Nav;
