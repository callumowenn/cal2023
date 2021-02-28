import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Highlights() {
	let highlights = [
		{
			images: ["./assets/bbc.png"],
			heading: "Engineering Apprentice",
			date: "2019 -",
			link: "/bbc",
			alt: "BBC logo",
		},
		{
			images: ["./assets/cnn.png"],
			heading: "Engineering Placement",
			date: "2020",
			link: "/cnn",
			alt: "CNN logo",
		},
		{
			images: [
				"./assets/projects/watchwhere/watchwhere-alt.png",
				"./assets/projects/lightbulb/lightbulb-alt.png",
				"./assets/projects/anculo/anculo.png",
			],
			heading: "Web Design + Development",
			date: "2020 -",
			link: "/projects",
		},
		{
			images: ["👋🏼"],
			heading: "Human Being",
			date: "2000 -",
			link: "/about",
		},
	];

	const floaty = useRef(null);
	const floatyEmoji = useRef(null);
	const highlightDiv = useRef(null);
	const [divX, setDivX] = useState(null);
	const [divY, setDivY] = useState(null);
	const [scrollY, setScrollY] = useState(null);

	useEffect(() => {
		const { x, y } = highlightDiv.current.getBoundingClientRect();
		setDivX(x);
		setDivY(y);
		setScrollY(window.scrollY);

		window.onresize = () => {
			const {
				x: newX,
				y: newY,
			} = highlightDiv.current.getBoundingClientRect();
			setDivX(newX);
			setDivY(newY);
		};

		highlightDiv.current.addEventListener("mouseenter", (e) => {
			floaty.current.style.opacity = 1;

			const { clientX: mouseX, clientY: mouseY } = e;

			floaty.current.style.transform = `translate3d(${mouseX - divX}px, ${
				mouseY - divY - scrollY
			}px, 0)`;
		});

		highlightDiv.current.addEventListener("mousemove", (e) => {
			const { clientX: mouseX, clientY: mouseY } = e;

			floaty.current.style.transform = `translate3d(${mouseX - divX}px, ${
				mouseY - divY - scrollY
			}px, 0)`;
		});

		highlightDiv.current.childNodes[1].addEventListener(
			"mouseenter",
			() => {
				floatyEmoji.current.innerHTML = "🎬";
			}
		);
		highlightDiv.current.childNodes[2].addEventListener(
			"mouseenter",
			() => {
				floatyEmoji.current.innerHTML = "🎥";
			}
		);
		highlightDiv.current.childNodes[3].addEventListener(
			"mouseenter",
			() => {
				floatyEmoji.current.innerHTML = "🖥";
			}
		);
		highlightDiv.current.childNodes[4].addEventListener(
			"mouseenter",
			() => {
				floatyEmoji.current.innerHTML = "👨‍💻";
			}
		);

		highlightDiv.current.addEventListener("mouseleave", () => {
			floaty.current.style.opacity = 0;
		});

		// TODO: remove listeners
		// function cleanup() {}
		// return cleanup()
	});

	return (
		<div
			id="highlights"
			ref={highlightDiv}
			className="grid grid-cols-4 sm:grid-cols-2"
		>
			<div
				ref={floaty}
				className="fixed z-10 rounded-full opacity-0 pointer-events-none transition ease-linear flex items-center justify-center sm:hidden"
			>
				<p ref={floatyEmoji} className="animate-rotate text-9xl"></p>
			</div>
			{highlights.map((highlight) => (
				<Link href={highlight.link}>
					<a
						key={highlight.link}
						className="flex items-center justify-center text-white border-opacity-50 border-r border-b border-white p-12 tab-port:p-4"
					>
						<div className="mt-12 mb-44 flex-grow sm:mb-32">
							<div className="h-12 flex items-end pr-4 sm:h-auto">
								{highlight.images.length == 1 ? (
									highlight.images[0].charAt(0) == "." ? (
										highlight.images[0].charAt(9) == "b" ? (
											<img
												className="h-12 tab-port:h-10 sm:h-8"
												src={highlight.images}
												alt={highlight?.alt}
											/>
										) : (
											<img
												className="h-14 tab-port:h-12 sm:h-10"
												src={highlight.images}
												alt={highlight?.alt}
											/>
										)
									) : (
										<span className="text-5xl sm:text-4xl sm:h-12 sm:mt-2">
											{highlight.images}
										</span>
									)
								) : (
									<div
										id="webHighlights"
										className="flex sm:grid sm:grid-cols-2"
									>
										{highlight.images.map((image) => (
											<img
												className="max-h-12 mr-2 rounded-lg sm:mt-2"
												src={image}
											/>
										))}
									</div>
								)}
							</div>
							<h2 className="italic text-5xl opacity-50 font-light mt-4 h-24 tab-land:text-4xl tab-port:h-20 sm:h-16 tab-port:text-3xl">
								{highlight.heading}
							</h2>
							<p className="mt-4 font-sans opacity-30">
								{highlight.date}
							</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	);
}

export default Highlights;
