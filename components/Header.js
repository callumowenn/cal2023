function Header() {
	return (
		<div className="m-28 flex items-center flex-grow justify-center">
			<div className="flex items-center">
				<img
					className="flex mr-20"
					src="./assets/me-flip.png"
					alt="me"
				/>
				<div className="flex flex-col">
					<p className="font-serif opacity-50 text-2xl italic">
						Hi, i'm
					</p>
					<h1 className="font-serif text-6xl font-bold">
						Callum Owen
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Header;
