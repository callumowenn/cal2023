import { useRouter } from "next/router";
import Block from "@components/Block";
function Project() {
	const router = useRouter();
	const { id } = router.query;
	return <Block>{id}</Block>;
}

export default Project;
