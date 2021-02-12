import Link from "next/link";

function Post({ post, section }) {
	return (
		<Link href={`/${section}/${post.slug}`}>
			<a className="flex flex-col w-80 m-8 group">
				<div className="flex-shrink-0 h-52 justify-center relative rounded-3xl overflow-hidden group-hover:shadow-2xl">
					<img className="flex flex-shrink-0" src={post.image} />
				</div>
				<div className="flex mt-6">
					<h1 className="h-12 mr-6 text-5xl">{post.emoji}</h1>
					<h1 className="italic font-sans font-bold text-xl group-hover:underline">
						{post.title}
					</h1>
				</div>
			</a>
		</Link>
	);
}

export default Post;
