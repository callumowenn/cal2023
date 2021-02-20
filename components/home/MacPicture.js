import Image from "next/image";

function MacPicture({ pic, aspect, alt }) {
	let dimensions = {
		landscape: {
			width: 500,
			height: 375,
		},
		portrait: {
			width: 300,
			height: 400,
		},
		"portrait-thin": { width: 225, height: 400 },
	};
	return (
		<div className="flex flex-grow flex-col items-center justify-center">
			<div className="max-h-400px max-w-500px sm:max-w-80vw">
				<Image
					src={pic}
					alt={alt}
					width={dimensions[aspect].width}
					height={dimensions[aspect].height}
					loading="lazy"
					layout="intrinsic"
					title={alt}
				/>
			</div>
		</div>
	);
}

export default MacPicture;
