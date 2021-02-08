import Button from "@components/Button";

function Better() {
	return (
		<div className="grid " style={{ background: "#111" }}>
			<div className="col-start-1 row-start-1 z-10 p-24 sm:p-12">
				<p className="text-5xl italic mb-36">
					You probably deserve <br />{" "}
					<span className="font-sans font-black text-yellow-400">
						a better website
					</span>
					.
				</p>

				<p className="font-sans italic font-bold text-2xl mb-4 opacity-50">
					{" "}
					Want me to make you one?
				</p>
				<Button text="Hit me up" link="/contact" />
			</div>
			<div className="z-0 col-start-1 row-start-1 bg-doubs bg-cover bg-center opacity-20"></div>
		</div>
	);
}

export default Better;
