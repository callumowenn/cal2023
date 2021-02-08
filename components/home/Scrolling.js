import Projects from "./Projects";

function Scrolling() {
	return (
		<div className="mt-64 sm:overflow-hidden">
			<div className="mx-32 flex flex-grow flex-col sm:mx-16">
				<p className="text-9xl font-bold italic transform translate-y-1/2 z-0 sm:text-6xl">
					Still scrolling?
				</p>
				<p
					className="text-9xl font-bold italic transform translate-y-1/2 absolute z-20 sm:text-6xl"
					style={{
						WebkitTextStroke: "2px white",
						WebkitTextFillColor: "transparent",
					}}
				>
					Still scrolling?
				</p>
				<div className="h-screen mx-32 bg-yellow-400 flex-grow z-10 grid grid-cols-2 sm:w-full sm:grid-cols-1 sm:p-4">
					<div></div>
					<div></div>
					<div></div>
					<div className="pr-16 text-3xl font-bold italic opacity-20 sm:text-xl">
						* check out some of my projects
					</div>
				</div>
			</div>
			<Projects />
		</div>
	);
}

export default Scrolling;
