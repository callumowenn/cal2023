import "../styles/global.css";
import Layout from "@components/Layout";
import { ProvideMenu } from "lib/menu";
import { ProvideViews } from "@lib/views";

function App({ Component, pageProps }) {
	return (
		<ProvideMenu>
			<ProvideViews>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ProvideViews>
		</ProvideMenu>
	);
}

export default App;
