import Head from "next/head";
import Footer from "./Footer";
import Nav from "@components/Nav";
import Menu from "./Menu";
import MobileCreds from "./MobileCreds";

function Layout({ children }) {
	return (
		<div className="flex flex-row w-screen bg-main-bg min-h-screen bg-fixed bg-cover sm:flex-col">
			<Head>
				<title>Callum Owen</title>
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
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
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
				<link rel="preload" href="/fonts/typekit.css" as="style" />
				<link rel="stylesheet" href="/fonts/typekit.css" />
			</Head>
			<Nav />
			<main className="flex flex-col flex-grow w-main sm:w-screen">
				<Menu />
				{children}
				<Footer />
				<MobileCreds />
			</main>
		</div>
	);
}

export default Layout;
