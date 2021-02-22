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
				<meta
					property="twitter:image"
					content="http://callumowen.co.uk/assets/sc.png"
				/>
				<link
					rel="preload"
					as="image"
					href="/assets/blur-fade.png"
				></link>
			</Head>
			<div className="flex flex-col items-center z-10">
				<Header />
				<Opener />
				<div className="flex-grow flex-shrink-0 max-w-1600px w-full grid pointer-events-none">
					<div className="flex flex-row-reverse row-start-1 col-start-1 sm:flex-col z-30">
						<div className="flex-grow "></div>
						<Intro />
					</div>
					<div className="flex row-start-1 col-start-1 sm:flex-col">
						<div className="flex-grow"></div>
						<div className="my-24 justify-self-end flex items-center flex-grow justify-center sm:hidden">
							<iframe
								src="https://my.spline.design/appscopy-ee73103f7b8c387427637cf829f1608c/"
								frameborder="0"
								width="100%"
								className="pointer-events-auto"
								height="100%"
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
