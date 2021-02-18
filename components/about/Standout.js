function Standout({ text, colour, emoji }) {
	return (
		<span
			className="inline font-apple font-black"
			style={{ color: colour }}
		>
			{text} <span className="not-italic">{emoji}</span>
		</span>
	);
}

export default Standout;
