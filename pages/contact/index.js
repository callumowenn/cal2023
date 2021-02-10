import ContactForm from "@components/contact/ContactForm";

function Contact() {
	return (
		<div className="w-main h-screen grid sm:w-screen">
			<div
				className="col-start-1 row-start-1 flex items-center justify-center"
				style={{
					backdropFilter: "blur(50px)",
					WebkitBackdropFilter: "blur(50px)",
					backgroundColor: "#11111180",
				}}
			>
				<ContactForm />
			</div>
			<div className="col-start-1 row-start-1 bg-mac bg-cover bg-right"></div>
		</div>
	);
}

export default Contact;
