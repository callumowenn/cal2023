import coverAspects from "@lib/coverAspects";
import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";

function Post({ post, section }) {
	return (
		<Link
			href={`/${
				section == "all" ? post.image.substring(8, 11) : section
			}/${post.slug}`}
		>
			<a className="flex flex-col w-80 m-8 group sm:mx-0 post sm:w-90vw">
				<div className="flex flex-shrink-0 h-52 justify-center relative rounded-3xl shadow-lg overflow-hidden group-hover:shadow-2xl">
					<Image
						className={`flex-grow object-cover ${
							post.aspect == "square-1024"
								? "object-left-top"
								: ""
						}`}
						priority
						layout="intrinsic"
						src={post.image}
						height={coverAspects[`${post.aspect}-preview`].height}
						width={coverAspects[`${post.aspect}-preview`].width}
					/>
					{section == "all" ? (
						<div
							className="absolute bottom-0 right-0 p-2 h-10 w-20 flex items-center justify-center shadow-2xl  bg-opacity-20 bg-white"
							style={{
								backdropFilter: "blur(50px)",
								WebkitBackdropFilter: "blur(50px)",
								borderRadius: "24px 0 0 0",
							}}
						>
							<img
								className=" w-12"
								src={`/assets/${post.image.substring(
									8,
									11
								)}.png`}
							/>
						</div>
					) : (
						""
					)}
				</div>
				<div className="flex mt-6">
					<span className="h-12 mr-6 text-5xl">{post.emoji}</span>
					<div className="flex flex-col">
						<h1 className="italic font-sans font-bold text-xl group-hover:underline">
							{post.title}
						</h1>
						<p className="text-half-white font-sans">
							{formatDistance(new Date(post.date), new Date())}{" "}
							ago
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
}

export default Post;
