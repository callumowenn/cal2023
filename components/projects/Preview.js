import Button from "@components/Button";
import Logo from "./Logo";
import Tags from "./Tags";

function Preview({ project }) {
	console.log(project);
	return (
		<div className="flex flex-col px-16 my-32 sm:px-0 sm:my-24">
			<div className="flex my-10 sm:mb-4">
				<div className="flex-shrink-0">
					<Logo src={project.logo} title={project.title} />
				</div>
				<div className="flex flex-col">
					<a href={`/projects/${project.slug}`} title="Read more">
						<h3 className="text-7xl italic mb-4 hover:underline sm:text-4xl sm:mb-4">
							{project.title}
						</h3>
					</a>

					<Tags tags={project.tags} />
				</div>
			</div>
			<div className="flex">
				<a
					className="flex flex-grow"
					href={`/projects/${project.slug}`}
					title="Read more"
				>
					<img
						className="w-70vw sm:w-full"
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
