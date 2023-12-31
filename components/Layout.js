import Head from "next/head";
import Footer from "./Footer";
import Nav from "@components/Nav";
import Menu from "./Menu";
import SpotifyPlaying from "./SpotifyPlaying";
import { useViews } from "@lib/views";
import useSWR from "swr";
import fetcher from "@lib/fetcher";
import { useEffect, useState } from "react";
import log from "@lib/log";

function Layout({ children }) {
	const views = useViews();
	const [mounted, setMounted] = useState(false);
	const { data } = useSWR(
		mounted && !views.data ? "/api/views" : null,
		fetcher
	);
	views.data ?? views.setData(data);

	useEffect(() => {
		setMounted(true);
		log();
	}, []);

	return (
		<div className="flex flex-row w-screen bg-main-bg min-h-screen bg-fixed bg-cover sm:flex-col sm:bg-none">
			<Head>
				<title>
					Callum Owen - BBC engineering apprentice and self-taught web
					developer
				</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<link
					href="splashscreens/iphone5_splash.png"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/iphone6_splash.png"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/iphoneplus_splash.png"
					media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/iphonex_splash.png"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/iphonexr_splash.png"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/iphonexsmax_splash.png"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/ipad_splash.png"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/ipadpro1_splash.png"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/ipadpro3_splash.png"
					media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<link
					href="splashscreens/ipadpro2_splash.png"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
					rel="apple-touch-startup-image"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/favicon/browserconfig.xml"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="preload" as="image" href="/assets/blur.png"></link>
				<link
					rel="preload"
					as="image"
					href="/assets/me-flip.png"
				></link>

				<link
					rel="stylesheet"
					href="https://use.typekit.net/hbm6nog.css"
				/>
				<link
					rel="preload"
					href="https://use.typekit.net/hbm6nog.css"
					as="style"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-TY7B1JQ2YF"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

  						gtag('config', 'G-TY7B1JQ2YF');`,
					}}
				/>
			</Head>
			<Nav />
			<main className="flex flex-col flex-grow w-main sm:w-screen">
				<Menu />
				{children}
				<SpotifyPlaying />
				<Footer />
			</main>
		</div>
	);
}

export default Layout;
