import PictureHeader from "@components/PictureHeader";
import ProjectContent from "@components/projects/ProjectContent";
import ShareLinks from "@components/ShareLinks";

function PostLayout({ children, section, frontMatter }) {
	console.log(frontMatter);
	return (
		<div>
			<PictureHeader
				pic={frontMatter.image}
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
			<div className="flex flex-col flex-grow px-16 sm:px-4">
				<ProjectContent content={children} />
			</div>
			<div className="flex flex-grow my-16 items-center justify-center">
				<ShareLinks
					title={frontMatter.title}
					section={section}
					slug={frontMatter.slug}
				/>
			</div>
		</div>
	);
}

export default PostLayout;
