import MacButtons from "./MacButtons";
import MacMain from "./MacMain";
import MacPicture from "./MacPicture";
import MacPreview from "./MacPreview";
import MacSidebar from "./MacSidebar";
import MacTexts from "./MacTexts";
import MacTopBar from "./MacTopBar";

function MacWindow({ pic, alt }) {
	return (
		<div
			className="flex shadow-xl rounded-2xl overflow-hidden my-24 font-apple window sm:flex-col"
			style={{
				width: "700px",
				maxWidth: "90vw",
				height: `${pic ? "500px" : ""}`,
			}}
		>
			<MacSidebar>
				<MacButtons />
				{pic ? <MacPreview pic={pic} alt={alt} /> : ""}
			</MacSidebar>
			<MacMain>
				<MacTopBar />
				{pic ? <MacPicture pic={pic} alt={alt} /> : <MacTexts />}
			</MacMain>
		</div>
	);
}

export default MacWindow;
