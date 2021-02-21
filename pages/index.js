import Header from "@components/Header";
import Opener from "@components/home/Opener";
import Intro from "@components/home/Intro";
import Mac from "@components/home/Mac";
import Scrolling from "@components/home/Scrolling";
import Better from "@components/home/Better";
import Posts from "@components/work/Posts";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";

function Home({ sortedPosts }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Read about life as a BBC apprentice, my time at CNN and my web development projects. Get to know me and keep up with my latest stuff."
				></meta>
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://callumowen.co.uk/" />
				<meta
					property="og:title"
					content="Callum Owen ⚡ BBC engineering apprentice and developer"
				/>
				<meta
					property="og:description"
					content="Read about life as a BBC apprentice, my time at CNN and my web development projects. Get to know me and keep up with my latest stuff."
				/>
				<meta property="og:image" content="/assets/sc.png" />

				{/* <!-- Twitter --/> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://callumowen.co.uk/"
				/>
				<meta
					property="twitter:title"
					content="Callum Owen ⚡ BBC engineering apprentice and developer"
				/>
				<meta
					property="twitter:description"
					content="Read about life as a BBC apprentice, my time at CNN and my web development projects. Get to know me and keep up with my latest stuff."
				/>
				<meta property="twitter:image" content="/assets/sc.png" />
			</Head>
			<div className="z-10">
				<Header />
				<Opener />
				<div className="flex-grow grid pointer-events-none">
					<div className="flex flex-row-reverse row-start-1 col-start-1 sm:flex-col z-30">
						<div className="flex-grow "></div>
						<Intro />
					</div>
					<div className="flex flex-row-reverse row-start-1 col-start-1 sm:flex-col">
						<div className="my-24 justify-self-end flex items-center flex-grow justify-center sm:hidden">
							<iframe
								src="https://my.spline.design/apps-f82f11ce9b5156fdff19d437d7b58fde/"
								frameborder="0"
								width="100%"
								height="100%"
								className="pointer-events-auto"
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
				<Posts posts={sortedPosts} section="all" />
				<Mac />
				<Scrolling />
				<Better />
			</div>
			<div className="hidden sm:block absolute h-screen bg-right bg-cover w-screen top-0 z-0 bg-blur-fade"></div>
		</>
	);
}

export default Home;

export async function getStaticProps() {
	const bbcPosts = await getAllFilesFrontMatter("bbc");
	const cnnPosts = await getAllFilesFrontMatter("cnn");

	let allPosts = bbcPosts.concat(cnnPosts);

	let sortedPosts = allPosts
		.sort((a, b) => {
			console.log(a);
			console.log();
			return new Date(b.date) - new Date(a.date);
		})
		.slice(0, 3);

	return { props: { sortedPosts } };
}
