function MacPicture({ pic, vid, alt }) {
	return (
		<div className="flex flex-grow flex-col items-center justify-center">
			<img
				className="max-h-400px max-w-500px sm:max-w-80vw"
				src={pic}
				alt={alt}
				title={alt}
			/>
		</div>
	);
}

export default MacPicture;
