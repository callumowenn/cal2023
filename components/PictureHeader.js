import coverAspects from "@lib/coverAspects";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Logo from "./projects/Logo";
import Tags from "./projects/Tags";

function PictureHeader({
	pic,
	aspect,
	section,
	logo,
	subone,
	subtwo,
	title,
	date,
	tags,
	height,
}) {
	return (
		<div className="grid">
			<div
				className={`col-start-1  border-b w-50vw ml-auto row-start-1 h-${height} flex z-0 sm:h-96 sm:w-screen`}
			></div>
			<div
				className={`col-start-1 row-start-1 absolute w-main h-${height} flex flex-row-reverse z-0 pointer-events-none sm:h-96 sm:w-screen`}
				style={{ clip: "rect(0, auto, auto, 0)" }}
			>
				<div className="flex-grow sm:hidden"></div>
				<div
					className={`flex-grow fixed flex sm:w-screen w-50vw sm:max-w-none sm:h-96 opacity-25 object-cover h-${height} object-left-top sm:static`}
					style={{ backfaceVisibility: "hidden" }}
				>
					<Image
						className="object-cover object-left-top"
						src={pic}
						priority
						layout="intrinsic"
						width={coverAspects[aspect].width}
						height={coverAspects[aspect].height}
					/>
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 mr-0 flex items-center z-10 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:ml-4 sm:mr-0 sm:transform sm:-translate-y-12">
					{tags ? (
						<Logo src={logo} title={title} />
					) : (
						<Link href={`/${section}`}>
							<a className="flex w-max">
								<img
									className="max-h-16 "
									src={`/assets/${section}.png`}
								/>
							</a>
						</Link>
					)}

					<p className="font-sans text-half-white text-base mt-8 mb-4 sm:mb-2">
						{date ? (
							<span className>
								{format(parseISO(date), "MMMM dd, yyyy")} &bull;
							</span>
						) : (
							""
						)}
						{subone} &bull; {subtwo}{" "}
					</p>
					<h1
						className={`font-sans italic font-bold ${
							tags
								? "text-8xl sm:text-4xl"
								: "text-9xl sm:text-4xl"
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
