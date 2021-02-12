import MDXComponents from "@components/MDXComponents";
import PostLayout from "@components/work/PostLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";

function CNNPost({ mdxSource, frontMatter }) {
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
			<PostLayout section="cnn" frontMatter={frontMatter}>
				{content}
			</PostLayout>
		</>
	);
}

export default CNNPost;

export async function getStaticPaths() {
	const cnnPosts = await getFiles("cnn");

	return {
		paths: cnnPosts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug("cnn", params.slug);

	return { props: post };
}
