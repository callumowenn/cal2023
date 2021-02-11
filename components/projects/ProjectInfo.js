import InfoBlock from "./InfoBlock";

function ProjectInfo({ date, skills, type, status }) {
	return (
		<div className="grid grid-cols-4 my-32 sm:grid-cols-2 sm:mt-16 sm:mb-0">
			<InfoBlock info="Date" data={date} />
			<InfoBlock info="Skills" dataList={skills} />
			<InfoBlock info="Project Type" data={type} />
			<InfoBlock info="Status" data={status} />
		</div>
	);
}

export default ProjectInfo;
