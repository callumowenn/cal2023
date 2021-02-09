function InfoBlock({ info, data, dataList }) {
	return (
		<div className="flex flex-col mx-12">
			<p
				className="font-extralight"
				style={{
					color: "#FFE164",
					fontFamily: "neue-haas-grotesk-display , sans",
				}}
			>
				{info.toUpperCase()}
			</p>
			<p className="font-sans opacity-50 italic">
				{data
					? data
					: dataList?.map((data) => (
							<>
								{data}
								<br />
							</>
					  ))}
			</p>
		</div>
	);
}

export default InfoBlock;
