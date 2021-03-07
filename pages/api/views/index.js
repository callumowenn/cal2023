import admin from "@lib/admin";

const db = admin.firestore();

export default async (req, res) => {
	console.log("getting views from firestore");
	const docRef = await db.collection("views").get();
	let data = {};
	docRef.docs.forEach((doc) => {
		data[doc.id] = doc.data().value;
	});
	return res.status(200).json(data);
	// return res.status(200).json(
	// 	docRef.docs.map((doc) => ({
	// 		slug: doc.id,
	// 		views: doc.data().value,
	// 	}))
	// );
};
