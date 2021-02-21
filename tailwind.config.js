const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				incoming: "#555555",
				"half-white": "#ffffff80",
				"standout-green": "#A1D53F",
				"standout-pink": "#CF3FD5",
				"standout-purple": "#9B54EF",
				"standout-blue": "#3FD5D5",
				"standout-yellow": "#DDEF54",
				"standout-orange": "#EFAD54",
				"standout-red": "#EF5454",
				"bg-top": "#293035",
				"bg-bottom": "#1e2630",
			},
			width: {
				nav: "80px",
				"100px": "100px",
				"130px": "130px",
				"274px": "274px",
				"392px": "392px",
				"50vw": "50vw",
				"60vw": "60vw",
				"70vw": "70vw",
				"90vw": "90vw",
				main: "calc(100vw - 80px)",
			},
			maxWidth: {
				"500px": "500px",
				"750px": "750px",
				"950px": "950px",
				"50vw": "50vw",
				"60vw": "60vw",
				"70vw": "70vw",
				"80vw": "80vw",
				"90vw": "90vw",
				"95vw": "95vw",
				"mobile-text": "270px",
			},
			height: {
				"100px": "100px",
				"400px": "400px",
				"mobile-main": "calc(100vh - 64px - env(safe-area-inset-top))",
				"80vh": "80vh",
				"90vh": "90vh",
				pwa: "calc(4rem + env(safe-area-inset-top))",
			},
			maxHeight: {
				"400px": "400px",
				"550px": "550px",
			},
			backgroundImage: (theme) => ({
				"main-bg": "url('/assets/blur.png')",
				"blur-fade": "url('/assets/blur-fade.png')",
				mac: "url('/assets/mac.jpg')",
				doubs: "url('/assets/doubs.png')",
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
					"0%": { transform: "translate3d(0,0,0)" },
					"100%": { transform: "translate3d(-1939.61px,0,0)" },
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
			"not-sm": {
				min: "640px",
			},
		},
		padding: {
			0: "0px",
			0.5: "0.125rem",
			1: "0.25rem",
			1.5: "0.375rem",
			2: "0.5rem",
			2.5: "0.625rem",
			3: "0.75rem",
			3.5: "0.875rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			11: "2.75rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
			pwa: "calc(0.5rem + env(safe-area-inset-top))",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
