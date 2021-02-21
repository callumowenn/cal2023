import Better from "@components/home/Better";
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
				<title>{frontMatter.title} ⚡ Callum Owen</title>
				<meta name="author" content="Callum Owen" />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Callum Owen" />

				{/* <!-- Open Graph / Facebook --/> */}
				<meta
					property="og:url"
					content={`https://callumowen.co.uk/projects/${frontMatter.slug}`}
				/>
				<meta
					property="og:title"
					content={`${frontMatter.title} ⚡ Callum Owen`}
				/>
				<meta
					property="og:description"
					content={`${frontMatter.readingTime.text} - ${frontMatter.snippet}`}
				/>
				<meta property="og:image" content={frontMatter.image} />

				{/* <!-- Twitter --/> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content={`https://callumowen.co.uk/projects/${frontMatter.slug}`}
				/>
				<meta
					property="twitter:title"
					content={`${frontMatter.title} ⚡ Callum Owen`}
				/>
				<meta
					property="twitter:description"
					content={`${frontMatter.readingTime.text} - ${frontMatter.snippet}`}
				/>
				<meta
					property="twitter:image"
					content={`http://callumowen.co.uk${frontMatter.image}`}
				/>
			</Head>
			<ProjectLayout frontMatter={frontMatter}>{content}</ProjectLayout>
			{frontMatter.type == "Client work" ? <Better /> : ""}
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
