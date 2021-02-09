function Tags({ tags }) {
	return (
		<div className="flex">
			{tags.map((tag) => (
				<div
					className="flex py-1 px-3 m-1 rounded-2xl"
					style={{ background: `${tag.colour}33` }}
				>
					<p className=" font-sans" style={{ color: tag.colour }}>
						{tag.name}
					</p>
				</div>
			))}
		</div>
	);
}

export default Tags;
