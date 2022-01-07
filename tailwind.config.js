module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		colors: {
			orange: "#D87D4A",
			red: "#FF0000",
			black: "#101010",
			gray: "#F1F1F1",
			white: "#FFFFFF",
			green: "#58bc34",
			"para-gray": "#7e7e7e",
			"s-black": "rgba(0, 0, 0, 0.4)",
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
		animation: {
			spinning: " spinning 1s linear infinite",
			wiggle: "wiggle 1s ease-in-out infinite",
			ping: "ping 2s ease-in-out",
		},

		keyframes: {
			spinning: {
				"0%": {
					transform: " rotate(0deg)",
				},
				"100%": {
					transform: "rotate(360deg)",
				},
			},
			wiggle: {
				"0%, 100%": {
					transform: "rotate(-90deg)",
				},
				"50%": {
					transform: "rotate(90deg)",
				},
			},
			ping: {
				"0%": {
					transform: "scale(1)",
					opacity: "1",
				},
				"75%": {
					opacity: "0.3",
				},
				"100%": {
					transform: "scale(1)",
				},
			},
		},
		extend: {
			fontSize: {
				xs: ["12px", "18px"],
			},
		},
	},
	plugins: [],
};
