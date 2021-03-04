import Image from "next/image";
import FooterApp from "./FooterApp";

function FooterApps() {
	let date = new Date();
	return (
		<>
			<FooterApp
				slug="bbc"
				img="/assets/bbc.png"
				text="Life in the BBC"
				className="bg-gradient-to-tr from-transparent to-purple-400"
			/>
			<FooterApp
				slug="cnn"
				img="/assets/cnn-white.png"
				text="Life at CNN"
				className="bg-gradient-to-tr from-red-600 to-red-400"
			/>
			<FooterApp
				slug="projects"
				text="Projects"
				className="bg-gradient-to-tr from-transparent to-blue-400"
				emoji="🖥"
			/>
			<FooterApp
				slug="about"
				text="About Me"
				className="bg-gradient-to-tr from-transparent to-gray-300"
				emoji="👋🏼"
			/>

			{/* <div
				className={` ${
					router.pathname == "/cnn"
						? "bg-standout-red bg-opacity-20"
						: "hover:bg-standout-red hover:bg-opacity-10"
				} flex transition items-center border-r border-b border-half-white justify-center cnn group  tab-port:border-r-0`}
			>
				<div className="flex flex-col p-8 tab-port:p-4 items-center">
					<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
						🎥
					</span>
					<p className="text-half-white group-hover:text-white group-hover:underline">
						CNN
					</p>
				</div>
			</div> */}

			{/* <div
				className={` ${
					router.pathname == "/projects"
						? "bg-standout-orange bg-opacity-20"
						: "hover:bg-standout-orange hover:bg-opacity-10"
				} flex transition items-center border-r border-b border-half-white justify-center projects group `}
			>
				<div className="flex flex-col p-8 tab-port:p-4 items-center">
					<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
						🖥
					</span>
					<p className="text-half-white group-hover:text-white group-hover:underline">
						Projects
					</p>
				</div>
			</div> */}

			{/* <div
				className={` ${
					router.pathname == "/about"
						? "bg-standout-blue bg-opacity-20"
						: "hover:bg-standout-blue hover:bg-opacity-10"
				} flex transition items-center justify-center border-b border-half-white about group `}
			>
				<div className="flex flex-col p-8 tab-port:p-4 items-center">
					<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
						👋🏼
					</span>
					<p className="text-half-white group-hover:text-white group-hover:underline">
						About Me
					</p>
				</div>
			</div> */}

			<div className="flex items-center justify-center cred tab-port:hidden">
				<div>
					<img
						className="mb-4 w-28 tab-port:w-20"
						src="/assets/me-flip.png"
						loading="lazy"
						alt="Me"
					/>
					<p className="text-xl italic tab-port:text-lg">
						<span className=" text-pink-600 font-sans font-black">
							Designed and developed <br />
						</span>{" "}
						by Callum Owen{" "}
						<span className="opacity-50">
							&copy;{date.getUTCFullYear()}
						</span>
					</p>
				</div>
			</div>
			<FooterApp
				slug="contact"
				text="Contact"
				className="bg-gradient-to-tr from-transparent to-pink-400"
				emoji="📲"
			/>

			{/* <div
				className={` ${
					router.pathname == "/contact"
						? "bg-standout-green bg-opacity-20"
						: "hover:bg-standout-green hover:bg-opacity-10"
				} flex transition items-center border-half-white tab-port:border-r justify-center contact group `}
			>
				<div className="flex flex-col p-8 tab-port:p-4 items-center">
					<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
						📲
					</span>
					<p className="text-half-white group-hover:text-white group-hover:underline">
						Contact
					</p>
				</div>
			</div> */}

			<div className="flex items-center justify-center  mob">
				<div className="not-tab-port:hidden mx-4 w-max">
					<Image
						width={50}
						height={50}
						src="/assets/me-flip.png"
						loading="lazy"
						alt="me"
					/>
					<p className="italic tab-port:text-lg sm:text-sm">
						<span className=" text-standout-green font-sans font-black">
							Designed and developed <br />
						</span>{" "}
						by Callum Owen{" "}
						<span className="opacity-50">
							&copy;{date.getUTCFullYear()}
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

export default FooterApps;
