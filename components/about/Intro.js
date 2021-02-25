import Image from "next/image";
import Standout from "./Standout";

function Intro() {
	return (
		<div className="flex max-w-1500px self-center flex-col py-8 px-32 tab-port:px-16 sm:px-4">
			<div className="mt-16 flex items-center justify-between">
				<div className="flex items-center  bg-white bg-opacity-10 rounded-full p-6 w-max sm:p-5">
					<div className="w-20 flex items-center mr-4 sm:w-12">
						<Image
							width={70}
							height={70}
							priority
							src="/assets/me-flip.png"
						/>
					</div>
					<h1 className="text-4xl font-apple font-extralight italic text-white sm:text-2xl">
						Who is this nerd?
					</h1>
				</div>
			</div>
			<div className="flex items-center mb-16">
				<p
					className=" text-6xl text-half-white py-12 font-apple font-extralight italic tab-port:text-5xl sm:text-2xl"
					style={{ lineHeight: 1.2 }}
				>
					An{" "}
					<Standout
						text="engineering apprentice"
						colour="#fdcf03"
						emoji="⚡️"
					/>{" "}
					at <Standout text="BBC" colour="#ffffff" emoji="🎥" /> and
					self-taught{" "}
					<Standout text="developer" colour="#28d3d9" emoji="📱" />{" "}
					currently chillin' in{" "}
					<Standout text="London." colour="#dd5b6b" emoji="🇬🇧" />{" "}
					Interested in tech that{" "}
					<Standout text="sustainably" colour="#6db223" emoji="🌱" />{" "}
					enriches and simplifies life. And{" "}
					<Standout text="pints." colour="#ed810d" emoji="🍻" />{" "}
				</p>
			</div>
		</div>
	);
}

export default Intro;
