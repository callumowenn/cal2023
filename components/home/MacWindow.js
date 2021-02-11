import MacButtons from "./MacButtons";
import MacMain from "./MacMain";
import MacPicture from "./MacPicture";
import MacPreview from "./MacPreview";
import MacSidebar from "./MacSidebar";
import MacTexts from "./MacTexts";
import MacTopBar from "./MacTopBar";

function MacWindow({ pic, alt }) {
	return (
		<div className="window flex flex-col window  my-24">
			<div
				className="flex shadow-xl rounded-2xl overflow-hidden mb-8 font-apple  sm:flex-col"
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
			{pic ? (
				<div
					className="shadow-xl rounded-2xl py-4 px-24  flex items-center justify-center w-max self-center overflow-hidden max-w-90vw sm:px-8"
					style={{
						backdropFilter: "blur(80px)",
						WebkitBackdropFilter: "blur(80px)",
						background: "#11111180",
					}}
				>
					<p className="text-gray-200  font-apple">{alt}</p>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default MacWindow;
