import Header from "@components/Header";
import Opener from "@components/home/Opener";
import Intro from "@components/home/Intro";
import Mac from "@components/home/Mac";
import Scrolling from "@components/home/Scrolling";
import Better from "@components/home/Better";
import Posts from "@components/work/Posts";
import { getAllFilesFrontMatter } from "@lib/mdx";

function Home({ sortedPosts }) {
	return (
		<>
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
