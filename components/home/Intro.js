import Image from "next/image";
import Link from "next/link";

function Intro() {
	return (
		<div className="tab-land:mx-16 z-10 flex-1 flex flex-grow items-center tab-port:transform tab-port:-translate-y-32  pointer-events-auto  justify-center sm:mx-8 sm:mt-12 sm:mb-0 ">
			<div className="flex flex-col max-w-500px my-28 tab-port:my-0">
				<h3 className=" font-sans text-3xl sm:text-2xl italic font-bold mb-8 ">
					I’ve been lucky enough to get involved with some pretty
					amazing projects.
				</h3>
				<p className="text-2xl sm:text text-half-white sm:mb-8 font-light sm:pl-4 sm:border-l-2 sm:border-half-white">
					As a BBC apprentice, I'm able to explore all corners of
					broadcast production and software. Having always been drawn
					to software by the combination of functionality and design,
					I’ve recently enjoyed creating websites and apps for side
					projects and small businesses.{" "}
					<span className="font-sans font-bold italic text-standout-green">
						what a nerd!
					</span>{" "}
					<span className="text-white">🤓</span>
					<span className="sm:hidden">
						<br />
						<br />
						From being part of the team that engineered CNN’s move
						to their{" "}
						<Link href="/cnn/a-new-home">
							<a className="text-white hover:underline focus:underline">
								shiny, new London bureau
							</a>
						</Link>
						, to getting hands on with innovative tech to power
						remote broadcast workflows like NDI and SRT; it’s
						impossible to get bored in this crazy world of tech.
					</span>
				</p>
				<div className="flex self-center mt-8 sm:mt-4">
					<Link href="/bbc">
						<a className="self-center sm:self-end mr-16 sm:mr-0 sm:mb-8 opacity-50 group transition hover:opacity-100 focus:opacity-100">
							<div className="flex items-center">
								<p className="font-sans text-xl italic mr-4 group-hover:underline">
									Life in the BBC
								</p>
								<div className="flex rounded-full p-2 bg-white">
									<Image
										width={35}
										height={35}
										priority
										src="/assets/arrow-dark.png"
										alt="arrow"
									/>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/projects">
						<a className="self-center sm:hidden sm:self-end opacity-50 group transition hover:opacity-100 focus:opacity-100">
							<div className="flex items-center">
								<p className="font-sans text-xl italic mr-4 group-hover:underline">
									Projects
								</p>
								<div className="flex rounded-full p-2 bg-white">
									<Image
										width={35}
										height={35}
										priority
										src="/assets/arrow-dark.png"
										alt="arrow"
									/>
								</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Intro;
