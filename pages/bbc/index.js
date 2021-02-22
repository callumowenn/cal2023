import PictureHeader from "@components/PictureHeader";
import Posts from "@components/work/Posts";
import TextSection from "@components/work/TextSection";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function BBC({ bbcPosts }) {
	return (
		<div className="mb-32">
			<Head>
				<title>BBC ⚡ Callum Owen</title>
			</Head>
			<PictureHeader
				pic="/assets/bbc/sound.jpeg"
				blurhash="|HBN1hE4IA%1ROxut8WCt6~pM|Djt5RQt7W=ofj[t7t3IVjZt7WBWCt6WXMwt6%MWExuM{oJWBoKITWE%NbbWBWBWARkj@RNW=x]s.NHxZV@j?ayROWCt8M{ofofafofWBozxZWBNGt7a#fPs.R*t8oeRja}oya#WBoeWB"
				aspect="square-1024"
				section="bbc"
				subone="Broadcast Engineering"
				subtwo="Degree Apprenticeship"
				title="Life at BBC"
				height="screen"
			/>
			<Posts posts={bbcPosts} section="bbc" shift />
			<TextSection mb>
				<h3 className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
					Combining tech, software, media, a free degree and three
					years experience.
				</h3>
				<p className="text-2xl font-light text-half-white">
					Where do I start? This apprenticeship's been a rollercoaster
					from day one. I've had the chance to travel all around the
					UK - from installing studios at New Broadcasting House in
					London, to getting hands-on with cutting-edge tech in
					Salford.
					<br />
					<br />
					Life never stops in the BBC. There's always more things to
					learn; more people to meet; more experience to gain. As a
					New Talent Apprentice, I focus on bringing positive,
					progressional energy.
				</p>
				<div className="flex flex-grow justify-center mt-16">
					<Link href="/bbc/best-bits-so-far">
						<a className="self-center mr-16 opacity-50 sm:mr-0 group transition hover:opacity-100 focus:opacity-100">
							<div className="flex items-center">
								<p className="font-sans text-xl italic mr-4 group-hover:underline">
									Check out my highlights
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
	);
}

export default BBC;

export async function getStaticProps() {
	const bbcPosts = await getAllFilesFrontMatter("bbc");

	return { props: { bbcPosts } };
}
