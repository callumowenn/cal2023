import { useMenu } from "@lib/menu";
import Link from "next/link";

function Footer() {
	let date = new Date();
	const menu = useMenu();
	return (
		<div className="h-screen flex sm:flex-col sm:h-mobile-main">
			<div className="footer-grid sm:h-mobile-main grid grid-cols-4 grid-rows-2 flex-grow text-5xl italic sm:grid-cols-2 sm:grid-rows-3 sm:text-3xl">
				<Link href="/bbc">
					<a className=" flex items-center h-auto border-r border-b border-half-white justify-center bbc group hover:bg-black hover:bg-opacity-5">
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
					<a className=" flex items-center border-r border-b border-half-white justify-center cnn group hover:bg-black hover:bg-opacity-5 sm:border-r-0">
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
					<a className=" flex items-center border-r border-b border-half-white justify-center projects group hover:bg-black hover:bg-opacity-5">
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
					<a className=" flex items-center justify-center border-b border-half-white about group hover:bg-black hover:bg-opacity-5">
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
					<a className=" flex items-center border-r border-half-white justify-center contact group hover:bg-black hover:bg-opacity-5">
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
						className="object-cover flex-grow h-full opacity-50"
						src="/assets/lost.gif"
					/>
				</div>
			</div>
			{/* <div className="grid grid-cols-2  flex-1 text-4xl italic opacity-50 border-white sm:text-2xl sm:border-t">
				<div className="flex-1 flex-grow flex">
					<Link href="bbc">
						<a className="flex flex-grow w-full flex-1 ">
							<div className="flex items-center">BBC</div>
						</a>
					</Link>
					<Link href="cnn">
						<a className="flex flex-grow flex-1 w-max">
							<div className="flex items-center w-auto">CNN</div>
						</a>
					</Link>
				</div>
				<div className="flex-1 flex flex-col justify-center">
					<img
						className="mb-8 w-28 sm:w-20 sm:mb-4"
						src="/assets/me-flip.png"
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
			<div
				className="grid grid-cols-2  flex-1 text-4xl italic opacity-50 border-white sm:text-2xl sm:border-t"
				style={{ gridAutoRows: "1fr" }}
			>
				<Link href="/about">
					<a className="flex items-center justify-center border-r border-b ">
						<div>
							<p>About me</p>
						</div>
					</a>
				</Link>
				<Link href="/projects">
					<a className="flex items-center justify-center border-b ">
						<div>
							<p>Projects</p>
						</div>
					</a>
				</Link>
				<Link href="/contact">
					<a className="flex items-center justify-center border-r ">
						<div>
							<p>Contact</p>
						</div>
					</a>
				</Link>
				<Link href="/">
					<a
						className="flex items-center"
						style={{ background: "#313546" }}
					>
						<img src="/assets/lost.gif" />
					</a>
				</Link>
			</div> */}
		</div>
	);
}

export default Footer;
