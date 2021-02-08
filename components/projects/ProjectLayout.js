function ProjectLayout({ children, frontMatter }) {
	console.log(frontMatter);
	return (
		<div className="mx-48">
			<div>{children}</div>
		</div>
	);
}

export default ProjectLayout;
