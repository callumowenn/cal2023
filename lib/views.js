const { createContext, useState, useContext } = require("react");

const viewsContext = createContext();

export function ProvideViews({ children }) {
	const views = useProvideViews();
	return (
		<viewsContext.Provider value={views}>{children}</viewsContext.Provider>
	);
}

export const useViews = () => {
	return useContext(viewsContext);
};

function useProvideViews() {
	const [data, setData] = useState(null);

	return {
		data,
		setData,
	};
}
