import BlurUpImage from "@components/BlurUpImage";
import Button from "@components/Button";
import Image from "next/image";
import Link from "next/link";
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
					<Link href={`/projects/${project.slug}`}>
						<a title="Read more">
							<h3 className="text-7xl italic hover:underline sm:text-4xl sm:mb-0">
								{project.title}
							</h3>
						</a>
					</Link>

					<Tags tags={project.tags} />
				</div>
			</div>
			<div className="flex">
				<Link href={`/projects/${project.slug}`}>
					<a className="" title="Read more">
						<div className="w-70vw relative overflow-hidden sm:w-full">
							<BlurUpImage
								src={project.image}
								blurhash={project.blurhash}
								width={1008}
								height={567}
								layout="intrinsic"
								alt={`${project.title} cover`}
								next
							/>
						</div>
					</a>
				</Link>
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
