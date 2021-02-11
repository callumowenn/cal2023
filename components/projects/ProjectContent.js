function ProjectContent({ content }) {
	return (
		<div className="flex flex-col self-center max-w-750px mb-48 sm:w-screen sm:overflow-hidden sm:px-4">
			{content}
			<p className="hidden text-standout-green"></p>
			<p className="hidden  text-standout-pink"></p>
			<p className="hidden text-standout-purple"></p>
			<p className="hidden text-standout-blue"></p>
			<p className="hidden text-standout-red"></p>
			<p className="hidden text-standout-yellow"></p>
			<p className="hidden text-standout-orange"></p>
		</div>
	);
}

export default ProjectContent;
