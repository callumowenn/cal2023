import Block from "@components/Block";

function Intro() {
	return (
		<Block>
			<div className=" my-28" style={{ width: "480px" }}>
				<p className=" font-sans text-3xl font-bold italic mb-12">
					I’ve been lucky enough to get involved with some pretty
					amazing projects.
				</p>
				<p className="text-2xl" style={{ color: "#ffffff80" }}>
					From being part of the team that engineered CNN’s move to
					their{" "}
					<a
						href="https://160oldstreet.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:underline"
					>
						shiny, new London bureau
					</a>
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
		</Block>
	);
}

export default Intro;
