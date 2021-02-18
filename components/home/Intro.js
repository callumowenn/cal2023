import Image from "next/image";
import Link from "next/link";

function Intro() {
	return (
		<div className="my-24 mx-10 flex items-center flex-grow justify-center sm:mx-4 sm:my-16">
			<div className="flex flex-col my-28" style={{ width: "500px" }}>
				<h3 className=" font-sans text-3xl italic font-bold mb-8 sm:text-2xl">
					I’ve been lucky enough to get involved with some pretty
					amazing projects.
				</h3>
				<p className="text-2xl text-half-white font-light">
					From being part of the team that engineered CNN’s move to
					their{" "}
					<Link href="/cnn/a-new-home">
						<a className="text-white hover:underline focus:underline">
							shiny, new London bureau
						</a>
					</Link>
					, to getting hands on with innovative tech like NDI and SRT
					to power remote broadcast workflows; it’s impossible to get
					bored in this crazy world of tech.
					<br />
					<br />
					As a BBC apprentice, I'm able to explore all corners of
					broadcast production and software. Having always been drawn
					to software by the combination of functionality and design,
					I’ve recently enjoyed creating websites and apps for side
					projects and small businesses.{" "}
					<span
						className="font-sans font-bold italic"
						style={{ color: "#A1D53F" }}
					>
						what a nerd!
					</span>{" "}
					<span style={{ color: "white" }}>🤓</span>
				</p>
				<div className="flex self-center mt-16 ">
					<Link href="/bbc">
						<a className="self-center sm:self-end mr-16 sm:mr-0 sm:mb-8 opacity-50 group transition hover:opacity-100 focus:opacity-100">
							<div className="flex items-center">
								<p className="font-sans text-xl italic mr-4 group-hover:underline">
									Life at BBC
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
