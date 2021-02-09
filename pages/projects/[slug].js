import MDXComponents from "@components/MDXComponents";
import ProjectLayout from "@components/projects/ProjectLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";

function Project({ mdxSource, frontMatter }) {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	});
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/hbm6nog.css"
				/>
			</Head>
			<ProjectLayout frontMatter={frontMatter}>{content}</ProjectLayout>
		</>
	);
}

export default Project;

export async function getStaticPaths() {
	const projects = await getFiles("projects");

	return {
		paths: projects.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const project = await getFileBySlug("projects", params.slug);

	return { props: project };
}
