import ProjectContent from "./ProjectContent";
import ProjectInfo from "./ProjectInfo";

function ProjectMain({ content, data }) {
	return (
		<div
			className="flex flex-col flex-grow mx-16"
			style={{ width: "80vw" }}
		>
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
