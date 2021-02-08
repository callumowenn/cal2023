import Link from "next/link";

function Preview({ project }) {
	return (
		<Link href={`/projects/${project.slug}`}>
			<a>
				<div className="flex my-24">
					<img
						className="h-96"
						src={project.image}
						alt={project.title}
					/>
					<h1>{project.title}</h1>
				</div>
			</a>
		</Link>
	);
}

export default Preview;
