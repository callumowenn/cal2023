import Image from "next/image";
import Link from "next/link";

function Project({ data }) {
	return (
		<Link href={`/projects/${data.slug}`}>
			<a className="grid h-screen p-4 border-half-white overflow-hidden group sm:h-64 sm:border-r-0 border-t">
				<div className="col-start-1 flex row-start-1 ">
					<Image
						className="object-cover opacity-10 group-hover:opacity-20"
						loading="lazy"
						height={540}
						width={960}
						src={data.image}
						alt={`${data.title} website screenshot`}
					/>
				</div>
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
