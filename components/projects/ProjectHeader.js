import Marquee from "@components/home/Marquee";
import Logo from "./Logo";
import Tags from "./Tags";

function ProjectHeader({ data }) {
	console.log(data);
	return (
		<div className="grid">
			<div className="col-start-1 row-start-1 w-main h-80vh flex z-0">
				<div className="flex-grow"></div>
				<div className="flex-grow flex flex-col max-w-750px overflow-hidden">
					<div
						className=" flex-grow opacity-20"
						style={{
							background: `url(${data.image}) fixed left`,
						}}
					></div>
					<div className=" border-t border-white border-opacity-50 overflow-hidden"></div>
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 flex items-center z-10">
				<div className="mx-16">
					<Logo src={data.logo} title={data.title} />
					<p className="italic opacity-50 text-2xl my-4">
						Project &bull; {data.readingTime.text}
					</p>
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
