import Intro from "@components/about/Intro";
import Tech from "@components/about/Tech";
import Mac from "@components/home/Mac";
import Head from "next/head";
function About() {
	return (
		<div className="flex flex-col w-full">
			<Head>
				<title>About - Callum Owen</title>
				<meta
					name="description"
					content="👋🏼 Hi, I'm Callum Owen. An engineering apprentice ⚡️ at BBC 🎥 and self-taught developer 📱 currently chillin' in London. 🇬🇧 Interested in tech that sustainably 🌱 enriches and simplifies life. And pints. 🍻"
				/>
			</Head>
			<Intro />
			<Mac />
			<Tech />
		</div>
	);
}

export default About;
