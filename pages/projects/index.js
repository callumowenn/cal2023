import Preview from "@components/projects/Preview";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";

function Projects({ projects }) {
	return (
		<div className="flex-grow w-full max-w-1600px self-center">
			<Head>
				<title>Projects - Callum Owen</title>
			</Head>
			<div className="ml-16 my-24 tab-land:ml-4 sm:mx-4">
				<div className="mt-48 mb-24 flex items-center sm:mt-12 sm:ml-4">
					<h1 className="font-sans italic font-black text-9xl sm:text-6xl">
						Projects
					</h1>
				</div>
				{projects.map((p) => (
					<Preview project={p} />
				))}
			</div>
		</div>
	);
}

export default Projects;

export async function getStaticProps() {
	const projects = await getAllFilesFrontMatter("projects");

	return { props: { projects } };
}
