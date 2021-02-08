import "../styles/global.css";
import Layout from "@components/Layout";
import { ProvideMenu } from "lib/menu";

function App({ Component, pageProps }) {
	return (
		<ProvideMenu>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ProvideMenu>
	);
}

export default App;
