import { useRouter } from "next/router";

const { createContext, useEffect, useState, useContext } = require("react");

const menuContext = createContext();

export function ProvideMenu({ children }) {
	const menu = useProvideMenu();
	return <menuContext.Provider value={menu}>{children}</menuContext.Provider>;
}

export const useMenu = () => {
	return useContext(menuContext);
};

function useProvideMenu() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	useEffect(() => {
		setOpen(false);
	}, [router.asPath]);

	return {
		open,
		toggleMenu,
	};
}
