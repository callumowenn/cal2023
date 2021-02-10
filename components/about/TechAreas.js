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
		<div className="flex flex-col my-20">
			{areas.map((area) => (
				<div className="flex justify-between my-4">
					<div className="italic text-2xl text-half-white font-bold flex justify-center">
						<span className="text-white not-italic text-4xl mr-4">
							{area.emoji}
						</span>{" "}
						{area.name}
					</div>
					<div>
						<Tags tags={area.tags} />
					</div>
				</div>
			))}
		</div>
	);
}

export default TechAreas;
