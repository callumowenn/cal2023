import Post from "@components/work/Post";

function Posts({ posts, section, shift }) {
	return (
		<div
			className={`flex flex-wrap px-16 justify-center ${
				shift ? "transform -translate-y-24 sm:transform-none" : ""
			}`}
		>
			{posts.map((p) => (
				<Post section={section} post={p} />
			))}
		</div>
	);
}

export default Posts;
