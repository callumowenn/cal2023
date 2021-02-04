import Link from "next/link";

function Highlights() {
	let highlights = [
		{
			image: "./assets/bbc.png",
			heading: "Engineering Apprentice",
			date: "2019 -",
			link: "/bbc",
		},
		{
			image: "./assets/cnn.png",
			heading: "Engineering Placement",
			date: "2020",
			link: "/cnn",
		},
		{
			image: "./assets/projects/watchwhere/watchwhere.png",
			heading: "Web Design + Development",
			date: "2020 -",
			link: "/projects",
		},
		{
			image: "",
			heading: "Human Being",
			date: "2000 -",
			link: "/about",
		},
	];
	return (
		<div id="highlights" className="grid grid-cols-4">
			{highlights.map((highlight) => (
				<Link href={highlight.link}>
					<a
						key={highlight.link}
						className="flex items-center justify-center text-white border-opacity-50 border-r border-b border-white p-12"
					>
						<div className="mt-12 mb-36 flex-grow">
							<div className="h-12 flex items-end pr-4">
								{highlight.image != "" ? (
									<img
										className="max-h-12"
										src={highlight.image}
										alt=""
									/>
								) : (
									<span className="text-5xl">👋🏼</span>
								)}
							</div>
							<h2 className="italic text-5xl opacity-50 font-light mt-4 h-24">
								{highlight.heading}
							</h2>
							<p className="mt-4 font-sans opacity-30">
								{highlight.date}
							</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	);
}

export default Highlights;
