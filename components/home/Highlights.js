import Link from "next/link";

function Highlights() {
	let highlights = [
		{
			title: "working at BBC",
			images: ["./assets/bbc.png"],
			heading: "Engineering Apprentice",
			date: "2019 -",
			link: "/bbc",
		},
		{
			title: "working at CNN",
			images: ["./assets/cnn.png"],
			heading: "Engineering Placement",
			date: "2020",
			link: "/cnn",
		},
		{
			title: "my websites",
			images: [
				"./assets/projects/watchwhere/watchwhere-alt.png",
				"./assets/projects/lightbulb/lightbulb-alt.png",
				"./assets/projects/anculo/anculo.png",
			],
			heading: "Web Design + Development",
			date: "2020 -",
			link: "/projects",
		},
		{
			title: "my life",
			images: ["👋🏼"],
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
						title={`Read about ${highlight.title}`}
						className="flex items-center justify-center text-white border-opacity-50 border-r border-b border-white p-12"
					>
						<div className="mt-12 mb-36 flex-grow">
							<div className="h-12 flex items-end pr-4">
								{highlight.images.length == 1 ? (
									highlight.images[0].charAt(0) == "." ? (
										<img
											className="max-h-12"
											src={highlight.images}
											alt=""
										/>
									) : (
										<span className="text-5xl">
											{highlight.images}
										</span>
									)
								) : (
									highlight.images.map((image) => (
										<img
											className="max-h-12 mr-2 rounded-lg"
											src={image}
										/>
									))
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
