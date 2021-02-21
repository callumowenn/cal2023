import coverAspects from "@lib/coverAspects";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./projects/Logo";
import Tags from "./projects/Tags";
import ShareLinks from "./ShareLinks";

function PictureHeader({
	pic,
	aspect,
	section,
	logo,
	subone,
	subtwo,
	slug,
	title,
	date,
	tags,
	height,
}) {
	const size = useWindowSize();

	return (
		<div className="grid">
			<div
				className={`col-start-1  border-b w-50vw ml-auto row-start-1 h-${height} flex z-0 sm:h-96 sm:w-screen`}
			></div>
			<div
				className={`col-start-1 row-start-1 absolute w-main h-${height} flex flex-row-reverse z-0 pointer-events-none sm:h-96 sm:w-screen`}
				style={{ clipPath: " inset(0 auto auto 0)" }}
			>
				<div className="flex-grow sm:hidden"></div>
				<div
					className={`flex-grow fixed flex sm:w-screen w-50vw sm:max-w-none sm:h-96 opacity-25 object-cover h-${height} object-left-top sm:static`}
					style={{ backfaceVisibility: "hidden" }}
				>
					{size.width > 500 ? (
						<Image
							className="object-cover object-left-top"
							src={pic}
							// priority
							layout="intrinsic"
							width={coverAspects[aspect].width}
							height={coverAspects[aspect].height}
						/>
					) : (
						<Image
							className="object-cover object-left-top"
							src={pic}
							// priority
							layout="intrinsic"
							width={coverAspects[`${aspect}-preview`].width}
							height={coverAspects[`${aspect}-preview`].height}
						/>
					)}
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 mr-0 flex items-center z-10 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:ml-4 sm:mr-0 sm:transform sm:-translate-y-12">
					{tags ? (
						<Logo src={logo} title={title} />
					) : (
						<Link href={`/${section}`}>
							<a className="flex w-max">
								<Image
									src={`/assets/${section}.png`}
									width={section == "bbc" ? 223 : 168}
									height={section == "bbc" ? 64 : 80}
								/>
								{/* <img
									className="max-h-20 "
									src={`/assets/${section}.png`}
								/> */}
							</a>
						</Link>
					)}

					<p className="font-sans text-half-white text-base mt-8 mb-4 sm:text-xs sm:mb-2">
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
					{slug ? (
						<ShareLinks
							title={title}
							section={section}
							slug={slug}
						/>
					) : (
						""
					)}
				</div>
			</div>
			<div className="hidden h-screen"></div>
			<div className="hidden h-90vh"></div>
		</div>
	);
}

export default PictureHeader;

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}

			// Add event listener
			window.addEventListener("resize", handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}
