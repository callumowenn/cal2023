const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
	host: "smtp-mail.outlook.com", // hostname
	secureConnection: false, // TLS requires secureConnection to be false
	port: 587, // port for secure SMTP
	tls: {
		ciphers: "SSLv3",
	},
	auth: {
		user: process.env.BOT_EMAIL,
		pass: process.env.BOT_PASSWORD,
	},
});

// setup e-mail data, even with unicode symbols

export default function handler(req, res) {
	var mailOptions = {
		from: `"calbot " ${process.env.BOT_EMAIL}`, // sender address (who sends)
		to: process.env.MY_EMAIL, // list of receivers (who receives)
		subject: "🚀 New Message 📲", // Subject line
		text: ``, // plaintext body
		html: `<br><br><h1>👋🏼 ${req.body.name}</h1><br><h3>✉️ ${req.body.email}</h3><br><h3>✏️ ${req.body.message}</h3>`, // html body
	};

	transporter.sendMail(mailOptions, function (error) {
		if (error) {
			console.log("oops");
			res.status(400).send({ message: "this is an error!" });
		} else {
			res.status(200).json(req.body);
			console.log("Message sent");
		}
	});
}
