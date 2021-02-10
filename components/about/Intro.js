import Standout from "./Standout";

function Intro() {
	return (
		<div className="flex flex-col py-8 px-32">
			<div className="flex items-center mt-16 mb-8 bg-white bg-opacity-10 rounded-3xl p-6 w-max">
				<img className="w-20 mr-6" src="/assets/me-flip.png" />
				<h1 className="text-4xl font-serif italic text-white">
					So, who is this nerd?
				</h1>
			</div>
			<div className="flex items-center mb-32">
				<div
					className=" text-6xl text-half-white py-12 font-apple font-extralight italic"
					style={{ lineHeight: 1.2 }}
				>
					An
					<Standout
						text="engineering apprentice"
						colour="#fdcf03"
						emoji="⚡️"
					/>
					at
					<Standout text="BBC" colour="#ffffff" emoji="🎥" />
					and self-taught
					<Standout text="developer" colour="#28d3d9" emoji="📱" />
					currently chillin' in
					<Standout text="London." colour="#dd5b6b" emoji="🇬🇧" />
					Interested in tech that
					<Standout text="sustainably" colour="#6db223" emoji="🌱" />
					enriches and simplifies life. And
					<Standout text="pints." colour="#ed810d" emoji="🍻" />
				</div>
			</div>
		</div>
	);
}

export default Intro;
