import Image from "next/image";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurUpImage({ src, blurhash, width, height, layout, classes }) {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<Image
				className={classes}
				src={src}
				width={width}
				layout={layout}
				height={height}
				onLoad={() => {
					setLoaded(true);
				}}
			/>
			<div
				className={`absolute top-0 ${loaded ? " opacity-0" : ""}`}
				style={{ transition: "0.5s" }}
			>
				<Blurhash
					hash={blurhash}
					width={width}
					height={width}
					resolutionX={100}
					resolutionY={100}
					punch={1}
				/>
			</div>
		</>
	);
}

export default BlurUpImage;
