import Projects from "./Projects";

function Scrolling() {
	return (
		<div className="mt-64 sm:w-screen sm:overflow-hidden">
			<div className="mx-32 flex flex-grow flex-col relative sm:mx-4">
				<p
					className="text-9xl font-bold italic transform translate-y-1/2 z-0 sm:translate-y-1/4 sm:text-7xl"
					style={{ lineHeight: 0.7 }}
				>
					Still scrolling?
				</p>
				<p
					className="outline-text text-9xl font-bold italic transform translate-y-1/2 absolute z-20 sm:translate-y-1/4 sm:text-7xl"
					style={{ lineHeight: 0.7 }}
				>
					Still scrolling?
				</p>
				<div className="h-screen mx-32 tab-land:mx-16 bg-yellow-400 flex-grow z-10 grid grid-cols-2 tab-port:mx-0 tab-port:h-80vh sm:w-full sm:mx-8 sm:h-96 sm:grid-cols-1 sm:p-4">
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
