import Better from "@components/home/Better";
import PictureHeader from "@components/PictureHeader";
import ProjectMain from "./ProjectMain";

function ProjectLayout({ children, frontMatter }) {
	console.log(frontMatter);
	return (
		<div>
			<PictureHeader
				pic={frontMatter.image}
				blurhash={frontMatter.blurhash}
				aspect={frontMatter.aspect}
				logo={frontMatter.logo}
				subone="Project"
				subtwo={frontMatter.readingTime.text}
				title={frontMatter.title}
				slug={frontMatter.slug}
				tags={frontMatter.tags}
				section="projects"
				height="90vh"
			/>
			<ProjectMain content={children} data={frontMatter} />
		</div>
	);
}

export default ProjectLayout;
