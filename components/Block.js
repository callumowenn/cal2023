function Block({ children }) {
	return (
		<div className="my-32 mx-10 flex items-center flex-grow justify-center tab-port:my-64 sm:my-24 sm:mx-6 sm:items-start sm:justify-start">
			{children}
		</div>
	);
}

export default Block;
