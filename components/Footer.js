import { useMenu } from "@lib/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
	const router = useRouter();
	let date = new Date();
	return (
		<div className="h-screen flex sm:flex-col sm:h-mobile-main">
			<div className="footer-grid sm:h-mobile-main grid grid-cols-4 grid-rows-2 flex-grow text-5xl italic sm:grid-cols-2 sm:grid-rows-3 sm:text-3xl">
				<Link href="/bbc">
					<a
						className={` ${
							router.pathname == "/bbc"
								? " bg-standout-purple bg-opacity-20"
								: "hover:bg-standout-purple hover:bg-opacity-10"
						} flex transition items-center h-auto border-r border-b border-half-white justify-center bbc group `}
					>
						<div className="flex flex-col p-8 sm:p-4 items-center">
							<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
								🎬
							</span>
							<p className="text-half-white group-hover:text-white group-hover:underline">
								BBC
							</p>
						</div>
					</a>
				</Link>
				<Link href="/cnn">
					<a
						className={` ${
							router.pathname == "/cnn"
								? "bg-standout-red bg-opacity-20"
								: "hover:bg-standout-red hover:bg-opacity-10"
						} flex transition items-center border-r border-b border-half-white justify-center cnn group  sm:border-r-0`}
					>
						<div className="flex flex-col p-8 sm:p-4 items-center">
							<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
								🎥
							</span>
							<p className="text-half-white group-hover:text-white group-hover:underline">
								CNN
							</p>
						</div>
					</a>
				</Link>
				<Link href="/projects">
					<a
						className={` ${
							router.pathname == "/projects"
								? "bg-standout-orange bg-opacity-20"
								: "hover:bg-standout-orange hover:bg-opacity-10"
						} flex transition items-center border-r border-b border-half-white justify-center projects group `}
					>
						<div className="flex flex-col p-8 sm:p-4 items-center">
							<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
								🖥
							</span>
							<p className="text-half-white group-hover:text-white group-hover:underline">
								Projects
							</p>
						</div>
					</a>
				</Link>
				<Link href="/about">
					<a
						className={` ${
							router.pathname == "/about"
								? "bg-standout-blue bg-opacity-20"
								: "hover:bg-standout-blue hover:bg-opacity-10"
						} flex transition items-center justify-center border-b border-half-white about group `}
					>
						<div className="flex flex-col p-8 sm:p-4 items-center">
							<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
								👋🏼
							</span>
							<p className="text-half-white group-hover:text-white group-hover:underline">
								About Me
							</p>
						</div>
					</a>
				</Link>
				<div className="flex items-center border-r border-half-white justify-center cred sm:hidden">
					<div>
						<img
							className="mb-4 w-28 sm:w-20"
							src="/assets/me-flip.png"
							loading="lazy"
							alt="Me"
						/>
						<p className="text-xl italic sm:text-lg">
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
				<Link href="/contact">
					<a
						className={` ${
							router.pathname == "/contact"
								? "bg-standout-green bg-opacity-20"
								: "hover:bg-standout-green hover:bg-opacity-10"
						} flex transition items-center border-r border-half-white justify-center contact group `}
					>
						<div className="flex flex-col p-8 sm:p-4 items-center">
							<span className="not-italic text-7xl sm:text-6xl mb-4 w-min text-white">
								📲
							</span>
							<p className="text-half-white group-hover:text-white group-hover:underline">
								Contact
							</p>
						</div>
					</a>
				</Link>
				<div className=" flex items-center justify-center lost">
					<img
						className="object-cover flex-grow h-full opacity-20 sm:hidden"
						src="/assets/lost.gif"
						loading="lazy"
					/>
					<div className="not-sm:hidden mx-4 w-max">
						<Image
							width={50}
							height={50}
							src="/assets/me-flip.png"
							loading="lazy"
							alt="me"
						/>
						<p className="italic sm:text-sm">
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
			</div>
		</div>
	);
}

export default Footer;
