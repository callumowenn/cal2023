function MacText({ me, text }) {
	return (
		<div
			className={` max-w-xs h-auto my-3 py-2 px-4 text-white rounded-3xl w-max ${
				me ? "self-end bg-blue-500" : "bg-incoming"
			}`}
			style={{ lineHeight: "1.2rem" }}
		>
			<div>
				<span>{text}</span>
			</div>
		</div>
	);
}

export default MacText;
