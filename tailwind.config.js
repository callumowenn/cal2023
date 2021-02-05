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
				rotate: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				scrolling: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-1939.61px)" },
				},
			},
			animation: {
				wave: "wave 0.5s linear infinite",
				rotate: "rotate 8s linear infinite",
				scrolling: "scrolling 8s linear infinite",
			},
		},
		screens: {
			sm: {
				max: "639px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
