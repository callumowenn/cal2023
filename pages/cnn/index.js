import PictureHeader from "@components/PictureHeader";
import Posts from "@components/work/Posts";
import TextSection from "@components/work/TextSection";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";

function CNN({ cnnPosts }) {
	return (
		<div className="mb-32 flex flex-col">
			<PictureHeader
				pic="/assets/cnn/mcr.jpg"
				aspect="landscape-1024"
				section="cnn"
				subone="Broadcast Engineering"
				subtwo="2020 Placements"
				title="Life at CNN"
				height="screen"
			/>
			<Posts posts={cnnPosts} section="cnn" shift />
			<div className="flex flex-grow justify-center mb-24 ml-24 sm:ml-0 sm:mt-24  sm:flex-col">
				<div className="sm:mb-24 flex-grow">
					<blockquote
						className="twitter-tweet"
						data-dnt="true"
						data-theme="light"
					>
						<p lang="en" dir="ltr">
							Sneak peak around our new London set ...{" "}
							<a href="https://t.co/BODSmu2hVx">
								pic.twitter.com/BODSmu2hVx
							</a>
						</p>
						&mdash; Max Foster (@MaxFosterCNN){" "}
						<a href="https://twitter.com/MaxFosterCNN/status/1234477014603702277?ref_src=twsrc%5Etfw">
							March 2, 2020
						</a>
					</blockquote>{" "}
					<Head>
						<script
							async
							src="https://platform.twitter.com/widgets.js"
							charset="utf-8"
						></script>
					</Head>
				</div>
				<TextSection>
					<p className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
						Despite the pandemic, my time with CNN was both
						inspiring and enlightening.
					</p>
					<p className="text-2xl text-half-white sm:text-xl">
						It's hard to put into words all the experience I gained
						from my time with CNN. Out of pure luck, I'd be working
						there just as they were moving into their{" "}
						<a
							className="text-white hover:underline"
							href="http://160oldstreet.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							shiny, new, London bureau
						</a>{" "}
						. <br />
						<br />
						Just six months after A-Levels, I'd find myself in an
						international team of world-class engineers. To play my
						part and be surrounded by all these people pushing
						towards the shared goal of moving CNN into this amazing
						new building - I feel incredibly lucky.
					</p>
				</TextSection>
			</div>
		</div>
	);
}

export default CNN;

export async function getStaticProps() {
	const cnnPosts = await getAllFilesFrontMatter("cnn");

	return { props: { cnnPosts } };
}
