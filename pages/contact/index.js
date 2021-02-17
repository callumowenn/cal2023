import ContactForm from "@components/contact/ContactForm";
import Head from "next/head";

function Contact() {
	return (
		<div className="w-main h-screen grid sm:w-screen sm:h-mobile-main">
			<Head>
				<title>Contact ⚡ Callum Owen</title>
			</Head>
			<div
				className="col-start-1 row-start-1 flex flex-col items-center justify-center"
				style={{
					backdropFilter: "blur(50px)",
					WebkitBackdropFilter: "blur(50px)",
					backgroundColor: "#11111180",
				}}
			>
				<div className="flex items-center mb-8">
					<img className="w-24 mr-8" src="/assets/me-flip.png" />
					<h1 className="font-sans  text-4xl font-black text-white">
						Hit me up!
					</h1>
				</div>

				<ContactForm />
			</div>
			<div className="col-start-1 row-start-1 bg-mac bg-cover bg-fixed bg-right"></div>
		</div>
	);
}

export default Contact;
