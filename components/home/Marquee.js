import Image from "next/image";

function Marquee() {
	return (
		<div className="flex items-center border-t border-b h-20 border-opacity-50 border-white py-3 overflow-hidden">
			<ul className="flex opacity-80 flex-shrink-0 animate-scrolling italic  text-5xl">
				<li className="flex items-center">
					<div className="max-h-12">
						{/* <img src={feather} /> */}
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/feather.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#28d3d9" }}>
						DESIGNER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/logo-38.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#db678b" }}>
						DEVELOPER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/logo-19.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#22c4e0" }}>
						BIT OF A NERD
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/cube.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#db67be" }}>
						ENGINEER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/sunset-1.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#159fef" }}>
						CREATOR
					</span>
					&nbsp;
				</li>
				<li className="flex items-center">
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/feather.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#28d3d9" }}>
						DESIGNER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/logo-38.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#db678b" }}>
						DEVELOPER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/logo-19.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#22c4e0" }}>
						BIT OF A NERD
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/cube.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#db67be" }}>
						ENGINEER
					</span>
					&nbsp;
					<div className="max-h-12">
						<Image
							height={48}
							width={48}
							priority
							src="/assets/svg/sunset-1.svg"
							alt=""
						/>
					</div>
					&nbsp;
					<span style={{ opacity: "0.5", color: "#159fef" }}>
						CREATOR
					</span>
					&nbsp;
				</li>
			</ul>
		</div>
	);
}

export default Marquee;
