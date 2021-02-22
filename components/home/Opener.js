import Highlights from "./Highlights";
import Marquee from "./Marquee";

function Opener() {
	return (
		<div className="w-full overflow-hidden">
			<Marquee />
			<Highlights />
		</div>
	);
}

export default Opener;
