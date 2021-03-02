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
			className="font-sans text-6xl italic font-black mt-32 mb-8 pb-8 border-b border-half-white sm:text-3xl sm:mt-16"
			{...props}
		></h1>
	);
};
const CustomHeadingTwo = (props) => {
	return (
		<h3
			className={`font-sans text-4xl italic font-black my-8 sm:text-3xl ${
				props.emoji ? "mt-4" : ""
			}`}
			{...props}
		></h3>
	);
};

const CustomHeadingThree = (props) => {
	return (
		<h3
			className="font-sans text-4xl italic font-black my-8 pb-8 border-half-white border-b sm:text-3xl"
			{...props}
		></h3>
	);
};

const CustomBlockquote = (props) => {
	return (
		<blockquote
			className="border-l-4 border-white border-opacity-50 italic px-4 my-16"
			{...props}
		></blockquote>
	);
};
const CustomText = (props) => {
	return (
		<p
			className="text-2xl sm:text-xl my-4 font-light text-half-white"
			{...props}
		></p>
	);
};
const CustomList = (props) => {
	return (
		<ul
			className="custom-list font-serif text-2xl font-light sm:text-2xl my-4 list-disc list-inside text-half-white"
			{...props}
		></ul>
	);
};
const CustomOrderedList = (props) => {
	return (
		<li
			className="font-serif text-2xl font-light sm:text-2xl my-4 list-disc list-inside text-half-white"
			{...props}
		></li>
	);
};

const Picture = ({ pic, caption, alt, portrait }) => {
	return (
		<div className="flex flex-col items-center my-4">
			<img
				className={`max-w-950px max-h-550px  tab-port:max-h-full ${
					portrait
						? "tab-port:max-w-sm sm:w-60vw"
						: " tab-port:w-main sm:w-screen"
				}`}
				loading="lazy"
				src={pic}
				alt={alt}
			/>
			{caption ? (
				<p className="font-sans italic font-black my-2 opacity-75 sm:text-sm sm:font-medium">
					{caption}
				</p>
			) : (
				""
			)}
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
const EmojiHeader = ({ emoji, lesson, lessonEmoji, children }) => {
	return (
		<div className="flex mt-16 pt-4 sm:pt-0 pb-4 mb-8 border-b  border-half-white bg-white bg-opacity-5 px-8 sm:px-4">
			<span className="text-8xl mt-8 mr-8 sm:text-5xl sm:mr-4	">
				{emoji}
			</span>
			<div className="flex flex-col">
				{children}
				<span
					className="font-serif text-3xl mb-8 sm:mb-4 italic text-half-white sm:text-2xl "
					style={{ marginTop: "-1rem" }}
				>
					{lesson}{" "}
					<span className="text-white not-italic">{lessonEmoji}</span>
				</span>
			</div>
		</div>
	);
};

const MDXComponents = {
	h1: CustomHeading,
	h2: CustomHeadingTwo,
	h3: CustomHeadingThree,
	blockquote: CustomBlockquote,
	p: CustomText,
	a: CustomLink,
	ul: CustomList,
	li: CustomOrderedList,
	Picture,
	StandoutText,
	EmojiHeader,
};

export default MDXComponents;
