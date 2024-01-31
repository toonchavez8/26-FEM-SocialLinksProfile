/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"fem-primary-green": "hsl(75, 94, 57)",
				"fem-White": "hsl(0, 0, 100)",
				"fem-Grey": "hsl(0, 0, 20)",
				"fem-Dark-Grey": "hsl(0, 0, 12)",
				"fem-Off-Black": "hsl(0, 0, 8)",
			},
		},
	},
	plugins: [],
};
