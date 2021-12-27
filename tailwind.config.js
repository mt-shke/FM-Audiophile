module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		colors: {
			orange: "#D87D4A",
			black: "#101010",
			"s-black": "rgba(0, 0, 0, 0.4)",
			gray: "#F1F1F1",
			"s-grey": "#f1f1f1",
			"light-gray": "#333333",
			"m-gray": "#777777",
			"b-gray": "#4c4c4c",
			"soft-gray": "#7e7e7e",
			white: "#FFFFFF",
			"s-white": "#FAFAFA",
			"s-orange": "#FBAF85",
			transparent: "rgb(0, 0, 0, 0)",
		},
		fontFamily: {
			manrope: ["Manrope", "Verdana", "sans-serif"],
		},
		screens: {
			sm: "640px", // => @media (min-width: 640px) { ... }
			md: "768px", // => @media (min-width: 768px) { ... }
			lg: "1024px", // => @media (min-width: 1024px) { ... }
			xl: "1280px", // => @media (min-width: 1280px) { ... }
			"2xl": "1536px", // => @media (min-width: 1280px) { ... }
		},

		container: {
			center: true,
			padding: {
				DEFAULT: "0rem",
				sm: "0rem",
				md: "0rem",
			},
		},
		extend: {},
	},
	plugins: [],
};
