import MDXComponents from "@components/MDXComponents";
import PostLayout from "@components/work/PostLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";

function BBCPost({ mdxSource, frontMatter }) {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	});
	return (
		<>
			<Head>
				<title>{frontMatter.title} ⚡ Callum Owen</title>
			</Head>
			<PostLayout section="bbc" frontMatter={frontMatter}>
				{content}
			</PostLayout>
		</>
	);
}

export default BBCPost;

export async function getStaticPaths() {
	const bbcPosts = await getFiles("bbc");

	return {
		paths: bbcPosts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug("bbc", params.slug);

	return { props: post };
}
