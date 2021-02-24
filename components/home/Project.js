import Image from "next/image";
import Link from "next/link";

function Project({ data }) {
	return (
		<Link href={`/projects/${data.slug}`}>
			<a className="home-project grid h-screen p-4 flex-shrink-0 border-half-white overflow-hidden group tab-port:h-80 sm:h-64 sm:border-r-0 border-t">
				<div className=" col-start-1 flex flex-grow-0 row-start-1 z-0 tab-port:h-80 tab-port:pb-8 sm:h-60 sm:pb-4">
					<Image
						className="huh object-cover opacity-10"
						loading="lazy"
						height={810}
						width={1440}
						src={data.image}
						alt={`${data.title} website screenshot`}
					/>
				</div>
				<div className="col-start-1 row-start-1 flex items-center z-10 justify-center tab-port:h-80 sm:h-64">
					<h3 className="italic text-5xl group-hover:underline font-light">
						{data.title}
					</h3>
				</div>
			</a>
		</Link>
	);
}

export default Project;
