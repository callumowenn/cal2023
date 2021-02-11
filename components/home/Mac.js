import MacWindow from "./MacWindow";

function Mac() {
	return (
		<div className="flex flex-grow flex-col relative">
			<div className="flex flex-grow bg-mac h-screen bg-cover sticky top-0 sm:bg-right z-10"></div>
			<div id="mac" className="flex flex-col z-20 flex-grow px-24">
				<MacWindow />
				<MacWindow
					pic="/assets/showcase/cam.jpg"
					alt="One of the many studios in New Broadcasting House 🎥"
				/>
				<MacWindow
					pic="/assets/showcase/dam.jpeg"
					alt="Biking around Amsterdam 🇳🇱"
				/>
				<MacWindow
					pic="/assets/showcase/snowdon.JPG"
					alt="Walking up Snowdon 🏔"
				/>
				<MacWindow
					pic="/assets/showcase/stage.JPG"
					alt="Production training with BBC 🎬"
				/>
				<MacWindow
					pic="/assets/showcase/mud.JPG"
					alt="Mountain biking with Dad 🚵🏼‍♂️"
				/>
				<MacWindow
					vid="/assets/showcase/cnn.mp4"
					alt="In the CNN Studio ⚡️"
				/>
				<MacWindow
					pic="/assets/showcase/polaroid.jpg"
					alt="Drinks with pals 🍻"
				/>
			</div>
			<div className="flex flex-grow h-96"></div>
		</div>
	);
}

export default Mac;
