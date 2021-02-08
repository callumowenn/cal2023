import Link from "next/link";

function Footer() {
	let date = new Date();
	return (
		<div className="h-screen flex">
			<div className="flex flex-1 items-center justify-center border-r border-white border-opacity-50">
				<div>
					<img className="mb-8" src="/assets/me-flip.png" alt="Me" />
					<p className="text-xl italic">
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
				className="grid grid-cols-2  flex-1 text-4xl italic opacity-50 border-white"
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
			</div>
		</div>
	);
}

export default Footer;
