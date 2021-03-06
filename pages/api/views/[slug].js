import admin from "@lib/admin";

const db = admin.firestore();

export default async (req, res) => {
	if (req.method === "GET") {
		var docRef = await db.collection("views").doc(req.query.slug);

		return new Promise((resolve, reject) => {
			docRef
				.get()
				.then((doc) => {
					if (doc.exists) {
						res.status(200).json(doc.data());
					} else {
						res.end(`oops! ${req.query.slug} doesn't exist`);
					}
					resolve();
				})
				.catch((error) => {
					console.log("Error getting document:", error);
					resolve();
				});
		});
	}
	if (req.method === "POST") {
		var docRef = await db.collection("views").doc(req.query.slug);
		return new Promise((resolve, reject) => {
			docRef
				.update({
					value: admin.firestore.FieldValue.increment(1),
				})
				.then(() => {
					res.status(200);
					resolve();
				})
				.catch((error) => {
					console.log(error);
					res.end("oops!");
					resolve();
				});
		});
	}
};
