import MacWindow from "./MacWindow";

function Mac() {
	return (
		<div className="flex flex-grow flex-col relative">
			<div className="flex flex-grow bg-mac h-screen bg-cover sticky top-0 sm:bg-right z-10"></div>
			<div id="mac" className="flex flex-col z-40 flex-grow px-24">
				<MacWindow />
				<MacWindow
					pic="/assets/showcase/cam.jpg"
					aspect="landscape"
					alt="Studio work for BBC 🎥"
				/>
				<MacWindow
					pic="/assets/showcase/dam.jpeg"
					aspect="portrait-thin"
					alt="Biking around Amsterdam 🇳🇱"
				/>
				<MacWindow
					pic="/assets/showcase/snowdon.JPG"
					aspect="landscape"
					alt="Walking up Snowdon 🏔"
				/>
				<MacWindow
					pic="/assets/showcase/stage.JPG"
					aspect="landscape"
					alt="Production training with BBC 🎬"
				/>
				<MacWindow
					pic="/assets/showcase/polaroid.jpg"
					aspect="portrait"
					alt="Drinks with pals 🍻"
				/>
			</div>
			<div className="flex flex-grow h-96"></div>{" "}
		</div>
	);
}

export default Mac;
