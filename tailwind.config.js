module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		colors: {
			orange: "#D87D4A",
			black: "#101010",
			gray: "#F1F1F1",
			"s-grey": "#f1f1f1",
			"light-gray": "#333333",
			"m-gray": "#777777",
			"soft-gray": "#7e7e7e",
			white: "#FFFFFF",
			"s-white": "#FAFAFA",
			"s-orange": "#FBAF85",
		},
		fontFamily: {
			manrope: ["Manrope", "Verdana", "sans-serif"],
		},
		container: {
			center: true,
			// padding: "4rem",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "990px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
		extend: {},
	},
	plugins: [],
};
