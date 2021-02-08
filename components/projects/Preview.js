import Button from "@components/Button";

function Preview({ project }) {
	console.log(project);
	return (
		<div className="flex flex-col px-10 my-32">
			<div className="flex my-10">
				<div>
					<img
						className="w-32 h-32 rounded-2xl mr-8"
						src={project.logo}
						alt={`${project.title} logo`}
					/>
				</div>
				<div className="flex flex-col">
					<h3 className="text-7xl italic mb-4">{project.title}</h3>
					<div className="flex">
						{project.tags.map((tag) => (
							<div
								className="flex py-1 px-3 m-1 rounded-2xl"
								style={{ background: `${tag.colour}33` }}
							>
								<p
									className=" font-sans"
									style={{ color: tag.colour }}
								>
									{tag.name}
								</p>
							</div>
						))}
					</div>
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
