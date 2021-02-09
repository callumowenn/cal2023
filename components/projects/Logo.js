function Logo({ src, title }) {
	return (
		<img
			className="w-32 h-32 rounded-3xl mr-8"
			src={src}
			alt={`${title} logo`}
		/>
	);
}

export default Logo;
