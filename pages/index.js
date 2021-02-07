import Header from "@components/Header";
import Opener from "@components/home/Opener";
import Intro from "@components/home/Intro";
import Mac from "@components/home/Mac";

function Home() {
	return (
		<div>
			<Header />
			<Opener />
			<Intro />
			<Mac />
			<Intro />
		</div>
	);
}

export default Home;
