import MDXComponents from "@components/MDXComponents";
import PostLayout from "@components/work/PostLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";

function CNNPost({ mdxSource, frontMatter }) {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	});
	console.log(content.props.children);
	return (
		<>
			<Head>
				<title>{frontMatter.title} 🎥 CNN ⚡ Callum Owen</title>
				<meta name="author" content="Callum Owen" />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Callum Owen" />

				{/* <!-- Open Graph / Facebook --/> */}
				<meta
					property="og:url"
					content={`https://callumowen.co.uk/cnn/${frontMatter.slug}`}
				/>
				<meta
					property="og:title"
					content={`${frontMatter.title} 🎥 CNN ⚡ Callum Owen`}
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
					content={`https://callumowen.co.uk/cnn/${frontMatter.slug}`}
				/>
				<meta
					property="twitter:title"
					content={`${frontMatter.title} 🎥 CNN ⚡ Callum Owen`}
				/>
				<meta
					property="twitter:description"
					content={`${frontMatter.readingTime.text} - ${frontMatter.snippet}`}
				/>
				<meta property="twitter:image" content={frontMatter.image} />
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
