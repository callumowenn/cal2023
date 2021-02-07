function MacSidebar({ children }) {
	return (
		<div
			className="flex flex-col p-3 w-130px sm:w-90vw sm:h-12"
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
