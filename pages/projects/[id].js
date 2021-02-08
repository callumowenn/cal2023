import Block from "@components/Block";

function Project({ slug }) {
	return <Block>{slug}</Block>;
}

export default Project;

export function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export function getStaticProps({ params }) {
	let slug = params.id;
	return {
		props: { slug },
		revalidate: false,
	};
}
