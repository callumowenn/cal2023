import Highlights from "./Highlights";
import Marquee from "./Marquee";

function Opener() {
	return (
		<div className="overflow-hidden">
			<Marquee />
			<Highlights />
		</div>
	);
}

export default Opener;
