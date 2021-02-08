import Preview from "@components/projects/preview";
import { getAllProjects } from "lib/api";

function Projects({ allProjects }) {
	return (
		<div className="flex flex-col items-center">
			{allProjects.map((project) => (
				<Preview project={project} />
			))}
		</div>
	);
}

export default Projects;

export async function getStaticProps() {
	const allProjects = getAllProjects(["title", "image", "slug"]);

	return {
		props: { allProjects },
	};
}
