import ProjectContent from "./ProjectContent";
import ProjectInfo from "./ProjectInfo";

function ProjectMain({ content, data }) {
	return (
		<div className="flex flex-col flex-grow px-16 sm:px-4">
			<ProjectInfo
				date={data.date}
				skills={data.skills}
				type={data.type}
				status={data.status}
			/>
			<ProjectContent content={content} />
		</div>
	);
}

export default ProjectMain;
