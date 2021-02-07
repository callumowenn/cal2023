import Link from "next/link";
import Socials from "./Socials";

function Nav() {
	return (
		<nav className="w-nav border-r border-white border-opacity-50 z-50 flex flex-shrink-0 flex-grow-0 flex-col justify-between pt-5 pb-7 px-3 sticky top-0 h-screen sm:flex-row sm:p-2 sm:h-auto sm:border-0 sm:w-screen">
			<div className="flex">
				<Link href="/">
					<a
						className="h-auto rounded-full mb-3 hover:bg-white hover:bg-opacity-10 sm:w-10 sm:h-10 sm:m-0"
						title="Go Home"
					>
						<img
							className="flex rounded-full transform rotate-180"
							src="./assets/me-transparent-sq-soft.png"
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
