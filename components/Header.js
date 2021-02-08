import Block from "./Block";

function Header() {
	return (
		<Block>
			<div className="flex items-center sm:flex-col sm:items-start">
				<img
					className="flex mr-20 sm:mr-0 sm:w-28 sm:mb-8"
					src="./assets/me-flip.png"
					alt="me"
				/>
				<div className="flex flex-col">
					<p className="font-serif opacity-50 text-2xl italic sm:text-xl">
						Hi, i'm
					</p>
					<h1 className="font-serif text-6xl font-bold sm:text-5xl">
						Callum Owen
					</h1>
				</div>
			</div>
		</Block>
	);
}

export default Header;
