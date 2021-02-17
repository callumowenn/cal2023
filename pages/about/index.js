import Intro from "@components/about/Intro";
import Tech from "@components/about/Tech";
import Mac from "@components/home/Mac";
import Head from "next/head";
function About() {
	return (
		<div>
			<Head>
				<title>About ⚡ Callum Owen</title>
			</Head>
			<Intro />
			<Mac />
			<Tech />
		</div>
	);
}

export default About;
