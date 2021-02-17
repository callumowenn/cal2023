import PictureHeader from "@components/PictureHeader";
import Posts from "@components/work/Posts";
import TextSection from "@components/work/TextSection";
import { getAllFilesFrontMatter } from "@lib/mdx";

function BBC({ bbcPosts }) {
	return (
		<div className="mb-32">
			<PictureHeader
				pic="/assets/bbc/sound.jpeg"
				aspect="portrait-1024"
				section="bbc"
				subone="Broadcast Engineering"
				subtwo="Degree Apprenticeship"
				title="Life at BBC"
				height="screen"
			/>
			<Posts posts={bbcPosts} section="bbc" shift />
			<TextSection mb>
				<p className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
					Combining tech, software, media, a free degree and three
					years experience.
				</p>
				<p className="text-2xl text-half-white sm:text-xl">
					Where do I start? This apprenticeship's been a rollercoaster
					from day one. I've had the chance to travel all around the
					UK - from standing on the roof of New Broadcasting House in
					London, to getting hands-on with cuttng edge tech in
					Salford.
					<br />
					<br />
					Life never stops within the BBC. There's always more things
					to learn; more people to meet; more experience to gain. As a
					New Talent Apprentice, I focus on bringing positive,
					progressional energy.
				</p>
			</TextSection>
		</div>
	);
}

export default BBC;

export async function getStaticProps() {
	const bbcPosts = await getAllFilesFrontMatter("bbc");

	return { props: { bbcPosts } };
}
