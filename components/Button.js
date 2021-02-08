import Link from "next/link";

function Button({ text, link }) {
	return (
		<Link href={link}>
			<a>
				<div className="flex items-end justify-center px-8 py-4 w-max bg-white">
					<p className="text-gray-600 text-2xl">{text}</p>
				</div>
			</a>
		</Link>
	);
}

export default Button;
