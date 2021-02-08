import { getProjectBySlug, getAllProjects } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

function Project({ project }) {
	return (
		<div className="flex flex-col">
			<img className="w-96" src={project.image} alt={project.title} />
			<h1>{project.title}</h1>
			<p dangerouslySetInnerHTML={{ __html: project.content }}></p>
		</div>
	);
}

export default Project;

export async function getStaticProps({ params }) {
	const project = getProjectBySlug(params.slug, [
		"title",
		"image",
		"content",
		"slug",
	]);
	const content = await markdownToHtml(project.content || "");

	return {
		props: {
			project: {
				...project,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const projects = getAllProjects(["slug"]);

	return {
		paths: projects.map((project) => {
			return {
				params: {
					slug: project.slug,
				},
			};
		}),
		fallback: false,
	};
}
