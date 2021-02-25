import Image from "next/image";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurUpImage({
	src,
	blurhash,
	width,
	height,
	alt,
	layout,
	className,
	mobile,
	next,
}) {
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
		if (next) {
			awaitImage();
		}
	});

	return (
		<>
			{next ? (
				<Image
					className={className + ` absolute top-0 sm:w-full`}
					src={src}
					alt={alt}
					width={width}
					layout={layout}
					height={height}
				/>
			) : (
				<img
					className={
						className +
						` absolute top-0 w-full h-full min-h-full min-w-full sm:w-full`
					}
					src={src}
					alt={alt}
					width={width}
					layout={layout}
					height={height}
					onLoad={() => setLoaded(true)}
				/>
			)}
			<div
				className={`absolute top-0 ${loaded ? " opacity-0" : ""}`}
				style={{ transition: "0.5s" }}
			>
				<Blurhash
					hash={blurhash}
					width={1400}
					height={1400}
					resolutionX={100}
					resolutionY={100}
					punch={1}
				/>
			</div>
		</>
	);
}

export default BlurUpImage;
