import Button from "@components/Button";
import Logo from "./Logo";
import Tags from "./Tags";

function Preview({ project }) {
	console.log(project);
	return (
		<div className="flex flex-col px-16 my-32">
			<div className="flex my-10">
				<div>
					<Logo src={project.logo} title={project.title} />
				</div>
				<div className="flex flex-col">
					<a href={`/projects/${project.slug}`} title="Read more">
						<h3 className="text-7xl italic mb-4 hover:underline">
							{project.title}
						</h3>
					</a>

					<Tags tags={project.tags} />
				</div>
			</div>
			<div className="w-max">
				<a href={`/projects/${project.slug}`} title="Read more">
					<img
						style={{ width: "70vw" }}
						src={project.image}
						alt={`${project.title} cover`}
					/>
				</a>
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
