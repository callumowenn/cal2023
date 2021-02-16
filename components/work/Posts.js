import Post from "@components/work/Post";

function Posts({ posts, section, shift }) {
	return (
		<div
			className={`flex row-rev flex-wrap px-16 justify-center sm:px-8 ${
				shift ? "transform -translate-y-24 sm:transform-none" : ""
			}`}
		>
			{posts.map((p) => (
				<Post key={p.slug} section={section} post={p} />
			))}
		</div>
	);
}

export default Posts;
