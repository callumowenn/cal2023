function MobileCreds() {
	let date = new Date();
	return (
		<div className="hidden my-8 p-8 sm:block">
			<img
				className="mb-4 w-28 sm:w-20"
				src="/assets/me-flip.png"
				alt="Me"
			/>
			<p className="text-xl italic sm:text-lg">
				<span className=" text-pink-600 font-sans font-black">
					Designed and developed <br />
				</span>{" "}
				by Callum Owen{" "}
				<span className="opacity-50">
					&copy;{date.getUTCFullYear()}
				</span>
			</p>
		</div>
	);
}

export default MobileCreds;
