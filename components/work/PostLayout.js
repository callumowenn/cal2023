import PictureHeader from "@components/PictureHeader";
import ProjectContent from "@components/projects/ProjectContent";
import ShareLinks from "@components/ShareLinks";
import { useEffect } from "react";

function PostLayout({ children, section, frontMatter }) {
	console.log(frontMatter);
	useEffect(() => {
		const registerView = () =>
			fetch(`/api/views/${frontMatter.slug}`, {
				method: "POST",
			});
		registerView();
	}, [frontMatter]);
	return (
		<div>
			<PictureHeader
				pic={frontMatter.image}
				blurhash={frontMatter.blurhash}
				aspect={frontMatter.aspect}
				section={section}
				subone={
					<span className="text-white not-italic">
						{frontMatter.emoji}
					</span>
				}
				subtwo={frontMatter.readingTime.text}
				title={frontMatter.title}
				date={frontMatter.date}
				slug={frontMatter.slug}
				height="90vh"
			/>
			<div className="flex flex-col flex-grow px-16 mb-28 sm:mb-12 sm:px-4">
				<ProjectContent content={children} />
				<div className="flex flex-grow items-center justify-center">
					<ShareLinks
						title={frontMatter.title}
						section={section}
						slug={frontMatter.slug}
						bottom
					/>
				</div>
			</div>
		</div>
	);
}

export default PostLayout;
