import tagData from "@lib/tags";

function Tags({ tags }) {
	return (
		<div className="flex mt-4 sm:flex-wrap sm:mt-2">
			{tags.map((tag) => (
				<a
					href={tagData[tag].link}
					className="flex py-1 px-3 m-1 rounded-2xl hover:opacity-90 sm:ml-0 sm:mr-2"
					style={{ background: `${tagData[tag].colour}33` }}
					target="_blank"
					rel="noopener noreferrer"
				>
					<p
						className=" font-sans sm:text-sm"
						style={{ color: tagData[tag].colour }}
					>
						{tag}
					</p>
				</a>
			))}
		</div>
	);
}

export default Tags;
