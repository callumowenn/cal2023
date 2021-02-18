import Post from "@components/work/Post";

function Posts({ posts, section, shift }) {
	return (
		<>
			{section == "all" ? (
				<div className="flex mb-4 font-light ml-24 sm:ml-8 font-serif italic text-5xl text-half-white">
					Recent articles
				</div>
			) : (
				""
			)}
			<div
				className={`flex row-rev flex-wrap px-16 justify-center sm:px-8 ${
					shift ? "transform -translate-y-24 sm:transform-none" : ""
				} ${section == "all" ? "mb-24" : ""}`}
			>
				{posts.map((p) => (
					<Post key={p.slug} section={section} post={p} />
				))}
			</div>
		</>
	);
}

export default Posts;
