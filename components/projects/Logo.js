function Logo({ src, title }) {
	return (
		<img
			className="w-32 h-32 rounded-3xl mr-8 sm:w-24 sm:h-24 sm:rounded-2xl sm:mr-4"
			src={src}
			alt={`${title} logo`}
		/>
	);
}

export default Logo;
