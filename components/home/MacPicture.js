function MacPicture({ pic, vid, alt }) {
	return (
		<div className="flex flex-grow flex-col items-center justify-center">
			{vid ? (
				<video
					className="max-h-400px max-w-500px sm:max-w-80vw"
					muted
					autoPlay
					loop
					playsinline
					src={vid}
					alt={alt}
					title={alt}
				></video>
			) : (
				<img
					className="max-h-400px max-w-500px sm:max-w-80vw"
					src={pic}
					alt={alt}
					title={alt}
				/>
			)}
		</div>
	);
}

export default MacPicture;
