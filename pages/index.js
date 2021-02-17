import Header from "@components/Header";
import Opener from "@components/home/Opener";
import Intro from "@components/home/Intro";
import Mac from "@components/home/Mac";
import Scrolling from "@components/home/Scrolling";
import Better from "@components/home/Better";

function Home() {
	return (
		<>
			<div className="z-10">
				<Header />
				<Opener />
				<Intro />
				<Mac />
				<Scrolling />
				<Better />
			</div>
			<div className="hidden sm:block absolute h-screen bg-right bg-cover w-screen top-0 z-0 bg-blur-fade"></div>
		</>
	);
}

export default Home;
