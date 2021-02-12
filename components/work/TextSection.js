function TextSection({ children, mb }) {
	return (
		<div
			className={`${
				mb ? "mb-24" : ""
			} mx-24 flex items-center flex-grow justify-center sm:mx-4 sm:my-8`}
		>
			<div style={{ width: "480px" }}>{children}</div>
		</div>
	);
}

export default TextSection;
