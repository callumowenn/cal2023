import Link from "next/link";
import { useRouter } from "next/router";

function FooterApp({ slug, img, text, className, emoji }) {
	const router = useRouter();
	return (
		<div
			className={`app flex transition items-center h-auto justify-center  ${slug} `}
		>
			<Link href={`/${slug}`}>
				<a className="flex group flex-col items-center">
					<div className="w-3 h-3 mt-2 rounded-full bg-none"></div>
					<div
						className={`app-back transition w-32 h-32 sm:w-24 sm:h-24 mb-2 shadow-2xl ${className} flex items-center justify-center rounded-3xl`}
					>
						{img ? (
							<img className="w-24 sm:w-16" src={img} alt="" />
						) : (
							""
						)}
						{emoji ? (
							<span className="not-italic text-6xl sm:text-5xl w-min text-white">
								{emoji}
							</span>
						) : (
							""
						)}
					</div>
					<p className="flex font-apple sm:text-base items-center text-xl font-light not-italic group-hover:text-white group-hover:underline">
						{text}
						<div className="w-4 opacity-50 h-4 ml-2 sm:w-3 sm:h-3">
							<svg
								version="1.1"
								id="Capa_1"
								x="0px"
								y="0px"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<g>
									<g>
										<path
											d="M507.296,4.704c-3.36-3.36-8.032-5.056-12.768-4.64L370.08,11.392c-6.176,0.576-11.488,4.672-13.6,10.496
			s-0.672,12.384,3.712,16.768l33.952,33.952L224.448,242.272c-6.24,6.24-6.24,16.384,0,22.624l22.624,22.624
			c6.272,6.272,16.384,6.272,22.656,0.032l169.696-169.696l33.952,33.952c4.384,4.384,10.912,5.824,16.768,3.744
			c2.24-0.832,4.224-2.112,5.856-3.744c2.592-2.592,4.288-6.048,4.608-9.888l11.328-124.448
			C512.352,12.736,510.656,8.064,507.296,4.704z"
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d="M448,192v256H64V64h256V0H32C14.304,0,0,14.304,0,32v448c0,17.664,14.304,32,32,32h448c17.664,0,32-14.336,32-32V192H448z
			"
										/>
									</g>
								</g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
							</svg>
						</div>
					</p>
					{router.pathname == `/${slug}` ? (
						<div
							className={`w-3 h-3 mt-2 rounded-full ${className}`}
						></div>
					) : (
						<div className="w-3 h-3 mt-2 rounded-full bg-none"></div>
					)}
				</a>
			</Link>
		</div>
	);
}

export default FooterApp;
