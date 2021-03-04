import ContactForm from "@components/contact/ContactForm";
import Socials from "@components/Socials";
import Head from "next/head";
import Image from "next/image";

function Contact() {
	return (
		<div className="w-main h-screen grid sm:w-screen sm:h-mobile-main">
			<Head>
				<title>Contact - Callum Owen</title>
				<meta
					name="description"
					content="Hit me up by email, LinkedIn, Instagram or leave a message using the form right here on the site."
				/>
			</Head>
			<div
				className="col-start-1 row-start-1 flex flex-col items-center justify-center"
				style={{
					backdropFilter: "blur(50px)",
					WebkitBackdropFilter: "blur(50px)",
					backgroundColor: "#11111180",
				}}
			>
				<Socials show />
				<div className="flex items-center my-12 sm:my-4">
					<Image width={70} height={70} src="/assets/me-flip.png" />
					<h1 className="font-sans ml-8 sm:ml-4  text-7xl sm:text-4xl font-bold italic text-white">
						Hit me up!
					</h1>
				</div>

				<ContactForm />
			</div>
			<div className="col-start-1 row-start-1 bg-mac bg-cover bg-fixed bg-right sm:bg-local"></div>
		</div>
	);
}

export default Contact;
