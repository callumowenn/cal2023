import Better from "@components/home/Better";
import PictureHeader from "@components/PictureHeader";
import ProjectMain from "./ProjectMain";

function ProjectLayout({ children, frontMatter }) {
	console.log(frontMatter);
	return (
		<div>
			<PictureHeader
				pic={frontMatter.image}
				aspect={frontMatter.aspect}
				logo={frontMatter.logo}
				subone="Project"
				subtwo={frontMatter.readingTime.text}
				title={frontMatter.title}
				tags={frontMatter.tags}
				height="90vh"
			/>
			<ProjectMain content={children} data={frontMatter} />
		</div>
	);
}

export default ProjectLayout;
