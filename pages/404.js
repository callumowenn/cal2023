import Head from "next/head";

function four() {
	return (
		<>
			<Head>
				<title>404 - Callum Owen</title>
			</Head>
			<div className="flex-grow flex flex-col items-center justify-center text-7xl h-80vh">
				<h1 className="font-sans font-black italic  opacity-70 transform -translate-x-4">
					404
				</h1>
				<h1 className="font-sans font-black italic  opacity-60 transform -translate-x-2">
					404
				</h1>
				<h1 className="font-sans font-black italic  opacity-50 transform -translate-x-0">
					404
				</h1>
				<h1 className="font-sans font-black italic  opacity-30 transform translate-x-2">
					404
				</h1>
				<h1 className="font-sans font-black italic  opacity-10 transform translate-x-4">
					404
				</h1>
			</div>
		</>
	);
}

export default four;
