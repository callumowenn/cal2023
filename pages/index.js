const { default: Header } = require("@components/Header");
const { default: Opener } = require("@components/home/Opener");

function Home() {
	return (
		<div>
			<Header />
			<Opener />
		</div>
	);
}

export default Home;
