import admin from "@lib/admin";

const db = admin.firestore();

export default async (req, res) => {
	const docRef = await db.collection("views").get();
	let data = {};
	docRef.docs.forEach((doc) => {
		data[doc.id] = doc.data().value;
	});
	return res.status(200).json(data);
};
