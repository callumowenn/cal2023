import Block from "./Block";
import Image from "next/image";

function Header() {
	return (
		<Block>
			<div className="flex items-center sm:flex-col sm:items-start">
				<div className="flex mr-20 sm:mr-0 sm:w-28 sm:mb-8">
					<Image
						width={338}
						height={338}
						priority
						layout="intrinsic"
						src="/assets/me-flip.png"
						alt="me"
					/>
				</div>
				<div className="flex flex-col w-392px sm:w-auto">
					<p className=" sub-intro font-apple font-light opacity-50 text-2xl sm:text-xl">
						Hi, i'm
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
