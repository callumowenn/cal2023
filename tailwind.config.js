const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				incoming: "#555555",
			},
			width: {
				nav: "80px",
				"100px": "100px",
				"130px": "130px",
				"90vw": "90vw",
				main: "calc(100vw - 80px)",
			},
			maxWidth: {
				"500px": "500px",
				"80vw": "80vw",
			},
			height: {
				"100px": "100px",
				"400px": "400px",
			},
			maxHeight: {
				"400px": "400px",
			},
			backgroundImage: (theme) => ({
				"main-bg": "url('/assets/blur.png')",
				mac: "url('/assets/mac.jpg')",
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
