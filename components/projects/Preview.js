import Button from "@components/Button";
import Logo from "./Logo";
import Tags from "./Tags";

function Preview({ project }) {
	console.log(project);
	return (
		<div className="flex flex-col px-10 my-32">
			<div className="flex my-10">
				<div>
					<Logo src={project.logo} title={project.title} />
				</div>
				<div className="flex flex-col">
					<h3 className="text-7xl italic mb-4">{project.title}</h3>
					<Tags tags={project.tags} />
				</div>
			</div>
			<div>
				<img
					style={{ width: "70vw" }}
					src={project.image}
					alt={`${project.title} cover`}
				/>
			</div>
			<div className="mt-8 flex">
				<Button text="Read more" link={`/projects/${project.slug}`} />
				{project.live ? (
					<Button text="See live" link={project.live} secondary />
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Preview;
