import PictureHeader from "@components/PictureHeader";
import ProjectContent from "@components/projects/ProjectContent";

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
				height="90vh"
			/>
			<div className="flex flex-col flex-grow px-16 sm:px-4">
				<ProjectContent content={children} />
			</div>
		</div>
	);
}

export default PostLayout;
