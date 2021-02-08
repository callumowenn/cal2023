import Preview from "@components/projects/Preview";
import { getAllFilesFrontMatter } from "@lib/mdx";

function Projects({ projects }) {
	return projects.map((p) => <Preview project={p} />);
}

export default Projects;

export async function getStaticProps() {
	const projects = await getAllFilesFrontMatter("projects");

	return { props: { projects } };
}
