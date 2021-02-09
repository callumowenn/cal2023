import MacWindow from "./MacWindow";

function Mac() {
	return (
		<div className="flex flex-grow flex-col relative">
			<div className="flex flex-grow bg-mac h-screen bg-cover sticky top-0 sm:bg-right z-10"></div>
			<div id="mac" className="flex flex-col z-20 flex-grow px-24">
				<MacWindow
					pic="./assets/showcase/dam.jpeg"
					alt="Biking around Amsterdam"
				/>
				<MacWindow
					pic="./assets/showcase/snowdon.JPG"
					alt="Walking up Snowdon"
				/>
				<MacWindow />
				<MacWindow
					pic="./assets/showcase/stage.JPG"
					alt="Production training with BBC"
				/>
				<MacWindow
					pic="./assets/showcase/mud.JPG"
					alt="Mountain biking with Dad"
				/>
				<MacWindow
					pic="./assets/showcase/polaroid.jpg"
					alt="Drinks with pals"
				/>
			</div>
			<div className="flex flex-grow h-96"></div>
		</div>
	);
}

export default Mac;
