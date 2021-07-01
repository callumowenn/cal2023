import Block from "./Block";
import Image from "next/image";

function Header() {
	return (
		<Block>
			<div className=" my-8 flex flex-col items-start">
				<div className="flex mb-4 tab-port:w-52 sm:w-28">
					<Image
						width={120}
						height={120}
						priority
						layout="intrinsic"
						src="/assets/me-flip.png"
						alt="me"
					/>
				</div>
				<div className="flex flex-col w-392px sm:w-auto">
					<p className=" sub-intro font-apple font-light text-2xl sm:text-xl">
						👋🏼 <span className="opacity-50 ">hello, i'm</span>
					</p>
					<h1 className="main-intro font-apple font-black italic text-6xl sm:text-5xl">
						Callum Owen
					</h1>
				</div>
			</div>
		</Block>
	);
}

export default Header;
