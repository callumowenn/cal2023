import { useMenu } from "lib/menu";
import Footer from "./Footer";

function Menu() {
	const menu = useMenu();
	return (
		<div
			className={`fixed w-main the-menu bg-black bg-opacity-20 sm:w-screen z-50 ${
				menu.open ? "opacity-100 open" : "opacity-0 closed"
			}`}
			style={{
				backdropFilter: "blur(80px)",
				WebkitBackdropFilter: "blur(80px)",
			}}
		>
			<Footer menu />
		</div>
	);
}

export default Menu;
