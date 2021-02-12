import PictureHeader from "@components/PictureHeader";
import Posts from "@components/work/Posts";
import TextSection from "@components/work/TextSection";
import { getAllFilesFrontMatter } from "@lib/mdx";

function BBC({ bbcPosts }) {
	return (
		<div className="mb-32">
			<PictureHeader
				pic="/assets/bbc/sound.jpeg"
				logo="/assets/bbc.png"
				subone="Broadcast Engineering"
				subtwo="Degree Apprenticeship"
				title="Life at BBC"
				height="screen"
			/>
			<Posts posts={bbcPosts} section="bbc" shift />
			<TextSection mb>
				<p className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
					Lorem ipsum dolor sit, amet officia adipisicing elit.
					Perferendis sitem!
				</p>
				<p className="text-2xl text-half-white sm:text-xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eum asperiores amet praesentium quidem officia. Vel qui quo
					est odit pariatur totam ipsa inventore! Voluptatum
					praesentium culpa odio suscipit quaerat dolorem!
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nostrum, obcaecati illum corporis, accusamus voluptas
					blanditiis quas ducimus illo iusto voluptatem commodi,
					inventore consequuntur eos quam dicta quisquam?
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
