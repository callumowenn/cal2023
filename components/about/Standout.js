function Standout({ text, colour, emoji }) {
	return (
		<p
			className="inline-flex font-apple font-black"
			style={{ color: colour }}
		>
			&nbsp;{text}
			<span className=" not-italic inline-flex">&nbsp;{emoji}&nbsp;</span>
		</p>
	);
}

export default Standout;
