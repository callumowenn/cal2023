import admin from "firebase-admin";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			project_id: "cal2021",
			private_key: process.env.FIREBASE_PRIVATE_KEY,
			client_email: process.env.FIREBASE_CLIENT_EMAIL,
		}),
	});
}

export default admin;
