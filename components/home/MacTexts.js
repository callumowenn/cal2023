const { default: MacText } = require("./MacText");

function MacTexts() {
	return (
		<div className="flex flex-col flex-grow px-6 py-4 sm:px-4 sm:py-3">
			<MacText
				me
				text="Born in Wrexham and raised in a small town in Shropshire - not the
			most exciting background 🏡"
			/>
			<MacText text="wow. that ur tinder bio?" />
			<MacText
				me
				text="Studied Maths, Further Maths, Physics and Computer Science at college, getting A*A*A*A 📚"
			/>
			<MacText text="nerd" />
			<MacText
				me
				text="Maybe, but I’m also really into music, travel and football 🎧 🌴 ⚽️"
			/>
			<MacText text="oh, that’s pretty cool I guess." />
			<MacText me text="Check out these pics 👇" />
		</div>
	);
}

export default MacTexts;
