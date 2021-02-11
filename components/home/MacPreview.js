function MacPreview({ pic, vid, alt }) {
	return (
		<div className="flex self-center items-center w-100px h-100px justify-center p-4 mt-4 rounded-xl bg-black bg-opacity-20 sm:hidden">
			{pic ? (
				<img
					style={{ maxHeight: "80px" }}
					src={pic}
					alt={alt}
					title={alt}
				/>
			) : (
				<video
					style={{ maxHeight: "80px" }}
					src={vid}
					alt={alt}
					title={alt}
				/>
			)}
		</div>
	);
}

export default MacPreview;
