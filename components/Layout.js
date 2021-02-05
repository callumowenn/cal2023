import Head from "next/head";
import Footer from "./Footer";
import Nav from "@components/Nav";

function Layout({ children }) {
	return (
		<div className="flex flex-row w-screen bg-main-bg min-h-screen bg-fixed bg-cover">
			<Head>
				<title>Callum Owen</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#333333"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/browserconfig.xml"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link
					rel="stylesheet"
					href="https://use.typekit.net/hbm6nog.css"
				/>
			</Head>
			<Nav />
			<main className="flex flex-col flex-grow max-w-full overflow-hidden">
				{children}
				<Footer />
			</main>
		</div>
	);
}

export default Layout;