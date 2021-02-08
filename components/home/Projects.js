import Project from "./Project";

function Projects() {
	let projects = [
		{
			slug: "watchwhere",
			title: "WatchWhere",
			image: "/assets/projects/watchwhere/watchwhere-cover.png",
		},
		{
			slug: "anculo",
			title: "Anculo",
			image: "/assets/projects/anculo/anculo-cover.png",
		},
		{
			slug: "am98",
			title: "3D Air Max",
			image: "/assets/projects/am98/am98-cover.png",
		},
		{
			slug: "lightbulb",
			title: "Lightbulb",
			image: "/assets/projects/lightbulb/lightbulb-cover.png",
		},
	];
	return (
		<div className="grid grid-cols-4 border-t border-white border-opacity-50">
			{projects.map((project) => (
				<Project key={project.slug} data={project} />
			))}
		</div>
	);
}

export default Projects;
