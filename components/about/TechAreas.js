import Tags from "@components/projects/Tags";

function TechAreas() {
	let areas = [
		{
			name: "Web Development",
			emoji: "🖥",
			tags: ["Node.js", "React"],
		},
		{
			name: "UX/UI",
			emoji: "🎨",
			tags: ["Digital Wellness"],
		},
		{
			name: "Broadcast Production",
			emoji: "🎥",
			tags: ["SRT", "NDI"],
		},
		{
			name: "Cloud Computing",
			emoji: "☁️",
			tags: ["Serverless", "Distribution"],
		},
		{
			name: "Machine Learning",
			emoji: "🦾",
			tags: ["TensorFlow"],
		},
	];
	return (
		<div className="flex flex-col  my-20">
			{areas.map((area) => (
				<div className="flex w-full self-start justify-between items-center my-8 sm:flex-col  sm:my-8">
					<div className="italic sm:self-start text-4xl text-half-white items-center font-bold flex justify-center sm:text-2xl sm:justify-start sm:mb-4">
						<span className="text-white not-italic text-7xl mr-8">
							{area.emoji}
						</span>{" "}
						{area.name}
					</div>
					<div className="justify-self-end sm:self-start">
						<Tags tags={area.tags} />
					</div>
				</div>
			))}
		</div>
	);
}

export default TechAreas;
