import ProjectHeader from "./ProjectHeader";
import ProjectMain from "./ProjectMain";

function ProjectLayout({ children, frontMatter }) {
	console.log(frontMatter);
	return (
		<div>
			<ProjectHeader data={frontMatter} />
			<ProjectMain content={children} data={frontMatter} />
		</div>
	);
}

export default ProjectLayout;
