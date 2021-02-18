import { useMenu } from "lib/menu";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

function Nav() {
	const { open, toggleMenu } = useMenu();
	return (
		<nav className="w-nav border-r border-white border-opacity-50 z-50 flex flex-shrink-0 flex-grow-0 flex-col justify-between pt-5 pb-7 px-3 sticky top-0 h-screen sm:flex-row sm:p-2 sm:pt-pwa sm:h-pwa sm:border-0 sm:border-b sm:w-screen sm:items-center">
			<div className="flex flex-col sm:flex-row">
				<Link href="/">
					<a
						className="h-auto rounded-full mb-3 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 sm:w-10 sm:h-10 sm:m-0"
						style={{ outline: "none" }}
						title="Go Home"
					>
						<div className="flex rounded-full transform rotate-180">
							<Image
								width={55}
								height={55}
								priority
								src="/assets/me-transparent-sq-soft.png"
								alt="home"
							/>
						</div>
					</a>
				</Link>
				<button
					className="h-auto rounded-full overflow-hidden mb-3 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 sm:w-10 sm:h-10 sm:m-0 sm:ml-2"
					style={{ outline: "none" }}
					title="Menu"
					onClick={() => toggleMenu()}
				>
					<div className="flex rounded-full transform rotate-180">
						<Image
							width={55}
							height={55}
							priority
							src={`${
								open ? "/assets/x.png" : "/assets/menu.png"
							}`}
							alt="menu"
						/>
					</div>
				</button>
			</div>
			<Socials />
			<div className="hidden sm:flex ">
				<Link href="/contact">
					<a>
						<p className="font-sans px-3 font-bold text-half-white">
							Contact
						</p>
					</a>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
