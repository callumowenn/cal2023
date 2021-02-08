import Header from "@components/Header";
import Opener from "@components/home/Opener";
import Intro from "@components/home/Intro";
import Mac from "@components/home/Mac";
import Scrolling from "@components/home/Scrolling";
import Better from "@components/home/Better";
import Footer from "@components/Footer";

function Home() {
	return (
		<div>
			<Header />
			<Opener />
			<Intro />
			<Mac />
			<Scrolling />
			<Better />
		</div>
	);
}

export default Home;
