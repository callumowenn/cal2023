import Preview from "@components/projects/Preview";
import { getAllFilesFrontMatter } from "@lib/mdx";
import Head from "next/head";

function Projects({ projects }) {
	return (
		<div className="ml-16 my-24 sm:mx-4">
			<Head>
				<title>Projects ⚡ Callum Owen</title>
			</Head>
			<div className="mt-48 mb-24 flex items-center sm:mt-12 sm:ml-4">
				<h1 className="font-sans italic font-black text-9xl sm:text-6xl">
					Projects
				</h1>
			</div>
			{projects.map((p) => (
				<Preview project={p} />
			))}
		</div>
	);
}

export default Projects;

export async function getStaticProps() {
	const projects = await getAllFilesFrontMatter("projects");

	return { props: { projects } };
}
