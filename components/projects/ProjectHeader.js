import Logo from "./Logo";
import Tags from "./Tags";

function ProjectHeader({ data }) {
	return (
		<div className="grid h-screen">
			<div className="col-start-1 row-start-1 w-main h-screen flex z-0">
				<div className="flex-grow"></div>
				<div
					className="flex-grow opacity-20"
					style={{ backgroundImage: `url(${data.image})` }}
				></div>
			</div>
			<div className="col-start-1 row-start-1 m-16 flex items-center z-10">
				<div className="mx-16">
					<Logo src={data.logo} title={data.title} />
					<p className="italic opacity-50 text-3xl my-4">Project</p>
					<h1 className="font-sans italic font-bold text-8xl my-4">
						{data.title}
					</h1>
					<Tags tags={data.tags} />
				</div>
			</div>
		</div>
	);
}

export default ProjectHeader;
