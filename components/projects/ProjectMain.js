import ShareLinks from "@components/ShareLinks";
import ProjectContent from "./ProjectContent";
import ProjectInfo from "./ProjectInfo";

function ProjectMain({ content, data }) {
	return (
		<div className="flex flex-col flex-grow px-16 mb-28 sm:mb-12 sm:px-4">
			<ProjectInfo
				date={data.date}
				skills={data.skills}
				type={data.type}
				status={data.status}
			/>
			<ProjectContent content={content} />
			<div className="flex flex-grow items-center justify-center">
				<ShareLinks
					title={data.title}
					section="projects"
					slug={data.slug}
					bottom
				/>
			</div>
		</div>
	);
}

export default ProjectMain;
