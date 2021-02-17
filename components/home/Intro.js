import Link from "next/link";

function Intro() {
	return (
		<div className="my-32 mx-10 flex items-center flex-grow justify-center sm:mx-4">
			<div className=" my-28" style={{ width: "480px" }}>
				<p className=" font-sans text-3xl font-bold italic mb-12 sm:text-2xl">
					I’ve been lucky enough to get involved with some pretty
					amazing projects.
				</p>
				<p
					className="text-2xl sm:text-xl"
					style={{ color: "#ffffff80" }}
				>
					From being part of the team that engineered CNN’s move to
					their{" "}
					<Link href="/cnn/a-new-home">
						<a className="text-white hover:underline">
							shiny, new London bureau
						</a>
					</Link>
					, to getting hands on with innovative tech like NDI and SRT
					to power remote broadcast workflows; it’s impossible to get
					bored in this crazy world of tech.
					<br />
					<br /> Having always been drawn to software by the
					combination of functionality and design, I’ve recently
					enjoyed creating websites and apps for side projects and
					small businesses.{" "}
					<span
						className="font-sans font-bold italic"
						style={{ color: "#A1D53F" }}
					>
						what a nerd!
					</span>{" "}
					<span style={{ color: "white" }}>🤓</span>
				</p>
			</div>
		</div>
	);
}

export default Intro;
