import Image from "next/image";

function Logo({ src, title }) {
	return (
		<div className="w-32 h-32 rounded-3xl overflow-hidden mr-8 sm:w-24 sm:h-24 sm:rounded-2xl sm:mr-4">
			<Image
				width={128}
				height={128}
				priority
				src={src}
				alt={`${title} logo`}
			/>
		</div>
	);
}

export default Logo;
