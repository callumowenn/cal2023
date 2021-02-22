import Image from "next/image";
import { useEffect, useState } from "react";

function SpinLoadImage({ src, width, height, layout, className, mobile }) {
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
				className={className + ` absolute top-0 sm:w-full`}
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
				uhh
			</div>
		</>
	);
}

export default SpinLoadImage;
