function ContactForm() {
	const registerUser = async (event) => {
		event.preventDefault();

		const res = await fetch("/api/contact", {
			body: JSON.stringify({
				name: event.target.name.value,
				email: event.target.email.value,
				message: event.target.message.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
		console.log(result);
	};
	return (
		<form
			onSubmit={registerUser}
			className="flex flex-col max-w-95vw"
			name="contact"
			data-netlify="true"
			method="POST"
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
					autoFocus
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
			<button
				className="flex h-16 mt-6 w-max px-6 self-center bg-gradient-to-b from-blue-400 to-blue-600 shadow-2xl rounded-xl text-xl text-white justify-center items-center group focus:outline-none focus:ring-2 focus:ring-white"
				type="submit"
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="paper-plane"
					className="svg-inline--fa fa-paper-plane fa-w-16 h-8 mr-4 transform group-hover:shadow-2xl"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
					></path>
				</svg>
				Send
			</button>
		</form>
	);
}

export default ContactForm;
