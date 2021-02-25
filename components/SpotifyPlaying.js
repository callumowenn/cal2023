import useSWR from "swr";
import fetcher from "@lib/fetcher";

function SpotifyPlaying({ className }) {
	const { data } = useSWR("/api/spotify", fetcher);
	if (data) {
		return (
			<div className="flex flex-grow items-center justify-center my-16">
				<div className={`flex items-center mx-4 ` + className}>
					<div className="w-24 justify-start h-24 mr-4">
						<img className="rounded-xl" src={data?.albumImageUrl} />
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

						<p className="font-sans text-xl mb-1">{data?.title}</p>
						<p className="font-sans text-half-white">
							{data?.artist}
						</p>
					</div>
				</div>
			</div>
		);
	} else {
		return "";
	}
}

export default SpotifyPlaying;
