import useSWR from "swr";
import fetcher from "@lib/fetcher";

function SpotifyPlaying({ className }) {
	const { data } = useSWR("/api/spotify", fetcher);
	return (
		<div className="flex flex-grow items-center justify-center py-32 sm:py-16 border-b border-t bg-black bg-opacity-10 border-half-white">
			<div className={`flex items-center mx-8 ` + className}>
				{data?.isPlaying ? (
					<>
						<a
							href={data?.songUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-shrink-0 self-start  mr-4 hover:opacity-80"
						>
							<img
								className="w-24 h-24 rounded-xl"
								src={data?.albumImageUrl}
								alt={`Artwork for ${data?.title} by ${data?.artist}`}
							/>
						</a>
						<div className="flex flex-col">
							<a
								href="https://open.spotify.com/user/callumowen-gb?si=lGbiyYvbTUCa9rW8gCre7g&nd=1"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center mb-2 group"
							>
								<div className="w-6 h-6 mr-2">
									<img
										src="/assets/spotify.png"
										alt="Spotify logo"
									/>
								</div>
								<p className="font-sans group-hover:underline text-xs text-half-white">
									currently playing
								</p>
							</a>

							<a
								href={data?.songUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="font-sans text-white text-xl sm:text-base mb-1 hover:underline"
							>
								{data?.title}
							</a>
							<p className="font-sans text-half-white sm:text-xs">
								{data?.artist}
							</p>
						</div>
					</>
				) : (
					<a
						href="https://open.spotify.com/user/callumowen-gb?si=lGbiyYvbTUCa9rW8gCre7g&nd=1"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center mb-2 group"
					>
						<div className="w-6 h-6 mr-2">
							<img src="/assets/spotify.png" alt="Spotify logo" />
						</div>
						<p className="font-sans group-hover:underline text-xs text-half-white">
							not currently playing
						</p>
					</a>
				)}
			</div>
		</div>
	);
}

export default SpotifyPlaying;
