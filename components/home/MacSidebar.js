function MacSidebar({ children }) {
	return (
		<div
			id="sidebar"
			className="flex flex-col p-4 w-130px rounded-l-2xl sm:w-90vw sm:h-16"
			style={{
				backdropFilter: "blur(50px)",
				WebkitBackdropFilter: "blur(50px)",
				background: "#11111180",
			}}
		>
			{children}
		</div>
	);
}

export default MacSidebar;
