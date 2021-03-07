import useSWR from "swr";
import fetcher from "./fetcher";

const { createContext, useState, useContext, useEffect } = require("react");

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

	const fetchData = () => {
		console.log("fetching views from view hook");
		const { data } = useSWR(`/api/views`, fetcher);
		setData(data);
	};

	return {
		data,
		fetchData,
	};
}
