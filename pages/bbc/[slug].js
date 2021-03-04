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
				<title>
					{frontMatter.title} - Life in the BBC - Callum Owen
				</title>
				<meta
					name="description"
					content={`${frontMatter.readingTime.text} - ${frontMatter.snippet}`}
				/>
				<meta name="author" content="Callum Owen" />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Callum Owen" />

				{/* <!-- Open Graph / Facebook --/> */}
				<meta
					property="og:url"
					content={`https://callumowen.co.uk/bbc/${frontMatter.slug}`}
				/>
				<meta
					property="og:title"
					content={`${frontMatter.title} 🎬 BBC ⚡ Callum Owen`}
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
					content={`https://callumowen.co.uk/bbc/${frontMatter.slug}`}
				/>
				<meta
					property="twitter:title"
					content={`${frontMatter.title} 🎬 BBC ⚡ Callum Owen`}
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
