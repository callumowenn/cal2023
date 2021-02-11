function InfoBlock({ info, data, dataList }) {
	return (
		<div className="flex flex-col mx-6 sm:ml-0 sm:mr-3 sm:mb-6">
			<p
				className="font-extralight sm:mb-1"
				style={{
					color: "#FFE164",
					fontFamily: "neue-haas-grotesk-display , sans",
				}}
			>
				{info.toUpperCase()}
			</p>
			<p className="font-sans opacity-50 italic sm:text-xs">
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
