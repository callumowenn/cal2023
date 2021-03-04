import PictureHeader from "@components/PictureHeader";
import Posts from "@components/work/Posts";
import TextSection from "@components/work/TextSection";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function CNN({ cnnPosts }) {
	return (
		<div className="mb-32 flex flex-col">
			<Head>
				<title>Life at CNN - Callum Owen</title>
				<meta
					name="description"
					content="Despite the pandemic, my time with CNN was both
						inspiring and enlightening. It's hard to put into words all the experience I gained
						from my time with CNN. Out of pure luck, I'd be working
						there just as they were moving into their shiny, new London bureau."
				/>
			</Head>
			<PictureHeader
				pic="/assets/cnn/mcr.jpg"
				blurhash="|FEx@Q0gIqr;xGIpM_o#V?F~^if5IpR.xZs.WXR*}j9|M}%Kt6S5tRV@xtE1%2xaShNFkBj^s9bI-:R*s.R*WBs.RjofWV-oR.Iosms:WBt6bZbII[$%j?V[R+WBayfloJn%M{bcoIk8R+WCa$n$afV?WYj?ofkDoeogWA"
				aspect="landscape-1024"
				section="cnn"
				subone="Broadcast Engineering"
				subtwo="2020 Placements"
				title="Life at CNN"
				height="screen"
			/>
			<Posts posts={cnnPosts} section="cnn" shift />
			<div className="flex flex-grow justify-center mb-24 ml-24 tab-land:ml-0 sm:mt-24  tab-land:flex-col">
				<div className="tab-land:mb-24 sm:w-90vw tab-land:self-center">
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
					<h3 className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
						Despite the pandemic, my time with CNN was both
						inspiring and enlightening.
					</h3>
					<p className="text-2xl sm:text text-half-white font-light">
						It's hard to put into words all the experience I gained
						from my time with CNN. Out of pure luck, I'd be working
						there just as they were moving into their{" "}
						<Link href="/cnn/a-new-home">
							<a className="text-white hover:underline">
								shiny, new, London bureau
							</a>
						</Link>
						. <br />
						<br />
						Just six months after A-Levels, I'd find myself in an
						international team of world-class engineers. To play my
						part and be surrounded by all these people pushing
						towards the shared goal of moving CNN into this amazing
						new building - I feel incredibly lucky.
					</p>
					<div className="flex flex-grow justify-center mt-16">
						<Link href="/cnn/favourite-moments">
							<a className="self-center mr-16 opacity-50 group sm:mr-0 transition hover:opacity-100 focus:opacity-100">
								<div className="flex items-center">
									<p className="font-sans text-xl italic mr-4 group-hover:underline">
										My favourite moments
									</p>
									<div className="flex rounded-full p-2 bg-white">
										<Image
											width={35}
											height={35}
											priority
											src="/assets/arrow-dark.png"
											alt="arrow"
										/>
									</div>
								</div>
							</a>
						</Link>
					</div>
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
