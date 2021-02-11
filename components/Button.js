import Link from "next/link";

function Button({ text, link, secondary }) {
	const isInternalLink =
		link && (link.startsWith("/") || link.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link href={link}>
				<a>
					<div
						className={`flex items-end justify-center px-8 py-4 mr-8 w-max sm:px-6 sm:py-3 sm:mr-6 ${
							secondary ? `border border-white` : "bg-white"
						}`}
					>
						<p
							className={` text-2xl sm:text-xl ${
								secondary ? "text-white" : "text-gray-600"
							}`}
						>
							{text}
						</p>
					</div>
				</a>
			</Link>
		);
	} else {
		return (
			<a target="_blank" rel="noopener noreferrer" href={link}>
				<div
					className={`flex items-end justify-center px-8 py-4 mr-8 w-max sm:px-6 sm:py-3 sm:mr-6 ${
						secondary ? `border border-white` : "bg-white"
					}`}
				>
					<p
						className={` text-2xl sm:text-xl ${
							secondary ? "text-white" : "text-gray-600"
						}`}
					>
						{text}
					</p>
				</div>
			</a>
		);
	}
}

export default Button;
