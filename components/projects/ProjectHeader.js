import Logo from "./Logo";
import Tags from "./Tags";

function ProjectHeader({ data }) {
	console.log(data);
	return (
		<div className="grid">
			<div className="col-start-1 row-start-1 w-main h-90vh flex z-0 sm:h-96 sm:w-screen">
				<div className="flex-grow sm:hidden"></div>
				<div className="flex-grow flex flex-col max-w-50vw overflow-hidden sm:max-w-none sm:h-96 ">
					<div
						className=" flex-grow opacity-20"
						style={{
							background: `url(${data.image}) fixed cover left`,
						}}
					></div>
					<div className=" border-t border-white border-opacity-50 overflow-hidden"></div>
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 flex items-center z-10 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:mx-8 sm:transform sm:-translate-y-12">
					<Logo src={data.logo} title={data.title} />
					<p className="italic opacity-50 text-2xl my-4 sm:text-xl">
						Project &bull; {data.readingTime.text}
					</p>
					<h1 className="font-sans italic font-bold text-8xl my-4 sm:text-5xl">
						{data.title}
					</h1>
					<Tags tags={data.tags} />
				</div>
			</div>
		</div>
	);
}

export default ProjectHeader;
