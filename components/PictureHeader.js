import Logo from "./projects/Logo";
import Tags from "./projects/Tags";

function PictureHeader({ pic, logo, subone, subtwo, title, tags, height }) {
	return (
		<div className="grid">
			<div
				className={`col-start-1 row-start-1 w-main h-${height} flex z-0 sm:h-96 sm:w-screen`}
			>
				<div className="flex-grow sm:hidden"></div>
				<div className="flex-grow flex flex-col max-w-50vw overflow-hidden sm:max-w-none sm:h-96 ">
					<div
						className={`flex-grow  ${
							tags
								? "project-pic opacity-20 sm:opacity-50"
								: "bg-cover bg-center opacity-40"
						}`}
						style={{
							backgroundImage: `url(${pic})`,
						}}
					></div>
					<div className=" border-t border-white border-opacity-50 overflow-hidden sm:hidden"></div>
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 flex items-center z-10 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:ml-4 sm:mr-0 sm:transform sm:-translate-y-12">
					{tags ? (
						<Logo src={logo} title={title} />
					) : (
						<img className="max-h-16" src={logo} alt={title} />
					)}

					<p className="italic text-half-white text-2xl my-8 sm:text-xl">
						{subone} &bull; {subtwo}
					</p>
					<h1
						className={`font-sans italic font-bold ${
							tags ? "text-8xl" : "text-9xl"
						} sm:text-4xl`}
					>
						{title}
					</h1>
					{tags ? <Tags tags={tags} /> : ""}
				</div>
			</div>
			<div className="hidden h-screen"></div>
			<div className="hidden h-90vh"></div>
		</div>
	);
}

export default PictureHeader;
