import Preview from "@components/projects/Preview";
import { getAllFilesFrontMatter } from "@lib/mdx";

function Projects({ projects }) {
	return (
		<div className="ml-16 my-24">
			<div className="mt-48 mb-24 flex items-center">
				<h1 className="font-sans italic font-black text-9xl">
					Projects
				</h1>
			</div>
			{projects.map((p) => (
				<Preview project={p} />
			))}
		</div>
	);
}

export default Projects;

export async function getStaticProps() {
	const projects = await getAllFilesFrontMatter("projects");

	return { props: { projects } };
}
