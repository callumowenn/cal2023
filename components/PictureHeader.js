import coverAspects from "@lib/coverAspects";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlurUpImage from "./BlurUpImage";
import Logo from "./projects/Logo";
import Tags from "./projects/Tags";
import ShareLinks from "./ShareLinks";

function PictureHeader({
	pic,
	blurhash,
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
		<div className="grid tab-port:max-w-main tab-port:overflow-hidden sm:max-w-none">
			<div
				className={`col-start-1  border-b border-half-white w-50vw ml-auto tab-port:ml-0 row-start-1 h-${height} flex z-0 tab-port:w-main sm:h-96 sm:w-screen`}
			></div>
			<div
				className={`col-start-1 row-start-1 absolute w-main h-${height} flex flex-row-reverse z-0 pointer-events-none tab-port:w-main sm:h-96 sm:w-screen`}
				style={{ clipPath: " inset(0 0 0 0)" }}
			>
				<div className="flex-grow sm:hidden"></div>
				<div
					className={`flex-grow fixed flex tab-port:w-main sm:w-screen tab-port:overflow-hidden w-50vw sm:max-w-none sm:h-96  opacity-25 tab-port:opacity-15 sm:opacity-50 object-cover h-${height} object-left-top tab-port:relative`}
					style={{ backfaceVisibility: "hidden" }}
				>
					{size.width > 500 ? (
						<BlurUpImage
							className="object-cover object-left-top "
							blurhash={blurhash}
							src={pic}
							alt="cover photo"
							layout="intrinsic"
							width={coverAspects[aspect].width}
							height={coverAspects[aspect].height}
						/>
					) : (
						<BlurUpImage
							className="object-cover object-left-top"
							src={pic}
							alt="cover photo"
							blurhash={blurhash}
							mobile
							layout="intrinsic"
							width={coverAspects[`${aspect}-preview`].width}
							height={coverAspects[`${aspect}-preview`].height}
						/>
					)}
				</div>
			</div>
			<div className="col-start-1 row-start-1 m-16 mr-0 flex items-center z-10 tab-port:mx-0 sm:mx-4 sm:my-0 sm:row-start-2">
				<div className="mx-16 sm:ml-4 sm:mr-0 sm:transform sm:-translate-y-12">
					{tags ? (
						<>
							<Link href={`/projects`}>
								<a className="flex opacity-40 transition items-center w-max sm:hidden mb-8 hover:opacity-100 focus:opacity-100">
									<div className="h-3 w-3  mr-2">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="long-arrow-alt-left"
											class="svg-inline--fa fa-long-arrow-alt-left fa-w-14"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
										>
											<path
												fill="#ffffff"
												d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
											></path>
										</svg>
									</div>
									<p className="font-sans italic text-xs">
										projects
									</p>
								</a>
							</Link>
							<Logo src={logo} title={title} />
						</>
					) : (
						<Link href={`/${section}`}>
							<a className="flex w-max">
								<Image
									src={`/assets/${section}.png`}
									width={section == "bbc" ? 223 : 168}
									height={section == "bbc" ? 64 : 80}
								/>
							</a>
						</Link>
					)}

					<p className="font-sans text-half-white tab-port:text-white tab-port:opacity-75 sm:text-half-white sm:opacity-100 text-base mt-8 mb-4 sm:text-xs sm:mb-2">
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
								? "text-8xl tab-port:text-7xl sm:text-4xl"
								: "text-9xl tab-port:text-8xl sm:text-4xl"
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
