import { db } from "@/lib/firebase";

export default async (_, res) => {
	// let ref = db.collection("views").doc(req.query.slug);
	// ref.get()
	// 	.then((doc) => {
	// 		if (doc.exists) {
	// 			console.log("Document data:", doc.data());
	// 			res.status(200).json(doc.data());
	// 		} else {
	// 			// doc.data() will be undefined in this case
	// 			console.log("No such document!");
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.log("Error getting document:", error);
	// 	});
	res.status(200).json({ hello: req.query.slug });
	// if (req.method === "POST") {
	// 	const ref = db.ref("views").child(req.query.slug);
	// 	const { snapshot } = await ref.transaction((currentViews) => {
	// 		if (currentViews === null) {
	// 			return 1;
	// 		}

	// 		return currentViews + 1;
	// 	});

	// 	return res.status(200).json({
	// 		total: snapshot.val(),
	// 	});
	// }

	// if (req.method === "GET") {
	// 	const snapshot = await db
	// 		.ref("views")
	// 		.child(req.query.slug)
	// 		.once("value");
	// 	const views = snapshot.val();

	// 	return res.status(200).json({ total: views });
	// }
};
