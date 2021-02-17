import { useState } from "react";

function ContactForm() {
	const [button, setButton] = useState("Send");

	const registerUser = async (event) => {
		event.preventDefault();
		setButton("Sending");

		fetch("/api/contact", {
			body: JSON.stringify({
				name: event.target.name.value,
				email: event.target.email.value,
				message: event.target.message.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		}).then((res) => {
			if (res.ok) {
				setButton("Sent!");
				console.log(res);
			} else {
				setButton("Error");
				console.log(res);
			}
		});
	};
	return (
		<form
			onSubmit={registerUser}
			className="flex flex-col max-w-95vw"
			name="contact"
		>
			<div className="flex my-4 sm:my-4">
				<label htmlFor="name" title="Name">
					👋
				</label>
				<input
					className="focus:ring-2 focus:ring-white"
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					placeholder="Name"
					required
				/>
			</div>
			<div className="flex my-4 sm:my-4">
				<label htmlFor="email" title="Email">
					✉️
				</label>
				<input
					className="focus:ring-2 focus:ring-white"
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					placeholder="Email"
					required
				/>
			</div>
			<div className="flex my-4 sm:my-4">
				<label htmlFor="message" title="Message">
					✏️
				</label>
				<textarea
					className="focus:ring-2 focus:ring-white"
					name="message"
					id="message"
					cols="30"
					rows="5"
					placeholder="Message"
					required
				></textarea>
			</div>
			{button == "Send" ? (
				<button
					className={`flex h-16 mt-6 w-48 px-6 self-center bg-gradient-to-b from-blue-400 to-blue-600 shadow-2xl rounded-xl text-xl text-white justify-center items-center group focus:outline-none focus:ring-2 focus:ring-white ${
						button != "Send"
							? "select-none pointer-events-none opacity-50"
							: ""
					}`}
					type="submit"
				>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="paper-plane"
						className={`svg-inline--fa fa-paper-plane fa-w-16 h-8 mr-4 transform group-hover:shadow-2xl ${
							button == "loading" ? "animate-rotate" : ""
						}`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
						></path>
					</svg>
					{button}
				</button>
			) : (
				<button
					className={`flex h-16 mt-6 w-48 px-6 self-center bg-gradient-to-b from-blue-400 to-blue-600 shadow-2xl rounded-xl text-xl text-white justify-center items-center group focus:outline-none focus:ring-2 focus:ring-white ${
						button != "Send"
							? "select-none pointer-events-none opacity-50"
							: ""
					}`}
					disabled
					type="submit"
				>
					{button == "Sending" ? (
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="paper-plane"
							className={`svg-inline--fa fa-paper-plane fa-w-16 h-8 mr-4 transform group-hover:shadow-2xl ${
								button == "Sending" ? "animate-rotate" : ""
							}`}
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="#ffffff"
								d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
							></path>
						</svg>
					) : button == "Error" ? (
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="times"
							className="svg-inline--fa fa-times fa-w-11 h-8 mr-4 transform group-hover:shadow-2xl"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 352 512"
						>
							<path
								fill="#ffffff"
								d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
							></path>
						</svg>
					) : (
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="check"
							className="svg-inline--fa fa-check fa-w-16 h-8 mr-4 transform group-hover:shadow-2xl"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
							></path>
						</svg>
					)}
					{button}
				</button>
			)}
		</form>
	);
}

export default ContactForm;
