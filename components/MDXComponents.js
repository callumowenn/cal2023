import { getRandomColour } from "@lib/getRandomColour";
import Link from "next/link";

const CustomLink = (props) => {
	const href = props.href;
	const isInternalLink =
		href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} className="text-white hover:underline" />
			</Link>
		);
	}

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="text-white hover:underline"
			{...props}
		/>
	);
};

const CustomHeading = (props) => {
	return (
		<h1
			className="font-sans text-5xl italic font-black my-16"
			{...props}
		></h1>
	);
};
const CustomHeadingThree = (props) => {
	return (
		<h3
			className="font-sans text-3xl italic font-black my-8"
			{...props}
		></h3>
	);
};

const CustomBlockquote = (props) => {
	return (
		<blockquote
			className="border-l-4 border-white border-opacity-50 px-4 mt-8 mb-16"
			{...props}
		></blockquote>
	);
};
const CustomText = (props) => {
	return <p className="text-2xl my-4 text-half-white" {...props}></p>;
};
const CustomList = (props) => {
	return (
		<ul
			className="font-serif text-2xl my-8 list-disc list-inside text-half-white"
			{...props}
		></ul>
	);
};

const Picture = ({ pic, caption, alt }) => {
	return (
		<div className="flex flex-col items-center my-8">
			<img className=" max-w-950px max-h-550px" src={pic} alt={alt} />
			<p className="font-sans italic font-black my-2 opacity-75">
				{caption}
			</p>
		</div>
	);
};
const StandoutText = (props) => {
	return (
		<span
			className={`font-sans font-black italic text-standout-${getRandomColour()}`}
			{...props}
		></span>
	);
};

const MDXComponents = {
	h1: CustomHeading,
	h3: CustomHeadingThree,
	blockquote: CustomBlockquote,
	p: CustomText,
	a: CustomLink,
	ul: CustomList,
	Picture,
	StandoutText,
};

export default MDXComponents;
