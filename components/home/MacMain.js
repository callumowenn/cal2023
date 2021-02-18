function MacMain({ children }) {
	return (
		<div
			className="flex flex-grow flex-col  z-50 "
			style={{ background: "#323232" }}
		>
			{children}
		</div>
	);
}

export default MacMain;
