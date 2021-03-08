function MacText({ me, text }) {
	return (
		<div
			className={` max-w-xs h-auto my-3 px-4 text-white rounded-3xl w-max sm:max-w-mobile-text ${
				me ? "self-end bg-bg-text" : "bg-incoming"
			}`}
			style={{
				lineHeight: "1.2rem",
				paddingTop: "10px",
				paddingBottom: "10px",
			}}
		>
			<div>
				<span>{text}</span>
			</div>
		</div>
	);
}

export default MacText;
