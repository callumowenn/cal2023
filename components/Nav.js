import Link from "next/link";
import Socials from "./Socials";

function Nav() {
	return (
		<nav
			style={{ width: "100px" }}
			className=" bg-white flex flex-shrink-0 flex-grow-0 flex-col justify-between pt-5 pb-7 px-3 sticky top-0 h-screen sm:hidden"
		>
			<div className="flex flex-col">
				<Link href="/">
					<a
						className="h-auto rounded-full mb-3 hover:shadow-md"
						title="Go Home"
					>
						<img
							className="flex rounded-full"
							src="./assets/me-flip.png"
							alt="home"
						/>
					</a>
				</Link>
			</div>
			<Socials />
		</nav>
	);
}

export default Nav;
