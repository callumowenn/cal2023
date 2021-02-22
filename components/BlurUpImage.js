import Image from "next/image";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurUpImage({ src, blurhash, width, height, layout, classes }) {
	const [loaded, setLoaded] = useState(false);

	const loadImageWithPromise = (src) =>
		new Promise((resolve) => {
			const image = document.createElement("img");
			image.onload = resolve;
			image.src = src;
		});

	const awaitImage = async () => {
		try {
			await loadImageWithPromise(src);
			setLoaded(true);
		} catch {
			console.error(`Unable to load ${src}`);
		}
	};

	useEffect(() => {
		awaitImage();
	});

	return (
		<>
			<Image
				className={classes + ` absolute top-0`}
				src={src}
				priority
				width={width}
				layout={layout}
				height={height}
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
