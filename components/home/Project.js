import Link from "next/link";

function Project({ data }) {
	return (
		<Link href={`/projects/${data.slug}`}>
			<a className="grid h-screen p-4 border-r border-white border-opacity-50 overflow-hidden">
				<div
					className="col-start-1 row-start-1 opacity-20"
					style={{ background: `url(${data.image}) center` }}
				></div>
				<div className="col-start-1 row-start-1 flex items-center justify-center">
					<h3 className="italic text-5xl font-light">{data.title}</h3>
				</div>
			</a>
		</Link>
	);
}

export default Project;
