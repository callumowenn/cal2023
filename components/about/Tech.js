import TechAreas from "./TechAreas";

function Tech() {
	return (
		<div className="flex min-h-screen">
			<div className="w-3/12 flex bg-pink-300 overflow-hidden sm:hidden">
				<div
					className="flex flex-grow opacity-50"
					style={{
						background: "url(/assets/waihou.png) left",
						backgroundSize: "auto 100%",
					}}
				></div>
			</div>
			<div className="pt-32 px-16 flex flex-grow flex-col justify-between sm:px-4">
				<h1 className="text-6xl italic mb-32 sm:text-3xl">
					A few areas of tech I'm really
					<br />
					<span className="font-sans font-black text-pink-300 not-italic">
						into right now:
					</span>
				</h1>
				<TechAreas />
			</div>
		</div>
	);
}

export default Tech;
