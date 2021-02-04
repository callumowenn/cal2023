const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"main-bg": "url('/assets/blur.png')",
			}),
			fontFamily: {
				sans: ["Helios", ...defaultTheme.fontFamily.sans],
				serif: ["alga", ...defaultTheme.fontFamily.serif],
				apple: ["-apple-system", "BlinkMacSystemFont"],
			},
			keyframes: {
				wave: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				wave: "wave 0.5s linear infinite",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
