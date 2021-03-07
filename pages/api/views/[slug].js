import admin from "@lib/admin";

const db = admin.firestore();

export default async (req, res) => {
	return new Promise((resolve) => {
		if (req.method === "POST") {
			console.log("adding view to: " + req.query.slug);
			db.collection("views")
				.doc(req.query.slug)
				.update({
					value: admin.firestore.FieldValue.increment(1),
				});
			res.status(200).end();
			return resolve();
		}
		res.status(405).end();
		return resolve();
	});
};
