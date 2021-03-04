import { useMenu } from "lib/menu";
import Footer from "./Footer";

function Menu() {
	const menu = useMenu();
	return (
		<div
			className={`fixed w-main transition bg-black bg-opacity-20 sm:w-screen z-50 ${
				menu.open ? "block" : "hidden"
			}`}
			style={{
				backdropFilter: "blur(80px)",
				WebkitBackdropFilter: "blur(80px)",
			}}
		>
			<Footer />
		</div>
	);
}

export default Menu;
