import { useMenu } from "lib/menu";
import Link from "next/link";
import Socials from "./Socials";

function Nav() {
	const { open, toggleMenu } = useMenu();
	return (
		<nav className="w-nav border-r border-white border-opacity-50 z-50 flex flex-shrink-0 flex-grow-0 flex-col justify-between pt-5 pb-7 px-3 sticky top-0 h-screen sm:flex-row sm:p-2 sm:h-16 sm:border-0 sm:w-screen sm:items-center">
			<div className="flex flex-col sm:flex-row">
				<Link href="/">
					<a
						className="h-auto rounded-full mb-3 hover:bg-white hover:bg-opacity-10 sm:w-10 sm:h-10 sm:m-0"
						title="Go Home"
					>
						<img
							className="flex rounded-full transform rotate-180"
							src="/assets/me-transparent-sq-soft.png"
							alt="home"
						/>
					</a>
				</Link>
				<button
					className="h-auto rounded-full overflow-hidden mb-3 hover:bg-white hover:bg-opacity-10 sm:w-10 sm:h-10 sm:m-0"
					title="Menu"
					onClick={() => toggleMenu()}
				>
					<img
						className="flex rounded-full transform rotate-180"
						src={`${open ? "/assets/x.png" : "/assets/menu.png"}`}
						alt="home"
					/>
				</button>
			</div>
			<Socials />
		</nav>
	);
}

export default Nav;
