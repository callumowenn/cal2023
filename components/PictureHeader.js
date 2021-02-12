import Logo from "./projects/Logo";
import Tags from "./projects/Tags";

function PictureHeader({ pic, logo, subone, subtwo, title, tags, height }) {
	return (
		<div className="grid">
			<div
				className={`col-start-1  border-b w-50vw ml-auto row-start-1 h-${height} flex z-0 sm:h-96 sm:w-screen`}
			></div>
			<div
				className={`col-start-1 row-start-1 absolute w-main h-${height} flex flex-row-reverse z-0 sm:h-96 sm:w-screen`}
				style={{ clip: "rect(0, auto, auto, 0)" }}
			>
				<div className="flex-grow sm:hidden"></div>
				<img
					className={`flex-grow fixed flex sm:w-screen w-50vw sm:max-w-none sm:h-96 opacity-25 object-cover h-${height} object-left-top`}
					style={{ backfaceVisibility: "hidden" }}
					src={pic}
				/>
			</div>
			<div className="col-start-1 row-start-1 m-16 flex items-center z-10 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:ml-4 sm:mr-0 sm:transform sm:-translate-y-12">
					{tags ? (
						<Logo src={logo} title={title} />
					) : (
						<img className="max-h-16" src={logo} alt={title} />
					)}

					<p className="italic text-half-white text-2xl mt-8 mb-4 sm:text-xl sm:mb-2">
						{subone} &bull; {subtwo}
					</p>
					<h1
						className={`font-sans italic font-bold ${
							tags
								? "text-8xl sm:text-4xl"
								: "text-9xl sm:text-6xl"
						} `}
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
