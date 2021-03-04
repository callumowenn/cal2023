import FooterApps from "./FooterApps";

function Footer({ menu }) {
	return (
		<div
			className={`h-screen flex tab-port:flex-col sm:h-mobile-main ${
				menu ? "inner-menu" : ""
			}`}
		>
			<div className="footer-grid tab-port:h-mobile-main grid grid-cols-4 grid-rows-2 flex-grow text-5xl italic tab-port:grid-cols-2 tab-port:grid-rows-3 sm:text-3xl">
				{/* <FooterGrid /> */}
				<FooterApps />
			</div>
		</div>
	);
}

export default Footer;
