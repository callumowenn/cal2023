import Link from "next/link";

function Project({ data }) {
	return (
		<Link href={`/projects/${data.slug}`}>
			<a className="grid h-screen p-4 border-r border-white border-opacity-50 overflow-hidden group sm:h-64 sm:border-r-0 border-t">
				<div
					className="col-start-1 row-start-1 opacity-10"
					style={{ background: `url(${data.image}) center` }}
				></div>
				<div className="col-start-1 row-start-1 flex items-center justify-center">
					<h3 className="italic text-5xl group-hover:underline font-light">
						{data.title}
					</h3>
				</div>
			</a>
		</Link>
	);
}

export default Project;
