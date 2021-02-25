import useSWR from "swr";
import fetcher from "@lib/fetcher";

function SpotifyPlaying({ className }) {
	const { data } = useSWR("/api/spotify", fetcher);
	if (data) {
		return (
			<div className="flex flex-grow items-center justify-center py-32 sm:py-16 border-b border-t bg-black bg-opacity-10 border-half-white">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://open.spotify.com/user/callumowen-gb?si=lGbiyYvbTUCa9rW8gCre7g"
					className={`flex items-center mx-8 ` + className}
				>
					<div className="flex flex-shrink-0 self-start  mr-4">
						<img
							className="w-24 h-24 rounded-xl"
							src={data?.albumImageUrl}
						/>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center mb-2">
							<div className="w-6 h-6 mr-2">
								<img
									src="/assets/spotify.png"
									alt="Spotify logo"
								/>
							</div>
							<p className="font-sans text-xs text-half-white">
								currently playing
							</p>
						</div>

						<p className="font-sans text-xl sm:text-lg mb-1">
							{data?.title}
						</p>
						<p className="font-sans text-half-white sm:text-sm">
							{data?.artist}
						</p>
					</div>
				</a>
			</div>
		);
	} else {
		return "";
	}
}

export default SpotifyPlaying;
