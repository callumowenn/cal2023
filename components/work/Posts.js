import Post from "@components/work/Post";

function Posts({ posts, section, shift }) {
	return (
		<>
			{section == "all" ? (
				<div className="flex self-start mb-4 font-black ml-24 sm:ml-8 font-apple italic text-7xl sm:text-6xl mt-4 text-half-white">
					<span className="not-italic text-white">✏️</span>
					&nbsp;Recent articles
				</div>
			) : (
				""
			)}
			<div
				className={`flex flex-wrap px-16 justify-center sm:w-screen sm:px-8 ${
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
